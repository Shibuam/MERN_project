import { useEffect,useState } from 'react'
import axios from 'axios'
import { Typography,Button } from '@mui/material'

function Teacher({teacherProfileDetails,date}) {

console.log(teacherProfileDetails,"from componet")
teacherProfileDetails && teacherProfileDetails.teacherDetails.map((teacher) => console.log(teacher.name))

    return (
        <div>
            {teacherProfileDetails && teacherProfileDetails.teacherDetails.map((teacher) => 
            <>
         <img style={{ height: '150px', display: 'flex', alignContent: 'center' }} src={teacher.image}></img>
               <Typography>Name: {teacher.name}</Typography>
               <Typography>email:{teacher.email}</Typography>
               <Typography>contactNumber:{teacher.contactNumber}</Typography>
               <Typography>Subject:{teacher.subject}</Typography>
         <Button>Submit Date for Demo Class</Button>

             
                </>
            )} 
        </div>
    )
}
export default Teacher