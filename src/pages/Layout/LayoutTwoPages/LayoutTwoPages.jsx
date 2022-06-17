import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
// import Header from '../Header'
// import Footer from '../Footer'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import WelcomePage from '../../WelcomePage'
import ResumePage from '../../ResumePage'

const LayoutTwoPages = () => (
    <Container
        // fixed
        disableGutters
        maxWidth="xl"
        sx={{
            bgcolor: 'red',
            position: 'relative',
            top: '0px'
            // height: '100vh',
        }}
    >
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                // bgcolor: 'white',
                position: 'absolute',
                left: '0px',
                top: '50px',
                // width: '70%',
                // height: '100vh',
                // border: '1px solid black',
                zIndex: '1'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    // NOTE kai užsipildys lapas, užkomentuoti
                    '& > :not(style)': {
                        width: '100%'
                    }
                    // height: '100vh'
                }}
            >
                <Paper elevation={24} square>
                    <WelcomePage />
                </Paper>
            </Box>
        </Container>
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                bgcolor: 'white',
                position: 'absolute',
                right: '0px',
                top: '-1px',
                width: '50%',
                zIndex: '0'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    // NOTE kai užsipildys lapas, užkomentuoti
                    '& > :not(style)': {
                        width: '100%'
                    }
                    // height: '80vh'
                }}
            >
                <Paper elevation={24} square>
                    <ResumePage />
                </Paper>
            </Box>
        </Container>

    </Container>
)

export default LayoutTwoPages
