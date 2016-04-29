#!/usr/bin/env node
var meow = require('meow');
var openImage = require('./');


var cli = meow([
    'Usage:',
    '  $ open-image <image-path>',
    '',
    '<image-path> can be a filesystem path or a url to the image.'
]);


var imagePath = cli.input[0];
openImage(imagePath);
