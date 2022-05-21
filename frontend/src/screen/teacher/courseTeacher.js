import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Paper, FormControl, Button, Radio, FormControlLabel, FormLabel, RadioGroup, Typography, Checkbox } from "@mui/material";

import {setTeacherCourses} from '../../Redux/Actions/HandleSubjectsConstantAction'

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
 const dispatch=useDispatch()


 


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const paperStyle = { padding: 20, height: 'auto', width: 400, margin: ' auto' }
  
    const onSubmit=(data)=>{
        console.log(data)
        dispatch(setTeacherCourses(data))
        navigate('/onetimeFee')
    }

    return (
        <div style={styles.paperContainer} >
            <Grid container spacing={2} >

                <Paper elevation={10} style={paperStyle}>

              <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid item align='center' >
                        <Typography variant='h5' style={{background:'rgb(84,214,158)',color:'white'}}>Which course you teach?</Typography>
                        </Grid>
                     
                            
                         <Typography>  <Checkbox   
                            name="selectCheckbox"
                            id="selectCheckbox"
                            {...register('PscClass')}
                         />
                         Psc class</Typography> 
                         <Typography>  <Checkbox   
                                name="selectCheckbox"
                                id="selectCheckbox"
                                {...register('School')}
                        />
                         School</Typography> 
                        
                         <Typography>  <Checkbox  name="selectCheckbox"
                                id="selectCheckbox"
                                {...register('Yoga')}
                          />
                           Yoga class</Typography> 
                         <Typography>  <Checkbox  
                         name="selectCheckbox"
                         id="selectCheckbox"
                         {...register('cooking')} 
                         />
                         Cooking class</Typography> 
                         <Typography>  <Checkbox   
                         name="selectCheckbox"
                         id="selectCheckbox"
                         {...register('keyboard')}
                         />
                         Keyboard class</Typography> 
                         <Typography>  <Checkbox   
                         name="selectCheckbox"
                         id="selectCheckbox"
                         {...register('drawing')}
                         />
                         Drawing class</Typography> 
                         <Typography>  <Checkbox   
                         name="selectCheckbox"
                         id="selectCheckbox"
                         {...register('guitar')}
                         />
                         Guitar class</Typography> 

                        
                      <Grid item align='center'>
                        <Button type='submit'  variant="contained"  >Next</Button>
                        </Grid>
                   </form>
                </Paper >


            </Grid >

        </div >
    )
}
export default CourseTeacher