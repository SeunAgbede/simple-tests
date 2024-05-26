import React from 'react';
// import { debug } from 'jest-preview';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Chart from '../src/components/chart'
import { Line } from 'react-chartjs-2';

// Mock the Line component from react-chartjs-2
jest.mock('react-chartjs-2', () => ({
  Line: jest.fn(() => <div data-testid="line-chart">Mock Line Chart</div>),
}));

describe('Chart', () => {
  const mockChartData = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Users Gained',
        data: [500, 1000, 1500, 2000, 2500],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  test('renders the chart with provided data', () => {
    render(<Chart chartData={mockChartData} />);
    // debug()
    

    // Check if the heading is rendered
    expect(screen.getByText('Bar Chart')).toBeInTheDocument();

    // Check if the mocked Line chart is rendered
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });

});