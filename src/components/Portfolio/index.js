import React from 'react';

import {Box, Grommet, Grid} from 'grommet';

import PortfolioCard from './PortfolioCard';

import background from '../../assets/images/forestbackdrop.jpg'

const data = [
    {
        heading: "Steep",
        image: require("./assets/Steep2.png").default,
        tech: "-React -GQl -MongoDB -Grommet -Workbox",
        gitlink: "https://github.com/Gintstir/Tea-App",
        applink: "https://steep-tea-app.herokuapp.com/",
        summary: "This app has a robust back end for compressing and storing images. It also leverages features of Mongoose, graphql, and apollo for lightining fast server response times for getting and fetching data. We use bCrypt for hashing and salting sensitive personal data like passwords while JWT's create a secure link between the user and our back-end. On the front-end, grommet and materialize work in tandem with React to provide the user with a smooth, visually appealing experience.",
        a11yTitle: "Steep-tea-app"
    },
    {
        heading: "My Wellness Journey",
        image: require("./assets/hompepage2.png").default,
        tech: "-Node.js -Sequelize -MySQL -handlebars",
        gitlink: "https://github.com/Gintstir/My-Wellness-Journey",
        applink: "https://my-wellness-journey.herokuapp.com/",
        summary: "My-Wellness-Journey is all about you. Connecting a robust back-end to an interactive front-end, My-Wellness-Journey is a full stack application designed with your wellbeing front and center. Keep track of and visualize your moods. Log on and get lighhearted reminders about staying hydrated. Discover a new exercise or stretch that keeps your going through your busy day. Not only do we value your health and happiness but your security online is also a top priority. With secure user sessions, account protection and password encryption your visit to My-Wellness-Journey is sure to be just as private and safe as it is fun and fulfilling.",
        a11yTitle: "My Wellness Jounrey"
    },
    {
        heading: "Weather Dashboard",
        image: require("./assets/deployed-dashboard2.png").default,
        tech: "-CSS -JS -jQuery -Bootstrap -Momentjs -HTML",
        gitlink: "https://github.com/Gintstir/weather-api",
        applink: "https://gintstir.github.io/weather-api/",
        summary: "This app has a robust back end for compressing and storing images. It also leverages features of Mongoose, graphql, and apollo for lightining fast server response times for getting and fetching data. We use bCrypt for hashing and salting sensitive personal data like passwords while JWT's create a secure link between the user and our back-end. On the front-end, grommet and materialize work in tandem with React to provide the user with a smooth, visually appealing experience.",
        a11yTitle: "Weather App"
    },
    {
        heading: "MVC Tech Blog",
        image: require("./assets/MVC2.png").default,
        tech: "-Express -Node -Handlebars -JS",
        gitlink: "https://github.com/Gintstir/MVC-Tech-Blog",
        applink: "https://vast-retreat-80302.herokuapp.com/login",
        summary: "MVC-Tech-Blog is a full-stack blogging app. It takes user generated posts and comments and organizes them in an easy to read format.",
        a11yTitle: "Technology Blog"
    },
    {
        heading: "Readme Generator",
        image: require("./assets/readme2.png").default,
        tech: "-Node.js  -Inquirer -Markdown -JS",
        gitlink: "https://github.com/Gintstir/readme-generator",
        applink: "https://github.com/Gintstir/readme-generator/blob/master/README.md",
        summary: "ReadMe-generator does exactly that. As a Node.js powered command line application it creates a professional, and stylish README.md file based on a user's input. This input is created by a user responding to prompts generated with the Inquirer npm.",
        a11yTitle: "Read me Generator"
    },    
    {
        heading: "Solar Time Tracker",
        image: require("./assets/solar2.png").default,
        tech: "-HTML -Bulma -JS - jQuery -CSS -APIs",
        gitlink: "https://github.com/TechnicalParadox/solar-time-tracker",
        applink: "https://technicalparadox.github.io/solar-time-tracker/",
        summary: "This app allows the user to find sunrise and sunset times",
        a11yTitle: "Solar-Time-Tracker"
    },
    {
        heading: "Budget Tracker",
        image: require("./assets/budget-tracker.png").default,
        tech: "-Morgan -Mongoose -IndexedDB -MongoDB",
        gitlink: "https://github.com/Gintstir/Budget-Tracker",
        applink: "https://the-best-budget-tracker.herokuapp.com/",
        summary: "Budget Tracker is a full stack PWA(Progressive Web Application). You can keep track of your budget no matter what your connection constraints may be. As soon as you reestablish an internet connection Budget Tracker will automatically upload all of your input to the database. Happy Tracking!",
        a11yTitle: "Budget tracker"
    },
    {
        heading: "Notetaker",
        image: require("./assets/Notetaker.png").default,
        tech: "-Express -uuid -JS -CSS -JSON",
        gitlink: "https://github.com/Gintstir/Express-Notetaker",
        applink: "https://arcane-castle-20797.herokuapp.com/",
        summary: "This is an application called 'Express-Notetaker' that can be used to write and save notes. This application uses an Express.js backend and saves and retrieves note data from a JSON file. ",
        a11yTitle: "Note-taking app"
    },
]

function Portfolio ()  {
    return(
        <Grommet >
            <Box pad="large" >
                <Grid gap="medium"  pad={{vertical: "large"}} responsive={true} columns={{count: 'fit', size: "medium"}}>
                    {data.map((item) => 
                    (
                    <PortfolioCard item={item} key={item.heading} />
                    ))}
                </Grid>
            </Box>
        </Grommet>
    )
}

export default Portfolio