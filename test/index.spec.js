const {test, expect} = require('@jest/globals')
const createMusicStream = require('..')
const path = require('path')
const {Writable} = require('stream');

test.each([
  ['local_file', path.join(__dirname, '../track.mp3')],
  ['youtube', 'https://www.youtube.com/watch?v=QohH89Eu5iM']
])
("load stream from %s (%s)", (sourceType, source, done) => {
  const logFunc = jest.fn()
  let receivedBytes = 0
  const stream = createMusicStream(source, logFunc)

  const myWritable = new Writable({
    write(chunk, encoding, callback) {
      // console.log(`Received ${chunk.length} bytes of data.`);
      receivedBytes += chunk.length
      callback()
    },
    final(callback) {
      // console.log(`Eventually received ${receivedBytes} bytes of data.`)
      expect(receivedBytes).toMatchSnapshot()
      expect(logFunc).toHaveBeenCalled()
      expect(receivedBytes).toBeGreaterThan(0)
      done()
      callback()
    }
  });
  stream.pipe(myWritable)
}, 20 * 1000)

test("unable to handle", () => {
  expect(() => createMusicStream('/tmp/not_found')).toThrow()
})
