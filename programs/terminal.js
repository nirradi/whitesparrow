'use strict';

import program from './program';
import {login} from './login';
import {mail} from './mail';
import {gameState} from '../levels/gameState';
console.log(gameState);
var terminal = Object.create(program)


terminal.help = (args) => { terminal.out(['Please press one of the following available commands', gameState.terminalCommands]);  };

terminal.login = () => { 
	terminal.exec(login); 
} 

terminal.mail = () => {
	terminal.out("you have mail");
	terminal.exec(mail); 
}

terminal.run = (args, state) => {
	console.log("...", gameState.terminalCommands);
	args = args.split(' ');
	let command = args[0];
	if (command in gameState.terminalCommands)
		return terminal[command](args);
	else
		terminal.out("bad command");
}

export { terminal }; 
