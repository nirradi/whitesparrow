'use strict';

export default (state, action) => {

	if (state == null)
		return [];
		
	if (action.output)  {
		action.output = Array.isArray(action.output) ? action.output : [action.output];
		return [...state, ...action.output];
	}
		
	else
		return state;
	
}
