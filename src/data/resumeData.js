import { FaReact, FaNodeJs } from 'react-icons/fa'
import {
    SiTypescript,
    SiJavascript,
    SiSass,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiMongodb,
    SiPython,
    SiContentful,
    SiStorybook,
    SiEslint,
    SiInsomnia
} from 'react-icons/si'

/* eslint-disable max-len */
export const aboutMeText = 'I am a dedicated front-end developer with a passion for creating visually appealing web applications. I have experience in HTML, CSS, JavaScript, TypeScript, and ReactJS, which I gained while working on a commercial project after completing my studies at the Baltic Technology Institute. During this project, I was responsible for the front-end development and worked collaboratively with a team to create responsive designs and React components.'

export const studies = [
    {
        dates: '2021-2022',
        title: 'Front-end Web Developer',
        institution: '"Baltic Institute of Technology"'
    },
    {
        dates: '2000-2005',
        title: 'Bachelor of Economic',
        institution: '"University of Šiauliai"'
    }
]

export const skillItems = [
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'SASS', icon: <SiSass /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Contentful', icon: <SiContentful /> },
    { name: 'Storybook', icon: <SiStorybook /> },
    { name: 'Python', icon: <SiPython /> }
    // { name: 'Eslint', icon: <SiEslint /> },
    // { name: 'Insomnia', icon: <SiInsomnia /> }
]

export const experiences = [
    {
        dates: '2022-2023',
        title: 'Junior Developer',
        institution: '"Reaching For Zero"',
        experienceDetails: [
            'Work on project - an online questionnaire with user and admin panels, tailored to the specific functionality required by the client\'s company',
            'Creating the frontend part, using React components and programming languages such as JavaScript and TypeScript',
            'Working as part of a team, utilizing Git and Github for file versioning',
            'Utilizing CSS, SASS, and Bootstrap styling techniques. The design - responsive and suitable for both mobile and larger screens'
        ]
    },
    {
        dates: '2020-2023',
        title: '',
        institution: 'Personal projects at www.stonkus.lt',
        experienceDetails: [
            'Warfarin Dose Calendar - built with ReactJs, NodeJs, Bootstrap, and of course, all written in JavaScript',
            'Portfolio website - was built with React, JavaScript, and Mui',
            'Basketball Match Simulator - I made this one with vanilla JavaScript and NodeJs',
            'Flights Crawler - the Python code which gets outbound flights from a real airline company website',
            'Snake AI Turtle - I have an interest in machine learning, so I built the snake that learns by itself to eat a meal with Python'

        ]
    },
    {
        dates: '2004-2006, 2017-2022',
        title: 'Project manager',
        institution: '"UAB NIRLITA"',
        experienceDetails: [
            'Designing of logistic warehouses, selection of equipment and installation',
            'Maintaining business customer relationships',
            'Developing and implementing projects, organizing employees',
            'Organizing supply from foreign countries, participation in international trade fairs'
        ]
    },
    {
        dates: '2006-2017',
        title: 'Manager',
        institution: '"UAB DIDMAX"',
        experienceDetails: [
            'Wholesale trade of sports footwear',
            'Organization of sports club activities',
            'Organization of advertising campaigns',
            'Working with business clients'
        ]
    }
]
