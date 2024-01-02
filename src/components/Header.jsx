import React from 'react';
import '../style.css';
import '../Header.css'
function Header() {
  return (
    <div>
      <div className='headermain'>
        <h1 href="" className='headertxt'>Home</h1>
        <h1 className='headertxt'>About</h1>
        <h1 className='headertxt'>Projects</h1>
        <h1 className='headertxt'>Services</h1>
        <h1 className='headertxt'>Contact</h1>
      </div>
    </div>
  );
}

export default Header;
