/* eslint-disable max-len */
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button, CardActionArea, CardActions } from '@mui/material'

const ProjectCard = ({ project }) => (
    <Card sx={{
        display: 'flex',
        minHeight: '100%',
        maxWidth: 345,
        flexDirection: 'column'

    }}
    >
        <CardActionArea>

            <CardMedia
                component="img"
                height="140"
                image={project.imgUrl}
                alt={project.imgAlt}
            />
            <CardContent sx={{ pb: '0px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Box mb={2}>
                    <Typography variant="body2" color="text.secondary">
                        {project.shortDescription}
                    </Typography>
                </Box>
                <Typography align="right" variant="overline" color="text.secondary">
                    {project.tags.map((t, i) => (
                        <span key={i}>
                            {t}
                            {' '}
                        </span>
                    ))}
                </Typography>
            </CardContent>
        </CardActionArea>

        <Box sx={{
            marginTop: 'auto'
        }}
        >
            <CardActions>
                <Button size="small">Demo</Button>
                <Button size="small">Github repo</Button>
            </CardActions>
        </Box>

    </Card>
)
export default ProjectCard
