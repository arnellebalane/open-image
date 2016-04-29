var path = require('path');
var pify = require('pify');
var childProcess = pify(require('child_process'));
var isUrl = require('is-url');


var commands = [
    {
        'command': 'eog',
        'parameters': ['%s']
    }
];


var availableCommands = null;


function determineAvailableCommands() {
    var commandsDict = {};
    availableCommands = [];

    var names = commands.map(function mapCb(command) {
        commandsDict[command.command] = command;
        return command.command;
    });
    var whichCommand = 'which -a ' + names.join('; which -a ');

    return childProcess.exec(whichCommand).then(function thenCb(output) {
        output = output.trim();

        if (!output) {
            throw new Error('None of the commands were found.');
        }

        output.split('\n').forEach(function forEachCb(command) {
            if (command[0] === path.sep) {
                command = command.split(path.sep).pop();
                availableCommands.push(commandsDict[command]);
            }
        });
    });
}


function openImage(imagePath) {
    if (!availableCommands) {
        return determineAvailableCommands().then(function thenCb() {
            return openImage(imagePath);
        });
    }

    if (!imagePath) {
        throw new Error('No image path given.');
    } else if (!isUrl(imagePath)) {
        imagePath = path.resolve(imagePath);
    }

    var command = availableCommands[0];
    var parameters = command.parameters.slice();
    parameters[parameters.length - 1] = parameters[parameters.length - 1]
        .replace('%s', imagePath);

    return childProcess.execFile(command.command, parameters);
}


module.exports = openImage;
