import {
    FaPhone, FaEnvelope, FaLinkedin, FaGithub
} from 'react-icons/fa'
import IconsList from '../../components/IconsList'
import ParagraphTitle from '../../components/ParagraphTitle'
import DetailTitle from '../../components/DetailTitle'
import DownloadFile from '../../components/DownloadFile'
import {
    aboutMeText, studies, skillItems, experiences
} from '../../data/resumeData'
import './ResumePage.scss'
import resumePDF from '../../assets/downloads/v.stonkus-frontend-developer-resume.pdf'

const ResumePage = ({ isActive }) => (
    <div className="portfolio-resume-page__wrapper">
        <h1 className={isActive ? 'portfolio-resume-page__title--active' : 'portfolio-resume-page__title--not-active'}>Resume</h1>
        <div className="portfolio-resume-page__header">
            <div className="portfolio-resume-page__full-name">
                <div>Valdas</div>
                <div>Stonkus</div>
            </div>
            <div className="portfolio-resume-page__position">front-end developer</div>
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
            <div className="portfolio-resume-page__grid-item--left">
                <DetailTitle>About me</DetailTitle>
                {aboutMeText}
            </div>
            <div className="portfolio-resume-page__grid-item--right">
                <DetailTitle>Studies</DetailTitle>
                {studies.map((detail, index) => (
                    <span key={index} className="portfolio-resume-page__detail">
                        <div>{detail.dates}</div>
                        <div className="portfolio-resume-page__detail-title">{detail.title}</div>
                        <div>{detail.institution}</div>
                    </span>
                ))}
            </div>
            <div className="portfolio-resume-page__grid-item--left">
                <DetailTitle>Technical skills</DetailTitle>
                <IconsList itemArr={skillItems} />
            </div>
            <div className="portfolio-resume-page__grid-item--right">
                <DetailTitle>Experience</DetailTitle>
                {experiences.map((detail, index) => (
                    <span key={index} className="portfolio-resume-page__detail">
                        <div>{detail.dates}</div>
                        <div className="portfolio-resume-page__detail-title">{detail.title}</div>
                        <div>{detail.institution}</div>
                    </span>
                ))}
            </div>
        </div>
        <div className="portfolio-resume-page__paragraph-full-width">
            <DetailTitle>EXPERIENCE</DetailTitle>
            <div>
                {experiences.map((experience, index) => (
                    <div key={index} className="portfolio-resume-page__detail">
                        <div>{experience.dates}</div>
                        <div className="portfolio-resume-page__detail-title">{experience.title}</div>
                        <div>{experience.institution}</div>
                        <ul>
                            {experience.experienceDetails && experience.experienceDetails.map((experienceDetail, experienceDetailIndex) => (
                                <li key={experienceDetailIndex}>{experienceDetail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <ParagraphTitle>Resume PDF</ParagraphTitle>
        <DownloadFile
            caption="Download my resume as PDF file:"
            url={resumePDF}
        />
    </div>
)

export default ResumePage
