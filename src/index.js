import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, Container } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

// import PostsApi from './api/contentful/contentful.api'
// const posts = new PostsApi().getPosts()
// console.table(posts)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <CssBaseline />
        <Container
            maxWidth="false"
            sx={{
                bgcolor: 'rgb(25, 29, 34)', height: '100vh', padding: '10px'
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Container>

    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
