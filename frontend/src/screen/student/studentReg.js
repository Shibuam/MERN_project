import { Grid,Paper, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Card, CardContent, Box } from "@mui/material"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate} from "react-router-dom"
import { height, margin, padding } from "@mui/system"
import { useDispatch,useSelector} from "react-redux"

import {studentDetails} from '../../Redux/Actions/HandleSubjectsConstantAction'

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,
     
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};
function StudentSignUpForm () {
   
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const paperStyle = { padding: 20,  width: 450, margin: ' auto' }

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit=async  (data) => {
console.log(data.contactNumber,"contact Number")
dispatch(studentDetails(data))
 
const url = '/api/student/otpVerification'
      
 let contactNumber= data.contactNumber  
    
let resp = await axios.post(url, {contactNumber})


navigate('/otpverification')


    }


    return (
        <div style={styles.paperContainer}  >

            <Card style={{ minwidth: 100, maxWidth: 600, margin: 'auto' }}>
                <Typography align="center" mt={3}>You are almost done</Typography>

                <CardContent >
                <form onSubmit={handleSubmit(onSubmit)}>
                        <Box  sx={{ borderRadius: 2, bgcolor: 'background.paper' }}>
                     <Paper  > 
                            <Grid container spacing={2}>


                                <Grid xs={12} lg={6} item align="center" spacing={1} >
                                    <TextField  onChange={(e)=>{}} fullwidth variant="outlined" label="Enter your full name" {...register("name", { required: "name is required" })}
                                      
                            
                                    />
                                    <br />

                                 <p style={{color:'red'}}>  {errors?.name && errors.name.message}</p>
                                </Grid>
                                <Grid xs={12} lg={6} item align="center" spacing={1}>
                                    <TextField label="Enter your email"  {...register('email', { required: "email is required" })}
                             
                            
                                     />
                                    <br />
                                <p style={{color:'red'}}>      {errors?.email && errors.email.message}</p>
                                </Grid>
                                <Grid xs={12} lg={6} item align="center" spacing={1} >
                                    <TextField label="Enter your contact number" {...register('contactNumber', { required: "Contact Number is required" })} 
                               
                         
                                     /><br />
                              <p style={{color:'red'}}>        {errors?.contactNumber && errors.contactNumber.message}</p>
                                </Grid>
                            

                             


                                <Grid item xs={12} lg={6} align="center" spacing={1} >
                                    <TextField label="Enter your password" {...register('password', { required: "Password is required" })}
                                
                                  
                                    /><br />
                                   <p style={{color:'red'}}>   {errors?.password && errors.password.message} </p>
                                </Grid>
                                <Grid item xs={12} align="center" spacing={1} >
                                    <Button type="submit"  variant="contained" >Submit</Button>
                                </Grid>
                            </Grid>
                            </Paper> 
                        </Box>
                    </form>

                </CardContent>
            </Card>
        </div>
    )
}
export default StudentSignUpForm