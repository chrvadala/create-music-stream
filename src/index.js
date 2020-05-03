const mp3 = require('./mp3')
const youtube = require('./youtube')

module.exports = function (input, log = console.log) {
  if (mp3.isMp3(input)) {
    return mp3.getMp3Stream(input, log)
  }

  if (youtube.isYoutube(input)) {
    return youtube.getYoutubeStream(input, log)
  }

  throw new Error('The argument should be a music file or a youtube link.')
}
