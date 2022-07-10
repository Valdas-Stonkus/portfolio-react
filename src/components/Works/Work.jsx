import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { projects } from '../../data/projectsData'
import Card from './Card'
import TagFilter from './TagFilter'

const Work = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects)

    return (
        <Container>
            <SectionTitle
                title="Works"
                captionLine1="Check my commercial and non commercial projects."
                captionLine2="If you have any questions feel free to ask me for more information."
            />
            <TagFilter objectArr={projects} setFilteredObjArr={setFilteredProjects} />

            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                {filteredProjects.map((project, i) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={project.id}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Card project={project} alwaysShowActionButtons={i === 0} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Work
