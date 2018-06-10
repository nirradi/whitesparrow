'use strict';

import actions from './actions';
import store from '../redux/store';
import {runCommand} from './commands';

function exec(args) {
	return (dispatch, getState) => {
			dispatch(actions.echo(getState().terminal.prompt + args));
			args = args.split(' ');
			if(args[0] in getState().availableCommands)
				return runCommand(getState().availableCommands[args[0]], args);	
			else
				return dispatch(actions.echo('bad command'));
	}
}

export { exec };