import {useNavigate } from 'react-router-dom'

import { Container, Grid, Typography, Paper } from "@mui/material"
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, maxWidth } from "@mui/system";

const styles = {
  paperContainer: {
    height: 550,
    backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,
    backgroundSize: 'cover'
  }
};
function Register() {
  const navigate = useNavigate()
  return (
    <div style={styles.paperContainer}>
      
      <Typography variant="h3" style={{display:'flex',justifyContent:'center'}}>What are you looking for?</Typography>
      <Grid container style={{display:'flex',justifyContent:'space-evenly'}}>
      
        <Grid item xs={12} md={3} lg={3}>
          <Paper>
         
          <Card >
            <CardMedia
              component="img"
              height="140"
              image="Student_image.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Student
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am Looking for Teacher
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=>navigate('/studentSubject')} variant="contained" sx={{ m: 1 }}>POST YOUR REQUIREMENT</Button>
            </CardActions>
          </Card>
          </Paper>
        </Grid>
       
          <Grid item xs={12} md={3} lg={3}>
            <Paper>
     
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="Teacher_image.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Teacher
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I am Looking for student
                </Typography>
              </CardContent>
              <CardActions>
                <Button  onClick={()=>navigate('/tutorSignUpForm')} variant="contained" sx={{ m: 1 }}>CREATE YOUR PROFILE</Button>
              </CardActions>
            </Card>
        </Paper>
          </Grid>
      </Grid>
    </div>
  )
}
export default Register