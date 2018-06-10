'use strict';

import actions from './actions';
import store from '../redux/store';

var commands = {
	'help' : (args) => { store.dispatch(actions.echo('These are the available commands')); }
}

export default commands;