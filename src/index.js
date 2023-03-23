import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
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
        <div className="body-wrapper">
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    </React.StrictMode>
)
