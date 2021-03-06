import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../components/App';

const props = {
  increment: jest.fn(() => this.props.count + 1),
  decrement: jest.fn(() => this.props.count - 1),
  count: 0,
};

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App {...props} />).toJSON();
    console.log('tree', tree);
  });
});
