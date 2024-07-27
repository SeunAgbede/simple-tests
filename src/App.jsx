import React from 'react';
import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [dValue, setdValue] = useState(0)

  function increase() {
    setCount((count) => count + 1)
  }

  function reset() {
    setCount(0)
  }

  // Use effect example
  useEffect(() => {
    setdValue(count * 2)
  }, [count])


  return (
    <div>
      <p className='mb-5'>Simple Counter App</p>

      <div className='border-2 border-gray-500 p-5 w-1/3'>
        <div className='mb-2'>
          <p>The count is : {count}</p>
          <p>The doubled count is : {dValue}</p>
        </div>

        <div className='flex gap-2'>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={increase}>
            Double
          </button>
          <button className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
