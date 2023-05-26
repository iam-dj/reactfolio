import React from 'react';
import resume from '../assets/res.png'

export default function Resume() {
const color = 
  {
    backgroundColor:"#f4f4f4"
  };

  return (
    <div style={color} className='col-12'>
      <img className='mainResume' src={resume} alt='dexter's resume/>
    </div>
  );
}
