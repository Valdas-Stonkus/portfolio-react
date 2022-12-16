import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useRef, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import GitHubIcon from '@mui/icons-material/GitHub'
import Images from './Images'
import Tags from '../Tags/Tags'

const Preview = ({ project, show, setShow }) => {
    const [scroll, setScroll] = useState('paper')

    const handleClickOpen = (scrollType) => () => {
        setShow(true)
        setScroll(scrollType)
    }
    const handleClose = () => setShow(false)
    const descriptionElementRef = useRef(null)

    useEffect(() => {
        if (show) {
            const { current: descriptionElement } = descriptionElementRef
            if (descriptionElement !== null) {
                descriptionElement.focus()
            }
        }
    }, [show])

    if (!show) return null

    return (
        <div>
            <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
            <Button onClick={handleClickOpen('body')}>scroll=body</Button>
            <Dialog
                open={show}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="md"
            >
                <DialogTitle id="scroll-dialog-title">{project.title}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    />
                    <Box p={2}>
                        <Typography variant="h6" color="text.secondary">Description</Typography>
                        <Typography variant="body" color="text.secondary">{project.description}</Typography>
                    </Box>
                    <Box p={2}>
                        <Typography variant="h6" color="text.secondary">Problem</Typography>
                        <Typography variant="body" color="text.secondary">{project.problem}</Typography>
                    </Box>
                    <Box p={2}>
                        <Typography variant="h6" color="text.secondary">Solution</Typography>
                        <Typography variant="body" color="text.secondary">{project.solution}</Typography>
                    </Box>
                    <Box p={2}>
                        <Typography variant="h6" color="text.secondary">Implementation</Typography>
                        <Typography variant="body" color="text.secondary">{project.implementation}</Typography>
                        <Tags obj={project} />
                    </Box>
                    <Images pictures={project.pictures} />
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    {project.btnActionTitle ? (
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={(
                                <RemoveRedEyeIcon />
                            )}
                            size="small"
                            href={project.btnActionUrl}
                            target="_blank"
                        >
                            {project.btnActionTitle}
                        </Button>
                    ) : null}
                    <Button
                        variant="text"
                        color="secondary"
                        startIcon={<GitHubIcon />}
                        href={project.btnRepoUrl}
                        target="_blank"
                    >
                        Github repo
                    </Button>
                    <Button color="secondary" onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Preview
