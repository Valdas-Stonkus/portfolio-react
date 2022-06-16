/* eslint-disable max-len */
import { Grid } from '@mui/material'
import { projects } from '../../../data/projectsData'
import ProjectCard from '..'

const GridWrapper = () => (
    <Grid container spacing={2}>
        {projects.map((project) => (
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
                <ProjectCard project={project} />
            </Grid>
        ))}
    </Grid>
)
export default GridWrapper
