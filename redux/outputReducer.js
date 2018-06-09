'use strict';

export default (state, action) => {

	if (state == null)
		return [];
		
	if (action.output) 
		return [...state, action.output];
	else
		return state;
	
}
