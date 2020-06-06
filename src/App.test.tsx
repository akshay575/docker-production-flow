import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home page content', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello Docker/i);
  expect(linkElement).toBeInTheDocument();
});