import {
    Avatar, CardMedia, Grid, Stack
} from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// import WelcomeAvatar from './WelcomeAvatar'
// import WelcomeContent from './WelcomeContent'
import personalPicture from '../../assets/images/valdas_wb.jpg'
import AvatarCustom from './AvatarCustom/AvatarCustom'
// import Holder from './Holder'
import './Welcome.css'

const Welcome = () => (
    <Container>

        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            p={{ xs: 5, sm: 6, md: 11 }}
        >
            <Box flex={5}>
                <AvatarCustom picture={personalPicture} />
            </Box>

            <Box bgcolor="blueviolet" p={2} flex={7}>WelcomeContent ddddddddddddddddddd</Box>

        </Stack>
    </Container>
)

export default Welcome
