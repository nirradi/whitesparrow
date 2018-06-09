'use strict';

import actions from './actions';

var commands = {
	'help' : (dispatch, args, state) => { dispatch(actions.echo('These are the available commands')); }
}

var runCommand = (dispatch, command, args, state) => {
	return commands[command](dispatch, args, state);
}

function exec(args) {
	return (dispatch, getState) => {
			args = args.split(' ');
			if(args[0] in getState().availableCommands)
				return runCommand(dispatch, getState().availableCommands[args[0]], args, getState());	
			else
				return dispatch(actions.echo('bad command'));
	}
}

export { exec };