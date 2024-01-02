import React, { useEffect } from 'react';
import gsap from 'gsap';

const Main = () => {
  useEffect(() => {
    const mainTextWrapper = document.querySelector('.maintxt');
    const mainTextElement = mainTextWrapper.querySelector('h1');

    gsap.set(mainTextElement, { opacity: 0, y: -150 });

    const tl = gsap.timeline();

    tl.to(mainTextElement, { opacity: 100, duration: 1, ease: 'elastic' })
      .to(mainTextElement, { y: 0, duration: 2, ease: 'elastic'}, '-=1');

    tl.play();
  }, []);

  return (
    <div className="maintxt">
      <div className='maintxtsub'>
        <h1 className='maintext' >
        Ajin vr
      </h1>
      </div>
      
    </div>
  );
};

export default Main;
