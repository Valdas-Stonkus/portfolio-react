import { Typography } from '@mui/material'

const SectionTitle = ({ title, captionLine1, captionLine2 }) => (
    <>
        <Typography id={title} variant="h4" mt={2} sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>{title}</Typography>
        <Typography variant="caption" sx={{ display: 'flex', justifyContent: 'center' }}>{captionLine1}</Typography>
        <Typography variant="caption" mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>{captionLine2}</Typography>
    </>
)

export default SectionTitle
