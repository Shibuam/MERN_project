import { Grid,Paper, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Card, CardContent, Box } from "@mui/material"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { height, margin, padding } from "@mui/system"



const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,
     
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};
function TutorSignUpForm() {
    const navigate = useNavigate()
    const paperStyle = { padding: 20,  width: 450, margin: ' auto' }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [change, setChange] = useState({})

    const [teacher, setTeacher] = useState({
        name: "",
        email: "",
        contactNumber: null,
        subject: "",
        pincode: null,

        password: null,
        teacher: true
    })

    const submitForm = async () => {


        const url = '/api/Otpverification'
        const { data } = await axios.post(url, teacher)
        console.log(data);
        localStorage.setItem('teacherInfo', JSON.stringify(teacher))


        navigate('/otpverification')


    }


    return (
        <div style={styles.paperContainer}  >

            <Card style={{ minwidth: 100, maxWidth: 600, margin: 'auto' }}>
                <Typography align="center" mt={3}>SIGN UP AS TEACHER</Typography>

                <CardContent >
                    <form onSubmit={handleSubmit(submitForm)}>
                        <Box  sx={{ borderRadius: 2, bgcolor: 'background.paper' }}>
                     <Paper  > 
                            <Grid container spacing={2}>


                                <Grid xs={12} lg={6} item align="center" spacing={1} >
                                    <TextField fullwidth variant="outlined" label="Enter your full name" {...register('name', { required: "name is required" })}
                                        value={teacher.name} onChange={(event) => {
                                            setTeacher({ ...teacher, name: event.target.value })
                                        }}
                                    />
                                    <br />

                                 <p style={{color:'red'}}>  {errors?.name && errors.name.message}</p>
                                </Grid>
                                <Grid xs={12} lg={6} item align="center" spacing={1}>
                                    <TextField label="Enter your email"  {...register('email', { required: "email is required" })} value={teacher.email} onChange={(event) => {
                                        setTeacher({ ...teacher, email: event.target.value })
                                    }} /><br />
                                <p style={{color:'red'}}>      {errors?.email && errors.email.message}</p>
                                </Grid>
                                <Grid xs={12} lg={6} item align="center" spacing={1} >
                                    <TextField label="Enter your contact number" {...register('contactNumber', { required: "Contact Number is required" })} value={teacher.contactNumber} onChange={(event) => {
                                        setTeacher({ ...teacher, contactNumber: event.target.value })
                                    }} /><br />
                              <p style={{color:'red'}}>        {errors?.contactNumber && errors.contactNumber.message}</p>
                                </Grid>
                                <Grid item xs={12} lg={6} align="center" spacing={1} >
                                    <TextField label="Enter your main subject" {...register('subject', { required: "Subject is required" })}
                                        value={teacher.subject} onChange={(event) => {
                                            setTeacher({ ...teacher, subject: event.target.value })
                                        }}
                                    />
                                    <br />
                                    <p style={{color:'red'}}>    {errors?.subject && errors.subject.message}</p>
                                </Grid>
                                <Grid item xs={12} lg={6} align="center"  >
                                    <TextField label="pincode" {...register('pincode', { required: "Pin code is required" })}
                                        value={teacher.pincode} onChange={(event) => {
                                            setTeacher({ ...teacher, pincode: event.target.value })
                                        }}
                                    /><br />

<p style={{color:'red'}}>          {errors?.pincode && errors.pincode.message} </p>
                                </Grid>

                                {/* <Grid item xs={12} lg={6} align="center"  >
                                    <FormControl fullWidth >
                                        <InputLabel id="demo-simple-select-label" >Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                              value={'gender'}
                                            label="Gender"
                                        //  onChange={handleChange}
                                        >
                                            <MenuItem value={'Male'}>MALE</MenuItem>
                                            <MenuItem value={'Female'}>FEMALE</MenuItem>

                                        </Select>
                                    </FormControl><br></br>
                                </Grid> */}


                                <Grid item xs={12} lg={6} align="center" spacing={1} >
                                    <TextField label="Enter your password" {...register('password', { required: "Password is required" })}
                                        value={teacher.password} onChange={(event) => {
                                            setTeacher({ ...teacher, password: event.target.value })

                                        }}
                                    /><br />
                                   <p style={{color:'red'}}>   {errors?.password && errors.password.message} </p>
                                </Grid>
                                <Grid item xs={12} align="center" spacing={1} >
                                    <Button type="submit" variant="contained" >Submit</Button>
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
export default TutorSignUpForm