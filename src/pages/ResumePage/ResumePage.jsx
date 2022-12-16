import {
    Box, Button, Container, Typography
} from '@mui/material'
import ColumnLists from '../../components/ColumnLists'
import ParagraphTitle from '../../components/ParagraphTitle'
import ResumeParagraph from '../../components/ResumeParagraph'
import SectionTitle from '../../components/SectionTitle'
import DownloadFile from '../../components/DownloadFile'
import ContactForm from '../../components/ContactForm'

/* eslint-disable max-len */
const ResumePage = () => (

    <Container sx={{ display: 'flex', flexDirection: 'column', margin: '1.5em 0' }}>
        <SectionTitle
            title="Resume"
            captionLine1="I started my journey a programmer 2 years ago when I enrolled in Python course at where I learned to code and just for fun build AI application."
            captionLine2="During the following years I developed my skills in Front-end web app development."
        />
        <ParagraphTitle>Education</ParagraphTitle>
        <ResumeParagraph
            title="Front-end Web Developer"
            institution="Baltic Institute of Technology"
            dates="2021 - 2022"
        />
        <ResumeParagraph
            title="Bachelor of Economics"
            institution="Šiauliai University"
            dates="2000 - 2005"
        />
        <ParagraphTitle>Work experience</ParagraphTitle>
        <ResumeParagraph
            title="Project manager"
            institution="UAB NIRLITA"
            dates="2017 - 2022"
        />
        <ResumeParagraph
            title="Director"
            institution="UAB DIDMAX"
            dates="2007 - 2015"
        />
        <ParagraphTitle>Skills and Tools</ParagraphTitle>
        <ColumnLists
            items={
                [
                    ['ReactJs', 'JavaScript', 'NodeJs', 'Python'],
                    ['VueJs', 'Contentful', 'Storybook', 'Agile'],
                    ['Git', 'HTML5', 'CSS', 'SCSS']
                ]
            }
        />
        <DownloadFile
            caption="Download my resume as PDF file:"
            url="/downloads/v.stonkus-resume.pdf"
        />
        <ContactForm />

    </Container>
)
export default ResumePage
