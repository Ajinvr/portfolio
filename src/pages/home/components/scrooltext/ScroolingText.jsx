import React from 'react'
import Marquee from 'react-fast-marquee'
import '../../../../index.css'

function ScrollingText() {
  return (
    <div className='relative h-full w-full font-Bebas-Neue text-9xl gradient-mask-lr flex flex-col items-center justify-center overflow-hidden'>
      <div className='overflow-hidden w-full'>
       
        <Marquee  direction="left" className='overflow-hidden'>
          <h1 className='text-outline'>React Node Express MongoDB Tailwind React Node Express MongoDB Tailwind</h1>
        </Marquee>
       
        <Marquee direction="right" className='overflow-hidden p-5'>
          <h1 className='text-outline'>React Node Express MongoDB Tailwind React Node Express MongoDB Tailwind</h1>
        </Marquee>
        
        <Marquee direction="left" className='overflow-hidden p-5'>
          <h1 className='text-outline'>React Node Express MongoDB Tailwind React Node Express MongoDB Tailwind</h1>
        </Marquee>
        
        <Marquee direction="right" className='overflow-hidden p-5'>
          <h1 className='text-outline'>React Node Express MongoDB Tailwind React Node Express MongoDB Tailwind</h1>
        </Marquee>

      </div>
    </div>
  )
}

export default ScrollingText
