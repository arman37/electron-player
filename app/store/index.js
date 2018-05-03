/**
 * @author arman
 * @since 5/3/18
 *
 */


import { createStore, applyMiddleware } from 'redux';
import initialState from '../store/initial-state';
import thunkMiddleware from 'redux-thunk';
import Reducer from '../reducers';

let logger = store => next => action => {
  let result;
  console.log('Dispatching: ', action.type);
  console.log('Prev state: ', store.getState());
  console.log('Action: ', action);

  result = next(action);

  console.log('Next state: ', store.getState());

  return result;
};

const storeFactory = (state = initialState) => applyMiddleware(logger, thunkMiddleware)(createStore)(Reducer, state);

export default storeFactory;