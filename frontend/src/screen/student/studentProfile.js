import * as React from 'react';

import DateSelection from '../../components/bookDate'
import { Grid } from '@mui/material'
function StudentProfile() {

  return (
    <Grid container spacing={2} >

     
      <Grid item xs={12}>
        Select a tutor to book a free demo class
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        Teacher details
</Grid>
      <Grid item xs={12} md={6} lg={6} alignContent={'center'} display={'flext'} justifyContent={'center'} >
      <iframe width="auto"  height="auto" src="https://www.youtube.com/embed/Zvw0kGjx_Xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <DateSelection/>
        </Grid>
  
    </Grid>
  )
}
export default StudentProfile