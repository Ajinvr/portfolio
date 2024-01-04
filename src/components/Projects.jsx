import React from 'react'
import "../Projects.css"
function Projects() {
  return (
  <div>
    <div id='Projects'>
    </div>
    <br/>
   <div  className='Projects'><h1>Projects</h1></div>
     <div className="projectsmain">
        <div className='projectcard'>
         <img src={require("../assets/Wapp.jpg")} alt="" />
          <div className='titlediv'>
          <p className='title'>Wheather app</p>
         </div>
        </div>

        {/* 2 */}

        <div className='projectcard'>
         <img src={require("../assets/calc.png")} alt="" />
          <div className='titlediv'>
          <p className='title'>Calculator</p>
         </div>
        </div>

        {/* 3 */}

        <div className='projectcard'>
         <img src={require("../assets/net.jpg")} alt="" />
          <div className='titlediv'>
          <p className='title'>Netflix clone</p>
         </div>
        </div>
      </div>      
    </div>
    
  )
}

export default Projects