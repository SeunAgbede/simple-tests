import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../src/App'
import { debug } from 'jest-preview';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


// Mock axios
const mockAxios = new MockAdapter(axios);

// Mock data to be returned by axios
const mockData = [
  { activity: 'Go for a walk' },
  { activity: 'Read a book' },
];

describe('App Component', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  test('renders App component correctly', () => {
    render(<App />);
    debug()
    
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
    expect(screen.getByText(/The doubled value is : 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Ford/i)).toBeInTheDocument();
    expect(screen.getByText(/Mustang/i)).toBeInTheDocument();
    expect(screen.getByText(/£300/i)).toBeInTheDocument();
  });

  test('increments count and updates doubled value on button click', () => {
    render(<App />);
    debug()

    const button = screen.getByText(/count is 0/i);
    fireEvent.click(button);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
    expect(screen.getByText(/The doubled value is : 2/i)).toBeInTheDocument();
  });

  test('fetches and displays data correctly', async () => {
    mockAxios.onGet('/my-app-data.json').reply(200, mockData);

    render(<App />);
    debug()

    await waitFor(() => {
      expect(screen.getByText(/Go for a walk/i)).toBeInTheDocument();
      expect(screen.getByText(/Read a book/i)).toBeInTheDocument();
    });
  });

  test('handles fetch data error', async () => {
    mockAxios.onGet('/my-app-data.json').networkError();

    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<App />);
    debug()

    await waitFor(() => {
      expect(consoleErrorMock).toHaveBeenCalledWith(expect.stringContaining('Error fetching data:'));
    });

    consoleErrorMock.mockRestore();
  });

  test('renders Hello component', () => {
    render(<App />);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
});
