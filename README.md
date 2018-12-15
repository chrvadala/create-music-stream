# create-music-stream

Creates a PCM 16 bit Little Endian Stream from a **mp3 file** or **youtube video**

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard.js-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/v/create-music-stream.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/create-music-stream)
[![Downloads](https://img.shields.io/npm/dm/create-music-stream.svg)](https://www.npmjs.com/package/create-music-stream)
[![Donate](https://img.shields.io/badge/donate-PayPal-green.svg)](https://www.paypal.me/chrvadala/25)

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
- If the ffmpeg binary is not found you might force the path with the following code
```javascript
require('fluent-ffmpeg')
  .setFfmpegPath('/your/path/to/ffmpeg')
```

## Contributors
- [chrvadala](https://github.com/chrvadala) (author)
