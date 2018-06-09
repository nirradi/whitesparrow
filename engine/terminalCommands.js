'use strict';
import echo from './actions';

export default {
	'echo' : (args) => {
		store.dispatch(echo(args));
	}
}