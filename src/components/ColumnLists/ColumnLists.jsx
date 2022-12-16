import { Box } from '@mui/material'

const ColumnLists = ({ items }) => (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {items.map((column, i) => (
            <Box key={i}>
                <ul>
                    {column.map((item, index) => (
                        <li key={index} style={{ listStyleType: 'none' }}>{item}</li>
                    ))}
                </ul>
            </Box>
        ))}

    </Box>
)

export default ColumnLists
