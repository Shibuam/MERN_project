import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Typography, Button } from '@mui/material'

function Teacher({ teacherProfileDetails }) {

    let user = JSON.parse(localStorage.getItem('user'))

    const [dateBooked, setDateBooked] = useState('')

    let bookedDate = useSelector((state) => state.bookedDate)
    let teacher_id = teacherProfileDetails.teacherDetails[0]._id



    const config = {
        headers: {
            authorization: `Bearer ${user.token}`
        }
    }
    const dateHandler = async () => {


        setDateBooked(bookedDate.setDate.toString())
        let { data } = await axios.post('/api/student/date_booking', { dateBooked, teacher_id }, config)
    }
    const bookingTeacherHandler = async () => {
        try {

            let { data } = await axios.post('/api/student/bookTeacher', { teacher_id }, config)
            alert(data.message)
        }
        catch (error) {
console.log(error)
            alert(error.response.data.message)
        }



    }


    return (
        <div>
            {teacherProfileDetails && teacherProfileDetails.teacherDetails.map((teacher) =>
                <>
                    <img style={{ height: '150px', display: 'flex', alignContent: 'center' }} src={teacher.image}></img>
                    <Typography>Name: {teacher.name}</Typography>
                    <Typography>email:{teacher.email}</Typography>
                    <Typography>Contact Number:{teacher.contactNumber}</Typography>
                    <Typography>Subject:{teacher.subject}</Typography>
                    {bookedDate.setDate && <Button style={{ color: 'red' }} onClick={dateHandler} >Submit Date for Demo Class</Button>}
                    {dateBooked && <Typography style={{ color: 'green' }}>Booked Date is:{bookedDate.setDate.toString()}</Typography>}
                    <Button style={{ color: 'red' }} onClick={bookingTeacherHandler}>Book Teacher</Button>
                </>
            )}
        </div>
    )
}
export default Teacher