import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer as Container } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import store from './store';
import ConnectedApp from './components/App';
import Welcome from './components/Welcome';

const rootElement = document.getElementById('root');


render(
  <Provider store={store}>
    <Container>
      <Router>
        <Route exact path="/" component={ConnectedApp} />
        {/* <ConnectedApp /> */}
      </Router>
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
          <Route exact path="/" component={NextApp} />
          {/* <NextApp /> */}
        </Container>
      </Provider>,
      rootElement,
    );
  });
}
