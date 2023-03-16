import { Box, Avatar } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Holder from './Holder'

const AvatarCustom = ({ picture }) => {
    const theme = useTheme()
    const screenMoreThanSmall = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Box
            display="flex"
            position="relative"
            justifyContent="center"

        >
            <Avatar
                alt="The house from the offer."
                src={picture}
                variant="square"
                sx={{
                    width: { xs: '70%', sm: '100%' },
                    maxWidth: { xs: '250px' },
                    minHeight: '150px',
                    height: 'auto'
                }}
            />
            {screenMoreThanSmall ? <Holder /> : null}
            {screenMoreThanSmall ? <Holder topHolder={false} /> : null}

        </Box>
    )
}

export default AvatarCustom
