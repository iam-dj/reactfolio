import React from 'react';
import Card from './Card';
// import brewvey from "../assets/brew.png"
// import drty from "../assets/img1.png"

const work = [
  {
    id: 1,
    name: "DRTY Nomad",
    description: "DRTY Nomad is a platform that connects travelers, facilitates sharing of experiences, and fosters a sense of community in exploring unique destinations, while showcasing our expertise in web development, database management, and user authentication.",
    photo: 'https://i.ibb.co/59NrDYD/img1.png',
    link: ' https://drty-nomad-2023.herokuapp.com/'
  },
  {
    id: 2,
    name: "Brewvey",
    description: "Brewvery is a website created to offer an exciting and unique dating experience in Seattle, providing users with randomly generated brewery recommendations based on their preferences, along with entertaining icebreakers in the form of jokes for added enjoyment and engagement.",
    photo:  'https://i.ibb.co/Nrx9X5m/img2.png',
    link: 'https://alexmoriyama.github.io/brewvey'
  },
  {
    id: 3,
    name: "Brewvey",
    description: "Brewvery is a website created to offer an exciting and unique dating experience in Seattle, providing users with randomly generated brewery recommendations based on their preferences, along with entertaining icebreakers in the form of jokes for added enjoyment and engagement.",
    photo:  'https://i.ibb.co/Nrx9X5m/img2.png',
    link: 'https://alexmoriyama.github.io/brewvey'
  },
  {
    id: 4,
    name: "Brewvey",
    description: "Brewvery is a website created to offer an exciting and unique dating experience in Seattle, providing users with randomly generated brewery recommendations based on their preferences, along with entertaining icebreakers in the form of jokes for added enjoyment and engagement.",
    photo:  'https://i.ibb.co/Nrx9X5m/img2.png',
    link: 'https://alexmoriyama.github.io/brewvey'
  },
  {
    id: 5,
    name: "Brewvey",
    description: "Brewvery is a website created to offer an exciting and unique dating experience in Seattle, providing users with randomly generated brewery recommendations based on their preferences, along with entertaining icebreakers in the form of jokes for added enjoyment and engagement.",
    photo:  'https://i.ibb.co/Nrx9X5m/img2.png',
    link: 'https://alexmoriyama.github.io/brewvey'
  },
  {
    id: 6,
    name: "Brewvey",
    description: "Brewvery is a website created to offer an exciting and unique dating experience in Seattle, providing users with randomly generated brewery recommendations based on their preferences, along with entertaining icebreakers in the form of jokes for added enjoyment and engagement.",
    photo:  'https://i.ibb.co/Nrx9X5m/img2.png',
    link: 'https://alexmoriyama.github.io/brewvey'
  }
];
// console.log(work);


export default function Display() {
  return (
    <div>
       <Card work={work} />;
       
    </div>
  );
}
