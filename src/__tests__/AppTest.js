import React from 'react';
import App from '../components/App';

import renderer from 'react-test-renderer';

describe('App', () => {
  it('redners correctly', () => {
    const element = renderer.create(
      <div>Hello</div>
    );
    console.log('element', element);
  });
});
