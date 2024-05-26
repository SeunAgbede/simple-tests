import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Car from '../src/components/car'
// import { debug } from 'jest-preview';


test('car component', () => {
  let carName = 'Tesla Model S';
  let carDescription = 'A luxury electric sedan.';
  let carPrice = '$94,990';

  render(<Car name={carName} description={carDescription} price={carPrice} />);
  // debug()

  expect(screen.getByText(carName)).toBeInTheDocument()
  expect(screen.getByText(carDescription)).toBeInTheDocument()
  expect(screen.getByText(carPrice)).toBeInTheDocument()
});