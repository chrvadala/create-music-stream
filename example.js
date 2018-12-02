const Speaker = require('speaker')
const createMusicStream = require('.')

createMusicStream(process.argv[2])

  .pipe(new Speaker())
