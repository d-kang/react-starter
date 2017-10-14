import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';


const Main = () => (
  <Provider store={store}>
    <App myStr="hi world" />
  </Provider>
);

render(<Main />, document.getElementById('root'));
