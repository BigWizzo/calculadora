import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';

test('should render the Home Page', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
