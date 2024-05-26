import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Hello from '../src/components/hello';
// import { debug } from 'jest-preview';


test('Hello component', () => {
  render(<Hello />);

  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});