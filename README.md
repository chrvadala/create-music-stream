# create-music-stream

Creates a PCM 16 bit Little Endian Stream from a mp3 file or youtube video

## Mp3 local file
```javascript
const Speaker = require('speaker')
const createMusicStream = require('create-music-stream')

createMusicStream('./track.mp3')
  .pipe(new Speaker())
```

## Youtube video
 ```javascript
 const Speaker = require('speaker')
 const createMusicStream = require('create-music-stream')

 createMusicStream('https://www.youtube.com/watch?v=fz4MzJTeL0c')
   .pipe(new Speaker())
 ```

## FAQ
- If the YouTube player doesn't work read this article [What if it stops working?](https://github.com/fent/node-ytdl-core#what-if-it-stops-working)
- If the ffmpeg binary is not found you might force the path with `require('fluent-ffmpeg').setFfmpegPath('/Users/chri/Bin/ffmpeg')`
