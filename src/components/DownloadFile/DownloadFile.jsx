import {
    Box, Button, Typography, Link
} from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'

const DownloadFile = ({ caption, url }) => (
    <Box sx={{ textAlign: 'center', marginTop: '1.5em' }}>
        <Typography variant="h6" sx={{ marginBottom: '5px' }}>{caption}</Typography>
        <Button variant="contained" bgcolor="black" download>
            <FileDownloadOutlinedIcon sx={{ marginRight: '5px' }} />
            <Link
                href={url}
                underline="none"
                download
                color="white"
            >
                Download
            </Link>
        </Button>
    </Box>
)

export default DownloadFile
