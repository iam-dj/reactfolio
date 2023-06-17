import React from "react";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/bg.png";
// import img3 from "../assets/img3.png";
// import "../../components/card.css";

export default function About() {
  const cardStyle = {
    // width: '25rem',
    margin: "0",
    height: "100vh",
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    backgroundImage: "linear-gradient(to top, #000000 0%, #f9f586 100%)",
  };
  return (
    <div>
      <body style={cardStyle}>
        <div className="card img-responsive">
          
          <div className="col-12 card-text2">
            <div className="portada"></div>
            <div className="title-total">
              <div className="title">Full Stack Developer & Executive Digital Strategist</div>
              <h2>Dexter "DJ" Jules</h2>

              <div className="desc">
              An unyielding drive to innovate propels my career in full-stack development and digital marketing strategy. My portfolio is comprised of an assortment of successful projects from diverse industries, highlighting my ability to deliver thought-provoking graphics, cutting-edge web applications, and captivating brand narratives. I offer unique, comprehensive solutions that drive unparalleled business growth. My robust understanding of the most recent developments within the industry, coupled with cutting-edge technological expertise, has enabled me to successfully develop and execute plans that produce substantial results across numerous demographics utilizing diverse communication methods.
              </div>
              <div className="actions">
                
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}




