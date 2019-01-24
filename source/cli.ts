#!/usr/bin/env node
import '@babel/polyfill';
import meow from 'meow';
import chalk from 'chalk';
import openImage from '.';

const cli = meow(`
    ${chalk.dim.underline('Usage:')}
      ${chalk.dim('$')} ${chalk.green('open-image')} ${chalk.yellow('<image-path>')}

    ${chalk.yellow('<image-path>')} ${chalk.dim('can be a filesystem path or url to the image')}

    ${chalk.dim.underline('Examples:')}
      ${chalk.dim('$')} ${chalk.green('open-image')} ${chalk.yellow('sample-image.jpg')}
      ${chalk.dim('$')} ${chalk.green('open-image')} ${chalk.yellow('http://site.com/image.jpg')}
`);

const imagePath = cli.input[0];
openImage(imagePath);
