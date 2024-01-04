import React from 'react'
import '../Services.css'
import '../Projects.css'

function Services() {
  return (
    <div>
    <div id='Services'>

    </div>
    <br/>
      <div  className='Services'><h1>Services</h1></div>
      <div className="projectsmain">
        <div className='projectcard'>
         <img src={require("../assets/frontend.png")} alt="" />
          <div className='titlediv'>
          <p className='title'>Frontend Development</p>
         </div>
        </div>

        {/* 2 */}

        <div className='projectcard'>
         <img src={require("../assets/backend.png")} alt="" />
          <div className='titlediv'>
          <p className='title'>Backend Development</p>
         </div>
        </div>

        {/* 3 */}

        <div className='projectcard'>
         <img src={require("../assets/FULL.png")} alt="" />
          <div className='titlediv'>
          <p className='title'>Full Stack Development</p>
         </div>
        </div>

        {/* 4 */}
        <div className='projectcard'>
         <img src={require("../assets/UI.png")} alt="" />
          <div className='titlediv'>
          <p className='title'>UI/UX Designing</p>
         </div>
        </div>


      </div>     
    </div>
  )
}

export default Services