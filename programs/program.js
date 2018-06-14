'use strict';

import actions from '../engine/actions';
import store from '../redux/store';


export default {
	out: (output) => { store.dispatch(actions.echo(output)); },
	quit: () => { store.dispatch(actions.quit()); },
	exec: (program) => {
		program.onLoad(); 
		store.dispatch(actions.exec(program.name)); 
	},
	onLoad: () => {},
}