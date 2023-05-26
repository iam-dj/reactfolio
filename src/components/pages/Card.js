import React from 'react';
import '../../components/index.css';
// import brewvey from '../assets/img2'

// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {
  const cardStyle = {
    width: '18rem',
    marginTop: '40px'
  };

  return (
    <div className='portfolioEdit'>
      <div class="container" >
        <div class="row align-items-stretch justify-content-around card-decks" >

      {props.work.map((item) => (
        <div class="col-md-4" >
          <div class="card h-100" style={cardStyle}>
            <img
              className="card-img-top"
              src={item.photo}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Description: {item.description}</p>
              <a href="{item.link}" className="card-text">Link </a>
            </div>
            </div>
          </div>
      ))}

      </div>
      </div>
    </div>
  );
}
