import {
    Button, Container, IconButton, Stack, Typography
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { handleClickNav } from '../../utils/helpers'

const Header = () => (
    <Container sx={{ padding: '10px' }}>
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="h2" sx={{ fontSize: '36px', fontWeight: 'bold', letterSpacing: '-4px' }}>VS</Typography>
            <Button variant="text" color="secondary" onClick={() => handleClickNav('projects')}>Projects</Button>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton aria-label="Github repository icon" href="https://github.com/MrStonkus" target="_blank" rel="noopener">
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label="LinkedIn icon" href="https://www.linkedin.com/in/mrstonkus/" target="_blank" rel="noopener">
                    <LinkedInIcon />
                </IconButton>
            </Stack>
        </Stack>
    </Container>
)

export default Header
