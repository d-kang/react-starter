import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer as Container } from 'react-hot-loader';
import store from './store';
import { ConnectedApp } from './components/App';

const rootElement = document.getElementById('root');


render(
  <Provider store={store}>
    <Container>
      <ConnectedApp />
    </Container>
  </Provider>,
  rootElement,
);


if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <Provider store={store}>
        <Container>
          <NextApp />
        </Container>
      </Provider>,
      rootElement,
    );
  });
}
