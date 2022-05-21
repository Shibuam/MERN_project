import { Grid, Typography, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Button } from '@mui/material'
import { SidebarTeacher } from '../../components/teacher/sidebar-teacher'



function Calendar() {

    let user = JSON.parse(localStorage.getItem('user'))
    const [userDetails, setUserDetails] = useState('')
    const [student, setStudent] = useState('')
    const [stdHandler, setStdHandler] = useState(false)

    useEffect(() => {
        const teacherInfo = async () => {
            const config = {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            }

            let { data } = await axios.get(`/api/teacher/teacherDetails`, config)

            setUserDetails(data)
        }
        teacherInfo()
    }, [])

    const StudentHandler = async (studentId) => {

        const config = {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        }
        let { data } = await axios.get(`/api/teacher/student_details/${studentId}`, config)


        setStudent(data)
        setStdHandler(true)
    }
    student && console.log(student, 'student')


    userDetails && console.log(userDetails.teacherDetails.booked_date[0].student, "user Details")

    return (
        <>
            <Grid container >
                <Grid item xs={12} md={2}>
                    <SidebarTeacher />
                </Grid>



                {userDetails && userDetails.teacherDetails.booked_date.map((studentEl) =>
                    <>
                        <Grid item xs={12} md={4} margin={'20px'} alignContent={'center'}>
                            <Paper>

                                <Typography display={'flex'} alignItems={'center'} style={{ backgroundColor: 'rgb(42,124,99)', color:'white'}}> Booked Date</Typography>
                                <p>{studentEl.date}</p>
                                <Button value={studentEl.student} onClick={(e) => StudentHandler(e.target.value)}>Get Student Details</Button>

                            </Paper>
                        </Grid>
                        {stdHandler &&
                            < Grid item xs={12} md={4} margin={'20px'} alignItems={'center'}>
                        <Paper>
                            <Typography style={{ backgroundColor: 'rgb(42,124,99)', color:'white' }} >Student Details</Typography> <br />


                       
                                <>
                                    <Typography>Name:   {student.studentDetails.name}</Typography>
                                    <Typography>Email:  {student.studentDetails.email}</Typography>
                                    <Typography>ContactNumber:  {student.studentDetails.contactNumber}</Typography>

                                    <Typography>Location:   {student.studentDetails.location}</Typography>
                                    <Typography>Subject:    {student.studentDetails.courseType}</Typography>
                                    <Typography>Joining type:   {student.studentDetails.trainingType}</Typography>
                                </>
                                
                            
                        </Paper>
                    </Grid>
}

            </>
                )}

        </Grid>
        </>
    )
}
export default Calendar