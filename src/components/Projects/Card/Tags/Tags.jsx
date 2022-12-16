import { Typography, Box } from '@mui/material'

const Tags = ({ obj }) => (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography align="right" variant="overline" color="text.secondary">
            {obj.tags.map((t, i) => (
                <span key={i}>
                    {t}
                    {' '}
                </span>
            ))}
        </Typography>
    </Box>
)

export default Tags
