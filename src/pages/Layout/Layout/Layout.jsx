import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from '../Header'
import Footer from '../Footer'

const Layout = () => (
    <Container
        fixed
        maxWidth="lg"
        sx={{
            bgcolor: 'white',
            borderRadius: '5px'
        }}
    >
        <Header />
        <Outlet />
        <Footer />
    </Container>
)

export default Layout
