import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import logger from 'redux-logger';

const initialState = {
  count: 0,
};


const myCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  global: myCountReducer,
});

export default createStore(reducers, compose(applyMiddleware(logger), window.devToolsExtension()));
