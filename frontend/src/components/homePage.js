import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid,item} from "@mui/material"
import products from '../products/products';



function Home() {
  return (
    <div>
   
        <Grid container  >  
          <Grid item xs={12} lg={12} sm={12}>
           < img style={{ width: '100%', height: '80vh' }} src="1-headsets-for-elementary_1.webp" ></img>
         <Typography style={{display:'flex',justifyContent:'center',m:'10px'}}> Explore Categories</Typography>
          </Grid>
        </Grid>
  
  <Grid container >
      {
        products.map((obj)=>{
          return(
            
              <Grid item sm={12} md={6} lg={3} >
              
              <Grid item xs={8}>
   
    <div>
              <img src={obj.image} />
              <h3>{obj.name}</h3>
            </div>
    
  </Grid>
           
            
    </Grid>

          )
        })
      }
  </Grid>
  </div>
  )
}
export default Home