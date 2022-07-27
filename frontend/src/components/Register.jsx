import {useNavigate } from 'react-router-dom'

import { Container, Grid, Typography, Paper } from "@mui/material"
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, maxWidth } from "@mui/system";
import './Register.css'
// style={{ backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`}}
function Register() {
  const navigate = useNavigate()
  return (
    <Grid container  style={{ backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`}} >
      <Grid item xs={12}>
      <Typography variant="h3"  align='center'>What are you looking for?</Typography>
      </Grid>
      
        <Grid item xs={12} sm={4} margin={10} >
         
         
          <Card >
            <CardMedia
              component="img"
          
              image="Student_image.jpeg"
              alt="student image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align='center'>
                Student
              </Typography>
              <Typography variant="body2" color="text.secondary" align='center'>
                I am Looking for Teacher
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=>navigate('/studentSubject')} variant="outlined" align='center' sx={{ m: 1 }}>POST YOUR REQUIREMENT</Button>
            </CardActions>
          </Card>
         
        </Grid>
       
          <Grid item xs={12} sm={4} margin={10}>
            <Paper>
     
            <Card >
              <CardMedia
                component="img"
               
                image="Teacher_image.jpeg"
                alt="Teacher image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='center'>
                  Teacher
                </Typography>
                <Typography variant="body2" color="text.secondary" align='center'>
                  I am Looking for student
                </Typography>
              </CardContent>
              <CardActions>
                <Button  onClick={()=>navigate('/tutorSignUpForm')} variant="outlined" sx={{ m: 1 }}>CREATE YOUR PROFILE</Button>
              </CardActions>
            </Card>
        </Paper>
          </Grid>
 
    </Grid>
  )
}
export default Register