if (process.platform === 'linux') {
    module.exports = require('./lib/linux');
} else {
    throw new Error('Your platform is not supported yet.');
}
