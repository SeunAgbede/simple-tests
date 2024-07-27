import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';
import { debug } from 'jest-preview';

// Test case 1
test('Hello World! text displays', () => {
  render(<App />);
  debug()

  const text = screen.getByText(/Hello World!/i)
  expect(text).toBeInTheDocument();
});


// Test case 2
test('Other text displays', () => {
  render(<App />);

  const text1 = screen.getByText(/The count is :/i)
  const text2 = screen.getByText(/The doubled count is :/i)

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});


// Test case 3
test('Buttons are displayed', () => {
  render(<App />);

  const doubleBtn = screen.getByRole('button', { name: /Double/i })
  const resetBtn = screen.getByRole('button', { name: /Reset/i })

  expect(doubleBtn).toBeInTheDocument();
  expect(resetBtn).toBeInTheDocument();
});


// Test case 4
test('functionality of the Buttons', () => {
  render(<App />);

  const doubleBtn = screen.getByRole('button', { name: /Double/i })
  const resetBtn = screen.getByRole('button', { name: /Reset/i })

  fireEvent.click(doubleBtn);
  expect(screen.getByText(/1/i));
  expect(screen.getByText(/2/i));

  fireEvent.click(doubleBtn);
  expect(screen.getByText(/2/i));
  expect(screen.getByText(/4/i));

  fireEvent.click(resetBtn);
  expect(screen.getAllByText(/0/i));
});