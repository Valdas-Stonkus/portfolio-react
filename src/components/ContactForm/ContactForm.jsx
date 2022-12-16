import {
    TextField, Input, Button, Box
} from '@mui/material'

const ContactForm = () => (

    <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' }
        }}
        autoComplete="off"
    >
        <TextField id="standard-basic" label="Email" type="email" variant="standard" />
    </Box>
)

export default ContactForm
// TODO: complete this component
