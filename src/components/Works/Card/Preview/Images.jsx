/* eslint-disable jsx-a11y/label-has-associated-control */
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import './images.css'

const Images = ({ pictures }) => (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {pictures.map((p, i) => (
                <Grid item xs={12} key={i}>
                    <Box className="container">
                        <input type="checkbox" id="zoomCheck" />
                        <label htmlFor="zoomCheck">
                            <img src={p.img} alt={p.title} loading="lazy" />
                        </label>
                    </Box>

                </Grid>
            ))}
        </Grid>
    </Box>
)

export default Images
