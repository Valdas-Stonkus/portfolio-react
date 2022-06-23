import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, Container } from '@mui/material'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const theme = createTheme({
    palette: {
        background: {
            default: null // default gradient background set from index.css file
        },
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#424242'
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Container
                    maxWidth="false"
                    // sx={{ overflow: 'hidden' }}
                    // FIXME: Overflow prevents scrolling
                >
                    <App />
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
