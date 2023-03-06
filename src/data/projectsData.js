/* eslint-disable max-len */
export const projects = [
    {
        id: 1,
        title: 'Warfarin Dose Calendar',
        description: 'This calculator gives ideal doses schedule calendar for selected anticoagulants medicines. It is tested in real life, the results are very good.',
        imgUrl: '/projects/warfarin-dose-calendar.png',
        imgAlt: 'Screenshot of warfarin dose calendar',
        tags: ['React', 'NodeJs', 'JavaScript', 'Bootstrap'],
        btnActionTitle: 'Demo',
        btnActionUrl: 'https://stonkus.lt/projects/warfarin-dose-calendar/',
        btnRepoUrl: 'https://github.com/MrStonkus/warfarin-dose-calendar',
        problem: 'People who need to take anticoagulants (blood thinners) throughout their lives and monitor their INR levels. And this is quite difficult to do. If the INR is too high or too low as determined by doctors, it can have a negative effect on the person.',
        solution: 'I decided to an app calculator where peoples have ability to quickly set they medicine data and get medicine dose calendar.',
        implementation: 'For this project I used React as main framework. The biggest problem was create API dose calculator. This one I did with NodeJs.',
        pictures: [
            {
                img: '/projects/warfarin-dose-calendar.png',
                title: 'Screenshot of warfarin dose calendar'
            }
        ]

    },
    {
        id: 2,
        title: 'Portfolio',
        description: 'This project is my personal portfolio website. First it was made with vanilla HTML and CSS, after that with React.',
        imgUrl: '/projects/portfolio.png',
        imgAlt: 'Thumbnail of Portfolio website',
        tags: ['React', 'JavaScript', 'MUI'],
        btnActionTitle: 'Demo',
        btnActionUrl: 'https://stonkus.lt/',
        btnRepoUrl: 'https://github.com/MrStonkus/portfolio-react',
        problem: 'To get a job as developer I must to have some examples of projects that I could to expose to the potential employers.',
        solution: 'I decided to make a portfolio website and publish my favorite projects.',
        implementation: 'I used React for the frontend and SASS for the styling. I used Material UI for the components.',
        pictures: [
            {
                img: '/projects/portfolio.png',
                title: 'Portfolio'
                // featured: true
            }
        ]

    },
    {
        id: 3,
        title: 'Basketball Match Simulator',
        description: 'Simulator of basketball game match. You can start, stop, reset and resume game. The points are counted by the time randomly.',
        imgUrl: '/projects/basketball-match-simulator.png',
        imgAlt: 'Basketball arena with a lot of peoples and game info score.',
        tags: ['JavaScript', 'NodeJs'],
        btnActionTitle: '',
        btnActionUrl: '#',
        btnRepoUrl: 'https://github.com/MrStonkus/Baskeball-match-simulator',
        problem: 'In BIT (Baltic Technology of Institute) we learn JavaScript, NodeJs but did not did any full app.',
        solution: 'Create back-end and front-end app using only vanilla JavaScript. ',
        implementation: 'First I did back-end where implemented main basketball match engine. For this I used NodeJs and Express framework. Then I did front-end where I used HTML, CSS and JavaScript.',
        pictures: [
            {
                img: '/projects/basketball-match-simulator.png',
                title: 'Basketball arena with a lot of peoples and game info score.'
            }
        ]

    },
    {
        id: 4,
        title: 'Flights Crawler',
        description: 'The app, looks in www.fly540.com website and collect all cheapest round trip flight combinations from NBO (Nairobi) to MBA (Mombasa).',
        imgUrl: '/projects/flight-crawler.png',
        imgAlt: 'App menu in black console background',
        tags: ['Python'],
        btnActionTitle: '',
        btnActionUrl: '#',
        btnRepoUrl: 'https://github.com/MrStonkus/flights-crawler',
        problem: 'If you need periodically search flights it takes a lot of human time. ',
        solution: 'It is web crawler. Who could do this job quickly and efficiently.',
        implementation: 'This console UI app is a web flight crawler written in python. The app, looks in www.fly540.com website and collect all cheapest round trip flight combinations from NBO (Nairobi) to MBA (Mombasa). Standard departure are 10 and 20 days from current date and returning 7 days after the departure date, but it can be freely modified in code.',
        pictures: [
            {
                img: '/projects/flight-crawler.png',
                title: 'App menu in black console background'
            }
        ]

    },
    {
        id: 5,
        title: 'Snake AI Turtle',
        description: 'App which show how AI snake can learn to eat more and more using reinforcement learning algorithm.',
        imgUrl: '/projects/snake-ai.png',
        imgAlt: 'Grid of snake game at white background.',
        tags: ['Python', 'Reinforcement-Learning'],
        btnActionTitle: '',
        btnActionUrl: '#',
        btnRepoUrl: 'https://github.com/MrStonkus/snake-ai-inpython-turtle',
        problem: 'All my life I was exited how machine learning could do amazing things. And I wanted to do something myself with machine learning concept. ',
        solution: 'Simple snake (turtle in my case) what it could learn myself and collect foods.',
        implementation: 'I watched couple youtube videos and read couple white papers - documentations. I used Reinforcement learning method, implemented it by Keras library. The result - turtle max record 64 collected foods.',
        pictures: [
            {
                img: '/projects/snake-ai.png',
                title: 'Grid of snake game at white background.'
            }
        ]

    },
    {
        id: 6,
        title: 'Snake Game',
        description: 'This is classic Snake game. You can control snake with arrow keys, eat food and grow.',
        imgUrl: '/projects/snake-game.png',
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
                img: '/projects/snake-game.png',
                title: 'Grid of snake game at green background.'
            }
        ]

    }

]
