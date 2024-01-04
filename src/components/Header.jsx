import React, { useEffect } from 'react';
import { useState } from 'react';
import '../style.css';
import '../Header.css'
function Header() {

const [show,setshow] = useState(false);

  const scrollTocomponet = (id) => {
    const aboutSection = document.getElementById(id);
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  setInterval(()=>{
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (windowWidth >= 901) {
      setshow(false)
    }
  } ,200)

  return (
    <div id='Header'>
      <div id='Header' className='headermain'>
        <h1 onClick={function() { scrollTocomponet('Header')   }} className='headertxt'>Home</h1>
        <h1 onClick={function() { scrollTocomponet('about')    }} className='headertxt'>About</h1>
        <h1 onClick={function() { scrollTocomponet('Projects') }} className='headertxt'>Projects</h1>
        <h1 onClick={function() { scrollTocomponet('Services') }} className='headertxt'>Services</h1>
        <h1 onClick={function() { scrollTocomponet('Footer')   }} className='headertxt'>Contact</h1>
      </div>

      <div className='menudiv'>
      <i onClick={()=> setshow(!show)} className="fa-solid fa-bars fa-2xl menushow"></i>
      </div>
      <div className={show ? "smenu":"smenuh"}>
        <div className='fix'>
          <div style={{position:"fixed", backgroundColor:'black',width:"100%"}}>
          <h2 className='h2h' onClick={function() { scrollTocomponet('Header')   }}>Home</h2>
        <h2 className='h2h' onClick={function() { scrollTocomponet('about')    }} >About</h2>
        <h2 className='h2h' onClick={function() { scrollTocomponet('Projects') }} >Projects</h2>
        <h2 className='h2h' onClick={function() { scrollTocomponet('Services') }} >Services</h2>
        <h2 className='h2h' onClick={function() { scrollTocomponet('Footer')   }} >Contact</h2>
          </div>
       
        </div>
       
      </div>
    </div>
  );
}

export default Header;
