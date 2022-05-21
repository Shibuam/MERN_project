import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { TextField, Button, Grid, Paper, Avatar } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../Redux/Actions/HandleSubjectsConstantAction'

const styles = {
    paperContainer: {

        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,
        backgroundSize: 'cover',
        height: "70vh",
        padding: '3rem'
    }
};


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [mailError, setMailError] = useState('')
    const [passwordError, setPasswordError] = useState('')




    const [login, setLogin] = useState({
        email: '',
        password: ''
    })



    const { register, handleSubmit, formState: { errors } } = useForm();
    const FormSubmit = async () => {
        const { data } = await axios.post('/api/login', login)
    
         dispatch(setToken(data.token))

        console.log(data)
        
  


        if (data.teacherStatus) {


            localStorage.setItem('user', JSON.stringify(data))

            navigate('/teacherProfile')
        }
        else if (data.studentStatus) {
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/studentdashboard')
        }
       
          data.message && setMailError(data.message)
    }





    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '25px 0' }
    const paperStyle = { padding: 20, height: 'auto', width: 260, margin: ' auto' }

    return (
        <div style={styles.paperContainer}>
            <Grid >
                <form onSubmit={handleSubmit(FormSubmit)}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid><center>

                            <h2> Sign In</h2>
                            <p style={{ color: 'red' }}>   {mailError}</p>
                            <p style={{ color: 'red' }}>   {passwordError}</p>
                        </center>
                        </Grid>

                        <TextField id="standard-basic" label="Email" variant="standard" value={login.email} name="email" {...register('email', { required: "Email is required" })} onChange={(event) => setLogin({ ...login, email: event.target.value })} fullWidth />
                        <p style={{ color: 'red' }}>    {errors?.email && errors.email.message} </p>
                        <TextField id="standard-basic" label="Password" type='password' name='password' {...register('password', { required: "password is required" })} variant="standard" value={login.password} onChange={(event) => setLogin({ ...login, password: event.target.value })} fullWidth />
                        <p style={{ color: 'red' }}>       {errors?.password && errors.password.message} </p>
                        <Button type="submit" variant="contained" style={btnStyle} color="primary" fullWidth>Submit</Button>
                        Need a Registration? <Link to={'/register'}>Click Here</Link>
                    </Paper>
                </form>
            </Grid>
        </div>
    )
}
export default Login