/* eslint-disable no-nested-ternary */
import {
    Button, CardActionArea, CardActions, CardContent, CardMedia, Typography, Card as CardMui, Box
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { useState } from 'react'
import Preview from './Preview'

const Card = ({ project, alwaysShowActionButtons = false }) => {
    const [isMouseOver, setIsMouseOver] = useState(false)
    const [showPreview, setShowPreview] = useState(false)
    const shortDescription = `${project.description.slice(0, 100)}... `

    return (
        <>
            <CardMui
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                sx={{
                    display: 'flex',
                    minHeight: '100%',
                    maxWidth: 345,
                    flexDirection: 'column'
                }}
            >
                <CardActionArea onClick={() => setShowPreview(true)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={project.imgUrl}
                        alt={project.imgAlt}
                    />
                    <CardContent sx={{ pb: '0px' }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {project.title}
                        </Typography>
                        <Box mb={2}>
                            <Typography variant="body2" color="text.secondary">
                                {shortDescription + (isMouseOver || alwaysShowActionButtons ? 'Read more' : '')}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Typography align="right" variant="overline" color="text.secondary">
                                {project.tags.map((t, i) => (
                                    <span key={i}>
                                        {t}
                                        {' '}
                                    </span>
                                ))}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
                <Box sx={{
                    marginTop: 'auto'
                }}
                >
                    <CardActions sx={{ padding: '0 16px 16px 16px', visibility: alwaysShowActionButtons ? 'visible' : isMouseOver ? 'visible' : 'hidden' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={(
                                <RemoveRedEyeIcon />
                            )}
                            size="small"
                            href={project.btnActionUrl}
                        >
                            {project.btnActionTitle}
                        </Button>
                        <Button variant="text" color="secondary" startIcon={<GitHubIcon />} href={project.btnRepoUrl} target="_blank">Github repo</Button>
                    </CardActions>
                </Box>
            </CardMui>
            <Preview show={showPreview} setShow={setShowPreview} project={project} />
        </>
    )
}
export default Card
