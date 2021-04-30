import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Error from '../components/Error';

test('should render the Home Page', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Error />
    </BrowserRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
