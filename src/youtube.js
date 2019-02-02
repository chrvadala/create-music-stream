const ytdl = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg')

module.exports = {
  isYoutube(input) {
    return typeof input === "string" && (ytdl.validateURL(input) || ytdl.validateID(input))
  },
  printProgress(progress)  {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(progress);
  },
  getYoutubeStream(videoID, log) {
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
        '-ar 44100',
      ])

      .on('progress', p => this.printProgress(`Downloaded ${p.targetSize}kb`))
  }
}
