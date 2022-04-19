import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material"
import './hompage.css'
import products from '../products/products';
import Product from './product/product';

function Home() {
  return (
    <div>
   
        <Grid container  >  
          <Grid item xs={12} lg={12} sm={12}>
            <img style={{ width: '100%', height: '100vh' }} src="1-headsets-for-elementary_1.webp" ></img>
          </Grid>
        </Grid>
  
  <Grid container >
      {
        products.map((obj)=>{
          return(
            
              <Grid item sm={12} md={6} lg={3} >
            <div>
              <img src={obj.image} />
              <h3>{obj.name}</h3>
            </div>
    </Grid>

          )
        })
      }
  </Grid>
  </div>
  )
}
export default Home