import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, item, Card } from "@mui/material"
import products from '../products/products';



function Home() {
  return (
    <div>
      <Grid container>
       
          < img style={{ width: '100%', height: '80vh' }} src="1-headsets-for-elementary_1.webp" ></img>
     
      </Grid>
      <Grid item display={'flex'} xs={'12'} justifyContent={'center'} >

          <Typography variant='h5'> Explore Categories</Typography>
      </Grid>

      <Grid container >
        {
          products.map((obj) => {
            return (

              <Grid item xs={12} sm={6} md={4} lg={3} spacing={'3'} display={'flex'} textAlign={'center'} >

            

                  <Card sx={{ maxWidth: 345 }}>
                    <img src={obj.image} />
                    <h3>{obj.name}</h3>
                  </Card>

          


              </Grid>

            )
          })
        }
      </Grid>
    </div>
  )
}
export default Home