import React from 'react'
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {

  return (
    <div>
      <div className='w-[50%]'>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              },
              legend: {
                display: true
              }
            }
          }}
        />
      </div>

    </div>
  );
};

export default LineChart