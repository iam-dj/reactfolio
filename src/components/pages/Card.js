import React from 'react';
import '../../components/index.css';
// import brewvey from '../assets/img2'


// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {
  const cardStyle = {
    // width: '25rem',
    // height: 'auto',
    marginTop: '40px',
    transition: 'transform 0.3s ease',
    // paddingBottom:'20px',
    // bottom:'12px',
    // top:"10px"
  };
 

  return (
    <div className='portfolioEdit'>
      <div className="card-columns" >
        <div className="row mx-auto card-decks" >

      {props.work.map((item) => (
        <div className="col-md-6" >
          <div className="card h-95 text-white bg-secondary mb-3" style={cardStyle} id="element">
            <img
              className="card-img-top"
              src={item.photo}
              alt="Card cap"
            />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">Description: {item.description}</p>
              
              <a href={item.link} className="btn btn-sm justify-content-center btn-danger">Link </a>
            </div>
            </div>
          </div>
      ))}

      </div>
      </div>
    </div>
  );
}
