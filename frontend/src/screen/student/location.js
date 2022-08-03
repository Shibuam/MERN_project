import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setLocation } from "../../Redux/Actions/HandleSubjectsConstantAction";

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};

function Location() {

    const [coordinates,setCoordinates]=useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useSelector((state) => { return state.location })
    console.log("from redux",location)
    // const {loading, payload,err} =location


    //console.log(location,"useSelectoruseSelectoruseSelectoruseSelectoruseSelectoruseSelector");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const paperStyle = { padding: 20, width: 360, margin: ' auto' }

    const Submit = () => {
        
        console.log()
        dispatch(setLocation(coordinates))
        navigate('/attendClass')
    }


    const getLocation=async()=>{
alert("reached")
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setCoordinates([...coordinates,position.coords.longitude,position.coords.latitude])
          
          });

        }
    return (
        <div style={styles.paperContainer} >
            <Grid container  >

                <Paper elevation={10} style={paperStyle}>

                    <Grid item xs={12} spacing={'2'} align="center">
                        <Typography style={{ backgroundColor: '54D69E' }}>What is your location?</Typography>
                    </Grid>
                    <Grid sx={{ marginTop: "10px" }} item xs={12} align="center">
                            <Button onClick={()=>getLocation()} variant="contained" >View your Location</Button>
                        </Grid>
                        <Grid item xs={12} spacing={2} align="center" >
                            <TextField label="co ordinates" value={coordinates} ></TextField><br />
                          
                        </Grid>
                      
                        <Button onClick={()=>Submit()} variant="contained" >Submit  Location</Button>

                      
          
                </Paper >


            </Grid >

        </div >
    )
}
export default Location