import React from 'react';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<div>Hello World!</div>).toJSON();
    console.log('tree', tree);
  });
});
