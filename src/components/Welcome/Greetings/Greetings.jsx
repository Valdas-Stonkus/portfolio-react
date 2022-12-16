// import React from 'react'
import './styles.scss'
import { Button, Stack, Typography } from '@mui/material'

const Greetings = () => (
    <>
        <Typography variant="h4" component="h6" sx={{ fontWeight: 'bold' }}>
            Hi, I am Valdas and I am a
            {' '}
            <span className="title--dark">&nbsp;Front-end Developer.</span>
        </Typography>
        <Typography variant="h5" component="h5" mt={2} sx={{ fontSize: '1rem' }}>
            I have more that 2 years experience of creating web applications. I am open for new opportunities and interesting projects.
        </Typography>
        <Stack direction="row" spacing={2} mt={2} justifyContent="center">
            <Button variant="contained" bgcolor="black">Contact me</Button>
            <Button variant="outlined" color="secondary">Check my work</Button>
        </Stack>
    </>
)

export default Greetings
