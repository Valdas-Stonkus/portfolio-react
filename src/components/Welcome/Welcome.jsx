import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import WelcomeAvatar from './WelcomeAvatar'
import WelcomeContent from './WelcomeContent'

const Welcome = () => (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
                <WelcomeAvatar />
            </Grid>
            <Grid item xs={6} md={4}>
                <WelcomeContent />
            </Grid>
        </Grid>
    </Box>
)
export default Welcome
