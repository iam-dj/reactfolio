import React from "react";
import '../../components/index.css';
import videoBg from '../assets/bgVid.mp4'

export default function Home() {
  return (
    <div className="main">
      <video src={videoBg} type="video/mp4" autoPlay loop muted/>
      <div className="content">
        <h1>
          Welcome
        </h1>
        <p>To iam-dj's portfolio</p>
      </div>
      
    </div>
  );
}
