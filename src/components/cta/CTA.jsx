// import React from 'react'
// import './cta.css'

// const CTA = () => {
//   return (
//     <div>CTA</div>
//   )
// }

// export default CTA

import React, { useEffect, useRef } from 'react';
import './cta.css'

const CTA = () => {
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
    <div className='cta__container'>
      <div className='cta__splineView'>
      <spline-viewer ref={splineRef} url="https://prod.spline.design/x8B4wVUCYI-fHU2V/scene.splinecode"></spline-viewer>
      </div>
      <div className='cta__content'>
         <div className="cta__text">
          <h2>Welcome!</h2>
          {/* <p>"You are not here just to work and be productive. you are here to sing, and dance, and be happy.{<br/>}You are here to inspire and be inspired. {<br/>} You are here to love life and let it love you."</p> */}
          <p>
            I am the Lorax. I speak for the trees. ଘ(੭ˊᵕˋ)੭
        </p>
        </div>
        {/* <div className="cta__image">
          <img src="path/to/your/image.jpg" alt="Image" />
        </div> */}
      </div>
    </div>
  );
};

export default CTA;
