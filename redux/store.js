import {  
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import outputReducer from './outputReducer';
import programStackReducer from './programStackReducer';
import terminalStateReducer from './terminalStateReducer';
import levelReducer from './levelReducer';
import levelMiddleware from './levelMiddleware';
import initialState         from '../levels/initialState';



import thunk from 'redux-thunk';


let reducers = combineReducers({
    output: outputReducer,  
    program: programStackReducer,
    terminal: terminalStateReducer,
    levels: levelReducer,
});

export function configureStore(initialState) {  
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, levelMiddleware),
  )
  return store;
};

const store = configureStore(initialState); 

export default store;