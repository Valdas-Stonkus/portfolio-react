import { Grid, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import WelcomeAvatar from './WelcomeAvatar'
import WelcomeContent from './WelcomeContent'

const Welcome = () => (
    <Stack direction="row" justifyContent="space-around">
        <WelcomeAvatar />
        <WelcomeContent />
    </Stack>
)
export default Welcome
