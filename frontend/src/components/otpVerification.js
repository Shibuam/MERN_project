import { useState } from "react";
import { Typography, Grid, TextField, Button, Paper } from "@mui/material"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const styles = {
    paperContainer: {

        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,
        backgroundSize: 'cover',
        height: '70vh'
    }
};


function OtpVerification() {

    const student_details = useSelector((state) => { return state.studentDetails.payload })
    const { name, email, contactNumber, password } = { ...student_details }
    const trainingType = useSelector((state) => { return state.trainingType.payload })
    const courseType = useSelector((state) => { return state.courseType.payload })
    const classType = useSelector((state) => { return state.classType.payload })
    const locationPayload = useSelector((state) => { return state.location })
    const subject = useSelector((state) => { return state.subject })


    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [resp, setResp] = useState('')
    let teacherData = localStorage.getItem('teacherInfo')
    teacherData = JSON.parse(teacherData)

    const onSubmit = async (otp) => {
        let OTP = otp.OTP

        if (teacherData) {
            const url = '/api/teacher/otpConformTeacher'
            let { data } = await axios.post(url, { teacherData, otp })
            console.log(data)
            if (data.message) {
                setResp(data.message)
            }
            else if (data.teacherStatus) {
                navigate('/classType')
            }
            else if (data.invalid_otp) {
                navigate('/otpverification')
            }
        }

        if (student_details) {
            const location = locationPayload.payload
            console.log("have status")
            const url = '/api/student/otpConformStudent'

            let resp = await axios.post(url, { name, email, contactNumber, password, trainingType, courseType, location, classType, subject, OTP })
            console.log(resp, "from backend")

            if (resp.data.student) {
                navigate('/studentdashboard')
            }

            else if (resp.data.student_alredy_exist) {
                navigate('/studentReg')
            }
        }



    }

    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '25px 0' }
    const paperStyle = { padding: 20, height: 'auto', width: 260, margin: '20px auto' }
    return (
        <div style={styles.paperContainer}>

            <Grid container style={{ display: 'flex', justifyContent: 'center' }}>

                <Grid item alignContent={'center'}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Paper elevation={10} style={paperStyle}>
                            <Grid><center>
                                <Typography align="center" >You are almost done</Typography>
                                <p style={{ color: 'red' }}>{resp}</p>
                                <TextField id="outlined-basic" label="Enter the OTP" variant="outlined" {...register("OTP", { required: true, minLength: 6 })} /><br />
                                {errors.OTP && <span style={{ color: 'red' }}> Six digit OTP required</span>}  <br />
                                <Button type='submit' variant="contained">Verify</Button>

                                {resp && <Button onClick={() => navigate('/login')}>login with this account</Button>}

                                <Grid item>
                                    {resp && <Button onClick={() => navigate('/tutorSignUpForm')}>New registration</Button>}
                           </Grid>
                            </center></Grid>
                        </Paper>

                    </form>

                </Grid>
            </Grid>

        </div>
    )
}
export default OtpVerification