'use client'
import React, { useState } from 'react'


const Input = () => {
  const [textValue , setTextValue] = useState('')
  const [displayText , setDisplayText] = useState('')
  function ReadTextValue(e){
    setTextValue(e.target.value)
    console.log('working')
    
  }
  function DisplayTextValue(){
    setDisplayText(textValue)
  }
  return (
    <div className='h-[100px]'>
        <div className='bg-blue-100  h-full flex items-center justify-center'>
        <input 
        value={textValue}
        onChange={ReadTextValue}
        type="text" className=' border-blue-600 border-2 bg-white   h-[46px] w-72 rounded-2xl p-5 m-2' />
          <button className='p-3 bg-blue-400 font-bold text-white rounded-2xl'>Submit</button>
        </div>
      
     
    </div>
  )
}

export default Input