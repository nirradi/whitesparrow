'use strict';

import terminalCommands from './terminalCommands';

var commands = Object.assign({}, terminalCommands);

function runCommand(command, args) {
	return commands[command](args);
}

export { runCommand }; 

