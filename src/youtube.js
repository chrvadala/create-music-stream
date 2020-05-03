const ytdl = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg')

module.exports = {
  isYoutube (input) {
    return typeof input === 'string' && (ytdl.validateURL(input) || ytdl.validateID(input))
  },

  getYoutubeStream (videoID, log) {
    const youtubeDownloader = ytdl(videoID, {
      quality: 'highestaudio',
      filter: 'audioonly'
    })

    return ffmpeg(youtubeDownloader)
      .outputOptions([
        '-f s16le',
        '-acodec pcm_s16le',
        '-vn',
        '-ac 2',
        '-ar 44100'
      ])

      .on('progress', p => log(`Downloaded ${p.targetSize}kb`))
  }
}
