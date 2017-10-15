import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import ConnectedApp, { App } from '../components/App';
import { reducers } from '../store';


const store = createStore(reducers);


const count = store.getState().global


describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ConnectedApp store={store}>
        <App {...count}/>
      </ConnectedApp>
    ).toJSON();
    console.log('App.props', App.props);
    console.log('store', store)
    console.log('count', count);
    console.log('tree', tree);
  });
});
