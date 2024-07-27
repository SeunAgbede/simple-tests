import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';
import { debug } from 'jest-preview';

// Test case 1
test("check that 'Simple Counter App' text displays", () => {
  render(<App />);
  debug()

  const text = screen.getByText(/Simple Counter App/i)
  expect(text).toBeInTheDocument();
});


// Test case 2
test("check that other text on the page displays", () => {
  render(<App />);

  const text1 = screen.getByText(/The count is :/i)
  const text2 = screen.getByText(/The doubled count is :/i)

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});


// Test case 3
test("Check that Buttons are displayed", () => {
  render(<App />);

  const doubleBtn = screen.getByRole('button', { name: /Double/i })
  const resetBtn = screen.getByRole('button', { name: /Reset/i })

  expect(doubleBtn).toBeInTheDocument();
  expect(resetBtn).toBeInTheDocument();
});


// Test case 4
test("check the functionality of the Buttons", () => {
  render(<App />);

  const doubleBtn = screen.getByRole('button', { name: /Double/i })
  const resetBtn = screen.getByRole('button', { name: /Reset/i })

  fireEvent.click(doubleBtn); // i.e. when Double button is clicked
  expect(screen.getByText(/1/i)); // I expect to see 1
  expect(screen.getByText(/2/i)); // I expect to see 2

  fireEvent.click(doubleBtn); // i.e. when Double button is clicked again
  expect(screen.getByText(/2/i)); // I expect to see 2
  expect(screen.getByText(/4/i)); // I expect to see 4

  fireEvent.click(resetBtn); // i.e. when Reset button is clicked
  expect(screen.getAllByText(/0/i)); // I expect to see all 0's

  // By implication, this has also tested functions increase, reset and setdValue. 
});