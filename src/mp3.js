const fs = require('fs')
const progress = require('progress-stream')
const lame = require('lame')

module.exports = {
  isMp3 (input) {
    return typeof input === 'string' && hasMp3Extension(input) && isFileReadable(input)

    function hasMp3Extension () {
      return /\.mp3$/.test(input)
    }

    function isFileReadable () {
      try {
        fs.accessSync(input, fs.constants.R_OK)
        return true
      } catch (e) {
        return false
      }
    }
  },

  getMp3Stream (filename, log) {
    filename = fs.realpathSync(filename)

    return fs.createReadStream(filename)

      .pipe(progress(
        { time: 500, length: fs.statSync(filename).size },
        progress => log(`Mp3 read stream: ${Math.round(progress.percentage)}%`)
      ))

      .pipe(new lame.Decoder())
  }
}
