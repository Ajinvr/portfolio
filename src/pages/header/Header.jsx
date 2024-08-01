import React, { useEffect, useState } from 'react';
import Headerlinks from './components/Headerlinks';
import menuicon from '../../assets/menuicon.svg';

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <div className='overflow-hidden sticky bg-black '>
    
      {/* Mobile View */}
      <div onMouseLeave={() => { if (isOpen) toggleMenu(); }} className="sm:hidden w-screen bg-black fixed">
           <div className='w-screen flex ml-2 mt-1 '>
               <img className="cursor-pointer" onClick={toggleMenu} src={menuicon} alt="menu button" />
           </div>
        
        {isOpen && (
               <div onClick={toggleMenu}  className="block gap-10 justify-center w-screen sm:hidden bg-black">
                     <Headerlinks text="Home" path="#home" />
                     <Headerlinks text="About" path="#about" />
                     <Headerlinks text="Projects" path="#projects" />
                     <Headerlinks text="Contact" path="#contact" />
               </div>
        )}
      </div>


      {/* Desktop View */}
      <div className="fixed hidden gap-10 justify-center w-screen sm:flex bg-black">
           <Headerlinks text="Home" path="#home"/>
           <Headerlinks text="About" path="#about" />
           <Headerlinks text="Projects" path="#projects" />
           <Headerlinks text="Contact" path="#contact" />
      </div>
    
    </div>
  );
}

export default Header;
