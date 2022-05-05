import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Paper, FormControl, Button, Radio, FormControlLabel, FormLabel, RadioGroup, Typography, Checkbox } from "@mui/material";


const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};
function CourseTeacher() {
 const navigate=useNavigate()
    const [course, setCourse] = useState()
console.log(course)
 


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const paperStyle = { padding: 20, height: 'auto', width: 400, margin: ' auto' }
    const Submit = (data) => {
        console.log(data, "reached at submit")

       
    }
    const sub=()=>{
        navigate('/onetimeFee')
    }

    return (
        <div style={styles.paperContainer} >
            <Grid container spacing={2} >

                <Paper elevation={10} style={paperStyle}>
{/* 
                    <Grid item xs={12} spacing={'2'} align="center">
                    </Grid> */}
                    <FormControl>
                        <Grid item align='center' color='red'>
                        <Typography variant='h5'>Which course do you want to learn?</Typography>
                        </Grid>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                          
                         //    onChange={(e) => { setCourse(e.target.value) }}
                        >
                            <FormControlLabel value="PSC" control={<Checkbox />}  onClick={(e) => { setCourse(e.target.value) }} label="PSC class" />
                            <FormControlLabel value="School" control={<Checkbox />}  onChange={(e) => { setCourse(e.target.value) }} label="School" />
                            <FormControlLabel value="Yoga" control={<Checkbox />} onChange={(e) => { setCourse(e.target.value) }} label="Yoga class" />
                            <FormControlLabel value="Cooking" control={<Checkbox />} onChange={(e) => { setCourse(e.target.value) }} label="Cooking class" />
                            <FormControlLabel value="Keyboard" control={<Checkbox />} onChange={(e) => { setCourse(e.target.value) }} label="Keyboard class" />
                            <FormControlLabel value="Drawing" control={<Checkbox />} onChange={(e) => { setCourse(e.target.value) }} label="Drawing class" />
                            <FormControlLabel value="Guitar" control={<Checkbox />} onChange={(e) => { setCourse(e.target.value) }} label="Guitar class" />
                        </RadioGroup>
                      <Grid item align='center'>
                        <Button  onClick={sub}  variant="contained"  >Next</Button>
                        </Grid>
                   </FormControl>
                </Paper >


            </Grid >

        </div >
    )
}
export default CourseTeacher