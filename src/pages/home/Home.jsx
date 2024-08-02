import React from 'react'
import ScroolingText from './components/scrooltext/ScroolingText'
import MainHeading from './components/mainheading/MainHeading'
import Form from './components/form/Form'
import About from './components/about/About'
import Projectsheader from './components/allprojects/Projectsheader'
import Projects from './components/allprojects/Projects'

function Home() {
  return (
    <div className='home-container mt-7 '>
      
      <div id='home' className='flex relative justify-center items-center h-screen -z-10'>
        <ScroolingText />
        <MainHeading />
      </div>
      
      <div id='about' className='h-10'></div>
      <About/>
      
      <div id='projects' className='mt-5'></div>
      <Projectsheader/>
      <Projects/>

      <div id='contact' className='h-10'></div>
      <Form/>
    </div>
  )
}

export default Home
