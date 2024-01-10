import React from 'react';
import Card from './Card';
import drty from "../assets/drty.png"
import brewvey from "../assets/brew.png"
import note from "../assets/note.png"
import mvc from "../assets/mvc.png"
import poke from "../assets/poke.png"
import bubble from "../assets/bubble.png"
import poke from "../assets/poke.png"
import weather from "../assets/weather.png"

const work = [
  {
    id: 4,
    name: "DRY Pokemon",
    description: "In this game, users can battle other users on the platform and collect Pokémon and gym badges. The front end provides a user-friendly interface to interact with the game's functionalities and display game-related information. The app was designed in React using MySql, Express, and Node. The app won Best Functionality and shared the People's Choice award.",
    photo:  poke,
    hasAward: 2,
    link: 'https://drypokemon.netlify.app/'
  },
  {
    id: 7,
    name: "ReSellr Web ",
    description: "In this project, we created a web application that allows users to buy items low and sell them within their profit margin. The app was designed using Bubble.io low-code and no-code platform.",
    photo:  bubble,
    link: 'https://resellr-52632.bubbleapps.io/'
  },
  {
    id: 1,
    name: "DRTY Nomad",
    description: "DRTY Nomad is a platform that connects travelers, facilitates sharing of experiences, and fosters a sense of community in exploring unique destinations, while showcasing our expertise in web development, database management, and user authentication. This app won Best Functionality and The People's Choice award. Fun fact: This project was built using Handlebars.",
    photo: drty,
    hasAward: 2,
    link: ' https://nomadness-drty-a259a96650fd.herokuapp.com/'
  },
  {
    id: 2,
    name: "Brewvey",
    description: "Brewvery is a website created to offer an exciting and unique dating experience in Seattle, providing users with randomly generated brewery recommendations based on their preferences, along with entertaining icebreakers in the form of jokes for added enjoyment and engagement.",
    photo:  brewvey,
    hasAward: 1,
    link: 'https://alexmoriyama.github.io/brewvey'
  },
  {
    id: 6,
    name: "Weather Dashboard",
    description: "The WeatherBoard challenge is a user-friendly web application that provides current weather and 5-day forecasts for any city worldwide, featuring search functionality, weather details, and recent search history, making it a valuable tool for staying informed about weather conditions locally and globally.",
    photo:  weather,
    link: 'https://iam-dj.github.io/sixth-challenge-weather-dashboard/'
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
