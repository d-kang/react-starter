import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { createEpicMiddleware } from 'redux-observable';
// import { switchMap } from 'rxjs/operator/switchMap';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';

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


const PING = 'PING';
const PONG = 'PONG';

const pingEpic = action$ => (
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG })
);

const epicMiddleware = createEpicMiddleware(pingEpic);


const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};

const reducers = combineReducers({
  global: myCountReducer,
  async: myAsyncFunc,
  pingReducer,
});


export default createStore(
  reducers,
  compose(
    applyMiddleware(logger, thunk, epicMiddleware),
    window.devToolsExtension(),
  ),
);
