import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Images = ({ pictures }) => (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {pictures.map((p, i) => (
                <Grid item xs={6} key={i}>
                    <img
                        src={p.img}
                        srcSet={p.img}
                        alt={p.title}
                        loading="lazy"
                        width="100%"
                        height="248px"
                    />
                </Grid>
            ))}
        </Grid>
    </Box>
)

export default Images
