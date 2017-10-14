import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';

const initialState = {
  count: 0,
};

const myCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count += 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count +- 1,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  global: myCountReducer,
});

const store = createStore(reducers, {});

const Main = () => (
  <Provider store={store}>
    <App myStr="hi world" />
  </Provider>
);

render(<Main />, document.getElementById('root'));
