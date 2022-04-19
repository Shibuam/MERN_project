import { Typography, Grid, TextField, Button, Paper } from "@mui/material"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styles = {
    paperContainer: {

        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,
        backgroundSize:'cover',
        height:'70vh'
    }
};


function OtpVerification() {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const url = '/api/otpConform'
        const teacher = window.localStorage.getItem('teacherInfo')
        let teacherData = JSON.parse(teacher)
    
    
        let resp = await axios.post(url, { data, teacherData })
      console.log(resp)
        localStorage.removeItem('teacherInfo');
      
         if(resp.data.alredy_exist){
            console.log("Teacher already exist")
            navigate('/login')
        }
        else if(resp.data.invalid_otp){
                console.log("invalid otp")
        }
    
   else {
        localStorage.setItem("Teacher", JSON.stringify(resp))
        navigate("/teacherProfile")
        }
    }
    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '25px 0' }
    const paperStyle = { padding: 20, height: '30vh', width: 260, margin: '20px auto' }
    return (
        <div style={styles.paperContainer}>
            
            <Grid container style={{display:'flex',justifyContent:'center'}}>

<Grid item alignContent={'center'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <Paper elevation={10} style={paperStyle}>
                        <Grid><center>
                            <Typography align="center" >You are almost done</Typography>
                            <TextField id="outlined-basic" label="Enter the OTP" variant="outlined" {...register("OTP", { required: true,minLength:6})} /><br />
                 {errors.OTP && <span style={{color:'red'}}> Six digit OTP required</span>}  <br />
                            <Button type='submit' variant="contained">Verify</Button>
                        </center></Grid>
                    </Paper>

                </form>

                </Grid>
            </Grid>
        
        </div>
    )
}
export default OtpVerification