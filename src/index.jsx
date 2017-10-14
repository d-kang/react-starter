import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';

const reducers = (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.count += 1;
    default:
      return state;
  }
};

const store = createStore(reducers);


const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Main />, document.getElementById('root'));
