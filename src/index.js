import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import PostsApi from './api/contentful/contentful.api'

const root = ReactDOM.createRoot(document.getElementById('root'))

// const posts = new PostsApi().getPosts()
// console.table(posts)

root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <CssBaseline />
        <App />
    </BrowserRouter>

    // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
