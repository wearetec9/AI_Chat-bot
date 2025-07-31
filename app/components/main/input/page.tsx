'use client'
import React, { useState } from 'react'


const Input = () => {
  const [textValue, setTextValue] = useState('')
  const [displayText, setDisplayText] = useState('')
  
  function ReadTextValue(e) {
    e.preventDefault()
    setTextValue(e.target.value)
    console.log('working')

  }
  function DisplayTextValue() {
    setDisplayText(textValue)
  }
  return (
    <div className='h-96 '>
      <div className='bg-blue-100 h-full flex flex-col items-center justify-center'>
        <div>

          <input

            value={textValue}
            onChange={ReadTextValue}
            type="text" className=' border-blue-600 border-2 bg-white h-11 w-72 rounded-2xl p-5 m-2' />
          <button onClick={DisplayTextValue} className='p-3 bg-blue-400 font-bold text-white rounded-2xl cursor-pointer hover:bg-blue-500 transition 1s'>Submit</button>

          <div>
          </div>
          <div className='flex justify-center p-10 '>

            <h2 className='font-bolder text-5xl '>{displayText}</h2>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Input