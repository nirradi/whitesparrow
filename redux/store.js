import {  
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import outputReducer from './outputReducer';
import commandStackReducer from './commandStackReducer';
import terminalStateReducer from './terminalStateReducer';
import initialState         from '../levels/initialState';


import thunk from 'redux-thunk';


let reducers = combineReducers({
    output: outputReducer,
    availableCommands: commandStackReducer,
    terminal: terminalStateReducer,
});

export function configureStore(initialState) {  
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  )
  return store;
};

const store = configureStore(initialState); 

export default store;