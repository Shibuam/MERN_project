import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid,Button, Card } from "@mui/material"
import products from '../products/products';



function Home() {
  const navigate=useNavigate()
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

              <Grid item xs={12} sm={6} md={3} lg={3} spacing={'3'} display={'flex'} textAlign={'center'} margin={'30px'} >

            

                  <Card sx={{ maxWidth: 345 }}>
                    
                  <Button onClick={()=>navigate('/login')}>  <img src={obj.image} /><br/> </Button>
                 
                  
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