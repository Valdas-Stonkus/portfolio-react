// import React from 'react'
import './styles.scss'
import { Button, Stack, Typography } from '@mui/material'
import { handleClickNav } from '../../../utils/helpers'

const Greetings = () => (
    <>
        <Typography variant="h4" component="h6" sx={{ fontWeight: 'bold' }}>
            Hi, I am Valdas and I am a
            {' '}
            <span className="title--dark">&nbsp;Front-end Developer.</span>
        </Typography>
        <Typography variant="h5" component="h5" mt={2} sx={{ fontSize: '1rem' }}>
            <p>
                Most of my life I have been interested in programming and making small projects for myself. Until one day I decided to become a real programmer.
            </p>
            <p>
                Today I have more than 2 years of experience in ReactJs programming. I am interested in new projects and looking for new opportunities.
            </p>
        </Typography>
        <Stack direction="row" spacing={2} mt={2} justifyContent="center">
            <Button variant="contained" bgcolor="black">Contact me</Button>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleClickNav('projects')}
            >
                Check my work
            </Button>
        </Stack>
    </>
)

export default Greetings
