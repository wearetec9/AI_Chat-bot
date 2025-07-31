import React from 'react'
import Input from './input/page'
import Containers from './container/boxes/page'

const Home = () => {
  return (
    <div className=' h-[100vh]'>
      <div>
        <Input></Input>
        <Containers/>
      </div>
    </div>
  )
}

export default Home