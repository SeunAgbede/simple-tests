import { useEffect, useState } from 'react'
import Car from './components/car'
import Hello from '../src/components/hello'; 

import { Data } from "../utils/data";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
import PieChart from "./components/chart";


import data from '/public/my-app-data.json'


function App() {

  const [count, setCount] = useState(0)
  const [dValue, setdValue] = useState(0)

  function increase() {
    setCount((count) => count + 1)
  }

  // Use effect example
  useEffect(() => {
    setdValue(count * 2)
  }, [count])

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users",
        data: Data.map((data) => data.userGain),
      }
    ]
  });

  return (
    <div >
      <button className="bg-gray-300 p-2" onClick={increase}>
        count is {count}
      </button>

      <p>The doubled value is : {dValue}</p>

      <Car
        name={'Ford'}
        description={'Mustang'}
        price={'£300'}
      />

      <div className='mt-10'>
        If bored : {data.map((i) => i.activity)}
      </div>

      <Hello />

      <div className='h-[150px]'>
        <PieChart chartData={chartData} />
      </div>


    </div>
  )
}

export default App
