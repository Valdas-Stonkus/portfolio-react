import {
    Box, Container, Stack
} from '@mui/material'
import personalPicture from '../../assets/images/valdas_wb.jpg'
import AvatarCustom from './AvatarCustom/AvatarCustom'
import Greetings from './Greetings/Greetings'
import './Welcome.css'

const Welcome = ({ homePageContext }) => (
    <Container>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            p={{ xs: 0, sm: 6, md: 9 }}
            pt={{ xs: 0, sm: 5, md: 5 }}
        >
            <Box flex={5}>
                <AvatarCustom picture={personalPicture} />
            </Box>
            <Box p={{ xs: 0, sm: 1, md: 2 }} flex={7}>
                <Greetings homePageContext={homePageContext} />
            </Box>
        </Stack>
    </Container>
)

export default Welcome
