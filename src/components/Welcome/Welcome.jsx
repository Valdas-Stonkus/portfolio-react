import { Grid, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import WelcomeAvatar from './WelcomeAvatar'
import WelcomeContent from './WelcomeContent'

const Welcome = () => (
    <Container>

        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            p={2}
        >
            <WelcomeAvatar />
            <WelcomeContent />
        </Stack>
    </Container>
)
export default Welcome
