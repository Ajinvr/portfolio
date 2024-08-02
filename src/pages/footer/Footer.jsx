import React from 'react'
import githublogo from '../../assets/github.svg'
import linkedinlogo from '../../assets/linkedin.svg'
import maillogo from '../../assets/mail.svg'
import phonelogo from '../../assets/phone.svg'


function Footer() {
  return (
    <div id='footer' className='w-screen mt-20 flex justify-center p-30'>
        <div className=' bg-Black-Blue flex justify-center align-middle p-20 w-screen '>  
            <div className='text-center'>
               <h1 className=' text-white font-Bebas-Neue text-7xl'>Ajin vr</h1>
               <p className='text-gray-500'>Thank you for showing interest in my portfolio. I,d love to collaborate and create something amazing together. Remember, you're just one click away from a great business partnership.</p>
               
                  <div className='flex gap-7 justify-center mt-5'>
                      <a href="https://github.com/Ajinvr"> <img className='w-10' src={githublogo} alt="github logo" /></a>
                      <a href="https://www.linkedin.com/in/ajinvr/"> <img className='w-10' src={linkedinlogo} alt="linkedin logo" /></a>
                      <a href="tel:+917025620935"> <img className='w-10' src={phonelogo} alt="phone logo" /> </a>
                      <a href="mailto:ajinvr44@gmail.com?subject=Inquiry&body=Hello, I would like to inquire about..."> <img className='w-12' src={maillogo} alt="mail logo" /></a>
                  </div>

            </div> 
        </div>
    </div>
  )
}

export default Footer