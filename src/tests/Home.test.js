import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

test('should render the Home Page', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
