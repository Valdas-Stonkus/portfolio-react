import './DownloadFile.scss'
import { Button, Link } from '@mui/material'
import { FaFileDownload } from 'react-icons/fa'

const DownloadFile = ({ caption, url }) => (

    <div className="portfolio-download-file">
        <div className="portfolio-download-file__caption">{caption}</div>
        <Button variant="contained" bgcolor="black" download>
            <FaFileDownload style={{ marginRight: '5px' }} />
            <Link
                href={url}
                underline="none"
                download
                color="white"
            >
                Download
            </Link>
        </Button>
    </div>
)

export default DownloadFile
