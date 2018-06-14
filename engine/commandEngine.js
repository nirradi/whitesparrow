'use strict';

import actions from './actions';
import store from '../redux/store';
import programRegistry from '../programs/programRegistry'

function exec(args) {
	return (dispatch, getState) => {
		store.dispatch(actions.input(args));
		programRegistry[getState().program[0]].run(args, store.getState());
	}
}

export { exec };