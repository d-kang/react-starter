import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

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

const asyncInitialState = {
  githubResponse: {},
};

const myAsyncFunc = (state = asyncInitialState, action) => {
  switch (action.type) {
    case 'FETCH_GITHUB_DATA':
      return {
        ...state,
        githubResponse: action.githubResponse,
      };
    default:
      return state;
  }
};


const reducers = combineReducers({
  global: myCountReducer,
  async: myAsyncFunc,
});


export default createStore(
  reducers,
  compose(
    applyMiddleware(logger, thunk),
    window.devToolsExtension(),
  ),
);
