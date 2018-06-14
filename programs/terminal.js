'use strict';

import program from './program';
import {login} from './login';
import {mail} from './mail';
import gameState from '../levels/gameState';
var terminal = Object.create(program)

terminal.help = (args) => { terminal.out(['Please press one of the following available commands', ...gameState.terminalCommands]);  };

terminal.login = () => { 
	terminal.exec(login); 
} 

terminal.mail = () => {
	terminal.exec(mail); 
}

terminal.run = (args, state) => {
	let terminalCommands = gameState.terminalCommands;
	args = args.split(' ');
	let command = args[0];
	if (terminalCommands.indexOf(command) > -1)
		return terminal[command](args);
	else
		terminal.out("bad command");
}

export { terminal }; 
