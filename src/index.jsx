import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import App from './components/App';

const rootId = document.getElementById('root');

const RenderApp = (Component) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component myStr="Hello World!!" />
      </AppContainer>
    </Provider>,
    rootId,
  );
};

RenderApp(App);

// Webpack Hot Module Replacement API
console.log('module.hot isTrue', module.hot===true, module.hot);
if (module.hot) {
  module.hot.accept('./components/App', () => { RenderApp(App) });
}
