import {
    Container, Box, Typography, Button
} from '@mui/material'

const Footer = () => (
    <Container>

        <Box display="flex" justifyContent="end" gap={1} p={1} mb={2} mt={2} bgcolor="secondary.main" color="secondary">
            <Typography variant="caption">
                Made by
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                Valdas Stonkus
            </Typography>

        </Box>
    </Container>
)
export default Footer
