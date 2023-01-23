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
    SiEslint,
    SiStorybook,
    SiInsomnia
} from 'react-icons/si'
import IconsList from '../components/IconsList'

export const resumeDetailSections2Col = [
    {
        title: 'About me',
        details: [
            {
                text: 'Bla bla bla'
            }
        ]
    },
    {
        title: 'Studies',
        details: [
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
    },
    {
        title: 'Experience',
        details: [
            {
                dates: '2022-2023',
                title: 'Junior Developer',
                institution: '"Reaching For Zero"'
            },
            {
                dates: '2004-2021',
                title: 'Project manager',
                institution: '"UAB NIRLITA"'
            }
        ]
    },
    {
        title: 'Technical Skills',
        details: [
            {
                list: <IconsList
                    itemArr={[
                        { name: 'React', icon: <FaReact /> },
                        { name: 'TypeScript', icon: <SiTypescript /> },
                        { name: 'SASS', icon: <SiSass /> },
                        { name: 'JavaScript', icon: <SiJavascript /> },
                        { name: 'CSS', icon: <SiCss3 /> },
                        { name: 'Bootstrap', icon: <SiBootstrap /> },
                        { name: 'HTML5', icon: <SiHtml5 /> },
                        { name: 'Node.js', icon: <FaNodeJs /> },
                        { name: 'Python', icon: <SiPython /> }
                        // { name: 'MongoDB', icon: <SiMongodb /> }
                        // { name: 'Contentful', icon: <SiContentful /> },
                        // { name: 'Storybook', icon: <SiStorybook /> },
                        // { name: 'Eslint', icon: <SiEslint /> },
                        // { name: 'Insomnia', icon: <SiInsomnia /> }
                    ]}
                />
            }
        ]
    }
]

export const resumeDetailSections1Col = [
    {
        title: 'Other Skills',
        details: [
            {
                list: <IconsList
                    itemArr={[
                        // { name: 'React', icon: <FaReact /> },
                        // { name: 'TypeScript', icon: <SiTypescript /> },
                        // { name: 'JavaScript', icon: <SiJavascript /> },
                        // { name: 'SASS', icon: <SiSass /> },
                        // { name: 'CSS', icon: <SiCss3 /> },
                        // { name: 'Bootstrap', icon: <SiBootstrap /> },
                        // { name: 'HTML5', icon: <SiHtml5 /> },
                        // { name: 'Node.js', icon: <FaNodeJs /> },
                        // { name: 'Python', icon: <SiPython /> },
                        { name: 'Contentful', icon: <SiContentful /> },
                        { name: 'Storybook', icon: <SiStorybook /> },
                        { name: 'Eslint', icon: <SiEslint /> },
                        { name: 'Insomnia', icon: <SiInsomnia /> },
                        { name: 'MongoDB', icon: <SiMongodb /> }
                    ]}
                />
            }
        ]
    }
]
