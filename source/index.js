import factory from './factory';

let commands = null;

if (process.platform === 'linux') {
    commands = [{
        command: 'eog',
        parameters: ['%s']
    }];
} else if (process.platform === 'darwin') {
    commands = [{
        command: 'open',
        parameters: ['%s']
    }];
}

if (!commands) {
    throw new Error('Your platform is not supported yet.');
}

export default factory(commands);
