import { useEffect, useState } from 'react'
import Car from './components/car'

import axios from 'axios';


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


 // test data 
  const [my_app_data, setmy_app_data] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/my-app-data.json`); // Assuming the JSON file is served from the root directory
      setmy_app_data(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  console.log(my_app_data)
  console.log(count)


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
        If bored : {my_app_data.map((i) => i.activity)}
      </div>


    </div>
  )
}

export default App
