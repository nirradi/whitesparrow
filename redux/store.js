import {  
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import outputReducer from './outputReducer';


import thunk from 'redux-thunk';


let reducers = combineReducers({
    output: outputReducer
});

export function configureStore(initialState) {  
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  )
  return store;
};

const store = configureStore({output: []}); 

export default store;