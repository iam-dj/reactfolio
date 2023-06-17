import React from 'react';
import resume from '../assets/res1.png'
import resume2 from '../assets/res2.png'

export default function Resume() {
const color = 
  {
    backgroundColor:"#f4f4f4"
  };

  return (
    <div style={color} className='col-12'>
      <img className='mainResume' src={resume} alt='dexter's resume/>
      <img className='mainResume' src={resume2} alt='dexter's resume/>
    </div>
  );
}
