import {  
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import outputReducer from './outputReducer';
import commandStackReducer from './commandStackReducer';


import thunk from 'redux-thunk';


let reducers = combineReducers({
    output: outputReducer,
	availableCommands: commandStackReducer,
});

export function configureStore(initialState) {  
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  )
  return store;
};

const store = configureStore({
		output: [],
		availableCommands: {
			'?' : 'help',
			'help': 'help',
		}
		
	}); 

export default store;