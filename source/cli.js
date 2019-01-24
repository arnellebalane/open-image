#!/usr/bin/env node
import '@babel/polyfill';
import meow from 'meow';
import openImage from '.';

const cli = meow(`
    Usage:
      $ open-image <image-path>

    <image-path> can be a filesystem path or url to the image
`);

const imagePath = cli.input[0];
openImage(imagePath);
