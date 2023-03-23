/* eslint-disable max-len */
export const projects = [
    {
        id: 1,
        title: 'Warfarin Dose Calendar',
        description: 'This calculator provides an ideal dose and schedule calendar for selected anticoagulant medications. It has been tested in real-life situations, and the results have been very good.',
        imgUrl: '/project-images/warfarin-dose-calendar.png',
        imgAlt: 'Screenshot of warfarin dose calendar',
        tags: ['React', 'NodeJs', 'JavaScript', 'Bootstrap'],
        btnActionTitle: 'Demo',
        btnActionUrl: 'https://stonkus.lt/projects/warfarin-dose-calendar/',
        btnRepoUrl: 'https://github.com/MrStonkus/warfarin-dose-calendar',
        problem: 'People who require lifelong anticoagulant therapy must also regularly monitor their INR levels, which can be challenging. If a person\'s INR level is either too high or too low, it can have negative effects as determined by a doctor.',
        solution: 'I have decided to create an app calculator where users can quickly input their medicine data and receive an optimal dose calendar that is as close as possible to their weekly dose.',
        implementation: 'For this project, I used React as the main framework. The biggest challenge was creating an API for the Dose calculator. I used Node.js for the backend to implement the API separately on the server. After that, I developed the frontend app which sends requests to the server API and receives results for the schedule. The most difficult part of this process was creating the backend API, but I learned a lot of new things along the way. This is link to API: http://stonkus.lt/api/inr/',
        pictures: [
            {
                img: '/project-images/warfarin-dose-calendar.png',
                title: 'Screenshot of warfarin dose calendar'
            }
        ]

    },
    {
        id: 2,
        title: 'Portfolio',
        description: 'This project is my personal portfolio website. The first version was made with vanilla JavaScript, and after that, I created a new one with ReactJS.',
        imgUrl: '/project-images/portfolio.png',
        imgAlt: 'Thumbnail of Portfolio website',
        tags: ['React', 'JavaScript', 'MUI'],
        btnActionTitle: '',
        btnActionUrl: '',
        btnRepoUrl: 'https://github.com/MrStonkus/portfolio-react',
        problem: 'To get a job as a developer, I must have some examples of projects that I can showcase to potential employers. Without them, it would be hard to present myself as a web developer.',
        solution: 'To complete this project, I chose to create a two-page website. I used the React library as a basis and utilized SASS and MUI for styling.',
        implementation: 'After searching for inspiration, I chose designer-made templates and tried to implement several ideas by combining them. I am happy with the result and look forward to hearing feedback from others.',
        pictures: [
            {
                img: '/project-images/portfolio.png',
                title: 'Portfolio'
            }
        ]

    },
    {
        id: 3,
        title: 'Basketball Match Simulator',
        description: 'This is a basketball game match simulator where you can start, stop, reset, and resume the game. Points are randomly counted over time.',
        imgUrl: '/project-images/basketball-match-simulator.png',
        imgAlt: 'Basketball arena with a lot of peoples and game info score.',
        tags: ['JavaScript', 'NodeJs'],
        btnActionTitle: '',
        btnActionUrl: '#',
        btnRepoUrl: 'https://github.com/MrStonkus/Baskeball-match-simulator',
        problem: 'At the Baltic Institute of Technology (BIT), we learn JavaScript and Node.js, but we have not yet built a full application. In order to apply what I have learned, I need to develop an application in frontend and backend to confirm my skills to myself.',
        solution: 'Develop an application using only vanilla JavaScript for front-end and NodeJs + Express framework for the back-end.',
        implementation: 'First, I developed the main basketball match engine in the back-end, using Node.js and the Express framework. Then, I created the front-end using HTML, CSS, and JavaScript.',
        pictures: [
            {
                img: '/project-images/basketball-match-simulator.png',
                title: 'Basketball arena with a lot of peoples and game info score.'
            }
        ]

    },
    {
        id: 4,
        title: 'Flights Crawler',
        description: 'The app looks at the www.fly540.com website and collects all the cheapest round-trip flight combinations from NBO (Nairobi) to MBA (Mombasa).',
        imgUrl: '/project-images/flight-crawler.png',
        imgAlt: 'App menu in black console background',
        tags: ['Python'],
        btnActionTitle: '',
        btnActionUrl: '#',
        btnRepoUrl: 'https://github.com/MrStonkus/flights-crawler',
        problem: 'It was a Python programming experience check from a company that needed to submit such functionality solution - an application called Flight Crawler in Python language is needed, which would take data from a real existing airline website and return all flights with the best lowest prices for both ends according to the selected dates.',
        solution: 'It is web crawler. Who could do this job quickly and efficiently.',
        implementation: 'This console UI app is a web flight crawler written in python. The app, looks in www.fly540.com website and collect all cheapest round trip flight combinations from NBO (Nairobi) to MBA (Mombasa). Standard departure are 10 and 20 days from current date and returning 7 days after the departure date, but it can be freely modified in code.',
        pictures: [
            {
                img: '/project-images/flight-crawler.png',
                title: 'App menu in black console background'
            }
        ]

    },
    {
        id: 5,
        title: 'Snake AI Turtle',
        description: 'App which show how AI snake can learn to eat more and more using reinforcement learning algorithm.',
        imgUrl: '/project-images/snake-ai.png',
        imgAlt: 'Grid of snake game at white background.',
        tags: ['Python', 'Reinforcement-Learning'],
        btnActionTitle: '',
        btnActionUrl: '#',
        btnRepoUrl: 'https://github.com/MrStonkus/snake-ai-inpython-turtle',
        problem: 'All my life, I have been excited about how machine learning can do amazing things.And I wanted to do something myself with the concept of machine learning. ',
        solution: 'Simple snake (turtle in my case) what it could learn myself and collect foods.',
        implementation: 'For this solution, I chose the Python language and used the Keras RL libraries. I chose the Reinforcement Learning method because it is best suited for solving problems of this nature. The results were very interesting, after a few corrections, the artificial intelligence snake grew up to 320 units. When trying to do this in reality by oneself, it turned out to be an impossible mission. The artificial intelligence program surpassed human abilities.',
        pictures: [
            {
                img: '/project-images/snake-ai.png',
                title: 'Grid of snake game at white background.'
            }
        ]

    },
    {
        id: 6,
        title: 'Snake Game',
        description: 'This is classic Snake game. You can control snake with arrow keys, eat food and grow.',
        imgUrl: '/project-images/snake-game.png',
        imgAlt: 'Grid of snake game at green background.',
        tags: ['Python'],
        btnActionTitle: '',
        btnActionUrl: '#',
        btnRepoUrl: 'https://github.com/MrStonkus/snake_python_pygame',
        problem: 'When I started to learn a develop, I wanted to have any simple game written in Python.',
        solution: 'I decided to make a simple Snake Game.',
        implementation: 'For this project I used Python and Pygame library.',
        pictures: [
            {
                img: '/project-images/snake-game.png',
                title: 'Grid of snake game at green background.'
            }
        ]

    }

]
