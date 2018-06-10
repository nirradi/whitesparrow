'use strict';

import actions from './actions';
import store from '../redux/store';

var commands = {
	'help' : (args) => { store.dispatch(actions.echo(['Please press one of the following available commands: ', ...Object.keys(store.getState().availableCommands)])); },
	'quit' : (args) => { window.location.href = "https://www.google.com/search?source=hp&ei=9nkdW8vUDcirsgG4sJC4DA&q=What+should+i+do+now&oq=What+should+i+do+now&gs_l=psy-ab.3..0l10.8568.14474.0.16007.42.27.6.0.0.0.325.3710.0j14j5j1.21.0....0...1.1.64.psy-ab..16.26.3732.6..35i39k1j0i131k1j0i131i67k1j0i67k1j0i10i203k1j0i10k1j0i203k1.127.dZiMMrMqWtE" },
	'login': () => {},
}

export default commands;