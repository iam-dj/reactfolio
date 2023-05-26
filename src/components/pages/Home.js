import React from "react";
import '../../components/index.css';
import videoBg from '../assets/bgVid.mp4'
// import logo from '../assets/logo.png'

export default function Home() {
  const textStyle = {
    // width: '25rem',
    // height: 'auto',
    fontSize: '100px',
    // paddingBottom:'20px',
    // bottom:'12px',
    // top:"10px"
  };
  return (
    <div className="main">
      <video src={videoBg} type="video/mp4" autoPlay loop muted/>
      <div className="content">
        <h1 style={textStyle}>
          Welcome
        </h1>
        <p>to iam-dj's portfolio</p>
      </div>
      
    </div>
  );
}
