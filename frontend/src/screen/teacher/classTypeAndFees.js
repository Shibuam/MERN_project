import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

import { Grid, Paper, Typography, Checkbox, TextField, Button } from '@mui/material'
import {setClassTypeTeacher} from '../../Redux/Actions/HandleSubjectsConstantAction'
import { useDispatch,useSelector } from 'react-redux';
const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};

function ClassType() {
    const dispatch=useDispatch()
    
    const navigate = useNavigate()
    const[empty,setEmty]=useState('')
    const paperStyle = { padding: 20, height: 'auto', width: 'auto', margin: ' auto' }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   



    const subject = useSelector((state) => { return state.subject })

    const onSubmit = (data) => {
        console.log(data)
        dispatch(setClassTypeTeacher(data))
    
        navigate('/teacherCourse')
       

        }
    
    return (

        <div style={styles.paperContainer} >
            <Grid container  display={'flex'} justifyContent={'center'} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid item align='center'>
                            <Typography variant="h5" color={'white'} style={{background:'rgb(84,214,158)'}} >You are just  a few steps away from contacting students </Typography>
                            <Typography>How would you like to conduct your class?</Typography>
                            <p style={{color:'red'}}>     {errors.fees&& <span>*Fees Required</span>}</p> 
                        </Grid>

                        <Typography >
                       
        
            
                             <Checkbox 
                                   name="selectCheckbox"
                                   id="selectCheckbox"
                                   {...register('OnlineVideoCall')}
                             />
                            I can teach live online using video call</Typography> 
                        <Typography>
                            <Checkbox
                        
                            name="selectCheckbox"
                            id="selectCheckbox"
                            {...register('TeachAtHome')}
                             />
                             I can teach at Home
                        </Typography>
                        <Typography>
                            <Checkbox 
                                  name="selectCheckbox"
                                  id="selectCheckbox"
                                  {...register('TeachAtStudentsHome')}
                            />
                            I can teach at Student's Home
                        </Typography>
                        <Typography>
                            <Checkbox 
                                   name="selectCheckbox"
                                   id="selectCheckbox"
                                   {...register('TeachAtMyinstitute')}
                            />
                            I can teach at my institute
                        </Typography>
                        <Grid item spacing={'2'}>
                            <Typography>How do  you charge per Hour?

                                <TextField   label="Enter Price" variant="standard"  {...register('fees', {required: true} )} />
                            </Typography>
                      
                        </Grid>
                        <Grid item align="center" sx={{ marginTop: '8px' }}>
                            <Button type='submit' variant="contained">Next</Button>
                        </Grid>
                    </Paper>
                </form>
            </Grid>
        </div>
    )
}
export default ClassType