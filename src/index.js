import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, Container } from '@mui/material'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

// import PostsApi from './api/contentful/contentful.api'
// const posts = new PostsApi().getPosts()
// console.table(posts)

let theme = createTheme({
    palette: {
        background: {
            default: 'rgb(25, 29, 34)'
        }
    }
    // typography: {
    //     subtitle1: {
    //         fontWeight: 500
    //     }
    // }
})
theme = responsiveFontSizes(theme)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                maxWidth="false"
                sx={{
                    height: '100vh', padding: '3px'
                }}
            >
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
