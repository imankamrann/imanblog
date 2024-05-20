import React, { useEffect, useRef } from 'react';
import './welcome.css'

const Welcome = () => {
  const splineRef = useRef();


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.3.8/build/spline-viewer.js';
    script.type = 'module';
    script.onload = () => {
      console.log('Spline viewer script loaded successfully.');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='welcome__container'>
      <div className='welcome__splineView'>
      <spline-viewer ref={splineRef} url="https://prod.spline.design/x8B4wVUCYI-fHU2V/scene.splinecode"></spline-viewer>
      </div>
      <div className='welcome__content'>
         <div className="welcome__text">
          <h2>Welcome!</h2>
          {/* <p>"You are not here just to work and be productive. you are here to sing, and dance, and be happy.{<br/>}You are here to inspire and be inspired. {<br/>} You are here to love life and let it love you."</p> */}
          <p>
            I am the Lorax. I speak for the trees. ଘ(੭ˊᵕˋ)੭
        </p>
        </div>
        {/* <div className="welcome__image">
          <img src="path/to/your/image.jpg" alt="Image" />
        </div> */}
      </div>
    </div>
  );
};

export default Welcome;
