'use strict';

export default (state = [], action) => {

	switch (action.type) {
		case 'EXEC': 
			return [action.program, ...state];
		case 'QUIT': 
			return [...state.slice(1)]
		default:
			return state;
	}
}
