import { Box, Typography } from '@mui/material'

const ResumeParagraph = ({ title, institution, dates }) => (
    <Box sx={{
        display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '1em'
    }}
    >
        <Typography
            variant="h6"
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            {title}
        </Typography>
        <Typography
            variant="overline"
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            {institution}
        </Typography>
        <Typography
            variant="caption"
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            {dates}
        </Typography>
    </Box>
)
export default ResumeParagraph
