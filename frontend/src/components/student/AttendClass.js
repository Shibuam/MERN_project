import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Paper, FormControl,Button,Radio,FormControlLabel,FormLabel, RadioGroup } from "@mui/material";

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};
function AttendClass(){
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const paperStyle = { padding: 20, height: '30vh', width: 400, margin: ' auto' }
    const onSubmit = (data) => {
        console.log(data['exampleRequired']);
    }
    return(
        <div style={styles.paperContainer} >
        <Grid container spacing={2} >

            <Paper elevation={10} style={paperStyle}>

                <Grid item xs={12} spacing={'2'} align="center">
                </Grid>
                <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">How would you like to attend your class?</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="online" control={<Radio />} label="I want Live Interactive online classes from Tutors" />
    <FormControlLabel value="student's_home" control={<Radio />} label="Tutor should travel to my home" />
    <FormControlLabel value="teacher's_home" control={<Radio />} label="I can travel to the tutor's home" />
  </RadioGroup>
  <Button type='submit' onClick={()=>{navigate('/course')}} variant="contained" >Next</Button>
</FormControl>
            </Paper >


        </Grid >

    </div >
    )
}
export default AttendClass