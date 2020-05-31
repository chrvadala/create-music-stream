# create-music-stream

Creates a PCM 16 bit Little Endian Stream from a **mp3 file** or **youtube video**

[![chrvadala](https://img.shields.io/badge/website-chrvadala-orange.svg)](https://chrvadala.github.io)
[![Test](https://github.com/chrvadala/create-music-stream/workflows/Test/badge.svg)](https://github.com/chrvadala/create-music-stream/actions)
[![Coverage Status](https://coveralls.io/repos/github/chrvadala/create-music-stream/badge.svg?branch=master)](https://coveralls.io/github/chrvadala/create-music-stream?branch=master)
[![npm](https://img.shields.io/npm/v/create-music-stream.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/create-music-stream)
[![Downloads](https://img.shields.io/npm/dm/create-music-stream.svg)](https://www.npmjs.com/package/create-music-stream)
[![Donate](https://img.shields.io/badge/donate-PayPal-green.svg)](https://www.paypal.me/chrvadala/25)

# Usage
## 1. Install native dependencies
```sh
sudo apt-get install libasound2-dev ffmpeg
```
## 2. Install package
```sh
yarn add create-music-stream
```
## 3. Get music stream
```javascript
const createMusicStream = require('create-music-stream')
const stream = createMusicStream(source, logger)
```

# Examples
## Stream local MP3 file
```javascript
const Speaker = require('speaker')
const createMusicStream = require('create-music-stream')

createMusicStream('./track.mp3', console.log)
  .pipe(new Speaker())
```

## Stream Youtube audio
 ```javascript
 const Speaker = require('speaker')
 const createMusicStream = require('create-music-stream')

 createMusicStream('https://www.youtube.com/watch?v=fz4MzJTeL0c', console.log)
   .pipe(new Speaker())
 ```

## Changelog
- **1.0** - First public version
- **1.1** - Adds tests, Adds standard.js, Enables gh-actions, Upgrades deps
- **1.2** - Upgrades deps

## FAQ
- If the YouTube player doesn't work read this article [What if it stops working?](https://github.com/fent/node-ytdl-core#what-if-it-stops-working)
- If `speaker` dependency is unable to build read this doc [Audio Backend Selection](https://www.npmjs.com/package/speaker#audio-backend-selection)
- If you want to force `ffmpeg` binary path you can force it with the following code snippet
```javascript
require('fluent-ffmpeg')
  .setFfmpegPath('/your/path/to/ffmpeg')
```

## Contributors
- [chrvadala](https://github.com/chrvadala) (author)
- [cihadturhan](https://github.com/cihadturhan)
