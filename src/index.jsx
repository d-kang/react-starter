import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';

const reducers = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.count += 1;
    default:
      return state;
  }
};

let store = createStore(reducers);


const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Main />, document.getElementById('root'));
