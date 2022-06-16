/* eslint-disable max-len */
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained'
                        && ownerState.color === 'primary' && {
                        backgroundColor: '#003060',
                        color: '#fff'
                    })
                })
            }
        }
    }
})

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

            <CardActions style={{ padding: '16px' }}>
                {/* <Button variant="contained" sx={{ color: 'grey', backgroundColor: 'grey.900' }}>Demo</Button> */}
                <Button variant="contained" color="primary">Demo</Button>
                <Button variant="text" sx={{ color: 'theme.palette.grey[500]' }}>Github repo</Button>

                <ThemeProvider theme={theme}>
                    <Button variant="contained">font-size: 1rem</Button>
                </ThemeProvider>

            </CardActions>
        </Box>

    </Card>
)
export default ProjectCard
