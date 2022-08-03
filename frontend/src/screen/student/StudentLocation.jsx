import {useState} from 'react'
import { Grid, Typography, Button,Card } from "@mui/material";
import axios from 'axios'
import Sidebar from "../../components/student/sidebar";
import { applyMiddleware } from 'redux';
const StudentLocation = () => {

  const [coordinates, setCoordinates] = useState([]);

  const getLocation = async () => {

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setCoordinates([
        ...coordinates,
        position.coords.longitude,
        position.coords.latitude,
      ]);
    });
  };

const submitLocation=()=>{
  let user=localStorage.getItem('user')
   user=JSON.parse(user)
  console.log(user.token)
  const config={
    headers:{
      authorization:`Bearer ${user.token}`
    }
  }
 
  let {data}=axios.post('/api/student/location',{coordinates},config)
}

  return (
    <Grid container>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={9} style={{display:'flex' ,alignItems:'center'}}>
     <Card style={{width:'400px', marginTop:'1rem' }}>
   
        <Button onClick={()=>getLocation()} variant="contained"  >View your Location</Button>
        

{coordinates && <Typography> Latitude :{coordinates[1]}</Typography>}
 {coordinates &&     <Typography> Longitude :{coordinates[0]}</Typography>}
 {coordinates && <Button onClick={()=>submitLocation()}>Update your Location</Button>}
  
         
   
        </Card>
      </Grid>
    </Grid>
  );
};
export default StudentLocation;
