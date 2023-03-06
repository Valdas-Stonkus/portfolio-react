import {
    FaPhone, FaEnvelope, FaLinkedin, FaReact, FaNodeJs, FaGithub
} from 'react-icons/fa'
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
import IconsList from '../../components/IconsList'
import ParagraphTitle from '../../components/ParagraphTitle'
import SectionTitle from '../../components/SectionTitle'
import DetailTitle from '../../components/DetailTitle'
import DownloadFile from '../../components/DownloadFile'
import './ResumePage.scss'
import { resumeDetailSections1Col, resumeDetailSections2Col } from '../../data/resumeData'

/* eslint-disable max-len */
const ResumePage = ({ isActive }) => {
    const studies = [
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
    const skillItems = [
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
    const experience = [
        {
            dates: '2022-2023',
            title: 'Junior Developer',
            institution: '"Reaching For Zero"'
        },
        {
            dates: '2017-2022',
            title: 'Project manager',
            institution: '"UAB NIRLITA"'
        },
        {
            dates: '2006-2017',
            title: 'Manager',
            institution: '"UAB DIDMAX"'
        },
        {
            dates: '2004-2006',
            title: 'Project manager',
            institution: '"UAB NIRLITA"'
        }
    ]

    return (
        <div className="portfolio-resume-page__wrapper">
            <h1 className={isActive ? 'portfolio-resume-page__title--active' : 'portfolio-resume-page__title--not-active'}>Resume</h1>
            <div className="portfolio-resume-page__header">
                <div className="portfolio-resume-page__full-name">
                    <div>Valdas</div>
                    <div>Stonkus</div>
                </div>
                <div className="portfolio-resume-page__no-link portfolio-resume-page__gap1">
                    <FaPhone />
                    <a href="tel:+37060080084">+370 600 80084</a>
                </div>
                <div className="portfolio-resume-page__no-link portfolio-resume-page__gap1">
                    <FaEnvelope />
                    <a href="mailto:valdas@stonkus.lt" target="_blank" rel="noreferrer">valdas@stonkus.lt</a>
                </div>
                <div className="portfolio-resume-page__no-link portfolio-resume-page__gap1">
                    <FaGithub />
                    <a href="http://github.com/MrStonkus" target="_blank" rel="noreferrer">github.com/MrStonkus</a>
                </div>
                <div className="portfolio-resume-page__no-link portfolio-resume-page__gap1">
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/mrstonkus/" target="_blank" rel="noreferrer">linkedin.com/in/mrstonkus</a>
                </div>
            </div>
            <div className="portfolio-resume-page__grid-section">
                <div className="portfolio-resume-page__grid-item">
                    <DetailTitle>About me</DetailTitle>
                    I am a passionate front-end developer with experience in HTML, CSS, JavaScript, TypeScript, and ReactJS. I gained valuable team experience while working on a commercial project after finishing my studies at the Baltic Technology Institute. Now, I am open to new opportunities and ready to create visually appealing web applications. Feel free to contact me if you need a dedicated team player who is always willing to go the extra mile.
                </div>
                <div className="portfolio-resume-page__grid-item">
                    <DetailTitle>Studies</DetailTitle>
                    {studies.map((detail, index) => (
                        <span key={index} className="portfolio-resume-page__detail">
                            <div>{detail.dates}</div>
                            <div className="portfolio-resume-page__detail-title">{detail.title}</div>
                            <div>{detail.institution}</div>
                        </span>
                    ))}
                </div>
                <div className="portfolio-resume-page__grid-item">
                    <DetailTitle>Technical skills</DetailTitle>
                    <IconsList itemArr={skillItems} />
                </div>
                <div className="portfolio-resume-page__grid-item">
                    <DetailTitle>Experience</DetailTitle>
                    {experience.map((detail, index) => (
                        <span key={index} className="portfolio-resume-page__detail">
                            <div>{detail.dates}</div>
                            <div className="portfolio-resume-page__detail-title">{detail.title}</div>
                            <div>{detail.institution}</div>
                        </span>
                    ))}
                </div>
            </div>
            <ParagraphTitle>Resume PDF</ParagraphTitle>
            <DownloadFile
                caption="Download my resume as PDF file:"
                url="/downloads/v.stonkus-resume.pdf"
            />
        </div>
    )
}

export default ResumePage
