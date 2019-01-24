import path from 'path';
import execa from 'execa';
import isUrl from 'is-url';

export default function factory(commands) {
    async function getCommand() {
        const availableCommands = await Promise.all(commands.map(async command => {
            try {
                await execa.stdout('which', [command.command]);
                return command;
            } catch (error) {
                return false;
            }
        }));

        return availableCommands.filter(Boolean)[0] || null;
    }

    return async function openImage(imagePath) {
        const command = await getCommand();
        if (!command) {
            return Promise.reject(new Error('No command to open the image is available in your platform.'));
        }

        if (!imagePath) {
            return Promise.reject(new Error('The imagePath argument is required.'));
        } else if (!isUrl(imagePath)) {
            imagePath = path.resolve(imagePath);
        }

        const parameters = [...command.parameters]
            .map(parameter => parameter.replace('%s', imagePath));

        return execa(command.command, parameters);
    };
}
