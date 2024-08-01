import React from 'react'
import ScroolingText from './components/scrooltext/ScroolingText'
import MainHeading from './components/mainheading/MainHeading'
import Form from './components/form/Form'

function Home() {
  return (
    <div className='home-container mt-7 '>
      
      <div className='flex relative justify-center items-center h-screen -z-10'>
        <ScroolingText />
        <MainHeading />
      </div>

      <Form/>
    </div>
  )
}

export default Home
