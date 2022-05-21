import { Grid, Box } from '@mui/material'
function Footer() {
    return (
        <div >
            <Grid container style={{ backgroundColor: 'rgb(219,234,253)', minHeight: '100' }}>
               
                    <Grid item md={3}>
                        About us
                    </Grid>
                    <Grid item md={3}>
                        Careers
                    </Grid>
                    <Grid item md={3}>
                        Terms and conditions
                    </Grid>
                    <Grid item md={3}>
                        contact Us
                    </Grid>

            
            </Grid>
        </div>
    )
}
export default Footer