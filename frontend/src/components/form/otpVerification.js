import { Typography, Grid, TextField, Button, Paper } from "@mui/material"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const styles = {
    paperContainer: {

        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,
        backgroundSize:'cover',
        height:'70vh'
    }
};


 function OtpVerification() {

    const student_details= useSelector((state)=>{return state.studentDetails})
    const trainingType= useSelector((state)=>{return state.trainingType})
    const  courseType= useSelector((state)=>{return state. courseType})
    const  classType= useSelector((state)=>{return state. classType})
    const  location= useSelector((state)=>{return state. location})
    const   subject= useSelector((state)=>{return state.subject})

// console.log(trainingType,"training type")
// console.log(courseType,"courseType")
// console.log(courseType,"classType")
// console.log(location,"location")
// console.log( subject," subject")

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (otp) => {
        
        if(student_details){
         console.log("have status")
        const url = '/api/otpConform/student/student'

          let resp = await axios.post(url, {student_details,trainingType,courseType,classType,location,subject,otp})
          console.log(resp,"from backend")
           
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