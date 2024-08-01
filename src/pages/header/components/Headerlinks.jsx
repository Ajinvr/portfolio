import React from 'react';

function Headerlinks({ text, path }) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(path);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className='text-white
                 hover:text-neon-green
                 font-dm-sans
                 p-3
                 cursor-pointer
                 transition-colors
                 duration-200
                 text-xl
                 capitalize'>
      <a href={path} onClick={handleClick}>{text}</a>
    </div>
  );
}

export default Headerlinks;
