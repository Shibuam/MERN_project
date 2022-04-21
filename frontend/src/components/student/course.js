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
function Course(){
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const paperStyle = { padding: 20, height: 'auto', width: 400, margin: ' auto' }
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
  <FormLabel id="demo-radio-buttons-group-label">Which course do you want to learn?</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="PSC" control={<Radio />} label="PSC class" />
    <FormControlLabel value="School" control={<Radio />} label="School" />
    <FormControlLabel value="Yoga" control={<Radio />} label="Yoga class" />
    <FormControlLabel value="Cooking" control={<Radio />} label="Cooking class" />
    <FormControlLabel value="Keyboard" control={<Radio />} label="Keyboard class" />
    <FormControlLabel value="Drawing" control={<Radio />} label="Drawing class" />
    <FormControlLabel value="Guitar" control={<Radio />} label="Guitar class" />
  </RadioGroup>
  <Button type='submit' onClick={()=>{navigate('/startTraining')}} variant="contained" >Next</Button>
</FormControl>
            </Paper >


        </Grid >

    </div >
    )
}
export default Course