open-image
==========

Open/view an image.


### Install

You can install it locally:

```bash
npm install --save open-image
```

or globally:

```
npm install -g open-image
```


### Usage

```javascript
var openImage = require('open-image');

openImage('/path/or/url/to/image.png');
```


### API

#### `openImage(imagePath)`

Opens the image at the given `imagePath`.


### CLI

```bash
$ open-image --help

  Open/view an image

  Usage:
    $ open-image <image-path>

  <image-path> can be a filesystem path or a url to the image.
```


### License

MIT License
