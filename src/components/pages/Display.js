import React from 'react';
import Card from './Card';
import drty from "../assets/drty.png"
import brewvey from "../assets/brew.png"
import note from "../assets/note.png"
import mvc from "../assets/mvc.png"
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
    id: 1,
    name: "DRTY Nomad",
    description: "DRTY Nomad is a platform that connects travelers, facilitates sharing of experiences, and fosters a sense of community in exploring unique destinations, while showcasing our expertise in web development, database management, and user authentication. This app won Best Functionality and The People's Choice award.",
    photo: drty,
    hasAward: 2,
    link: ' https://drty-nomad-2023.herokuapp.com/'
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
    id: 3,
    name: "Blog MVC",
    description: "The Blog MVC Homework project is a blog application implemented using the MVC architectural pattern, with the goal of creating a structured and user-friendly platform for managing and organizing blog content, while also providing a learning opportunity to understand the importance of MVC in web development and gain experience in handling databases and HTTP operations.",
    photo: mvc,
    link: 'https://github.com/iam-dj/mvc-tech-blog/blob/main/README.md'
  },
  {
    id: 5,
    name: "Note Taker Organizer",
    description: "The note taking application is a web-based tool that streamlines note creation, organization, and storage, offering features such as search, sorting, categorization, and backup, making it an ideal solution for staying organized and managing important information efficiently.",
    photo:  note,
    link: 'https://github.com/iam-dj/note-take-challenge'
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
