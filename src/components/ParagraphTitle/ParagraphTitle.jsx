import './styles.scss'
import { Box, Typography } from '@mui/material'

const ParagraphTitle = ({ children }) => (
    <Box className="container">
        <Typography variant="h5" component="h6" className="paragraphTitle">
            {children}
        </Typography>
    </Box>
)

export default ParagraphTitle
