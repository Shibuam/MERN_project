import { useEffect, useState } from 'react';
import axios from 'axios'

import DateSelection from '../../components/bookDate'
import { Grid, Paper, Typography } from '@mui/material'

import Teacher from '../../components/student/teacherDetails'
import Sidebar from '../../components/student/sidebar'
import Video from '../../components/student/teacherVideo'
function Dashboard() {

  let user = JSON.parse(localStorage.getItem('user'))
  const [teacher, setTeacher] = useState('')


  useEffect(() => {
    let getTeacher = async () => {
      const config = {
        headers: {
          authorization: `Bearer ${user.token}`
        }
      }

      let url = '/api/student/getTeacher'
      let { data } = await axios.get(url, config)

      setTeacher(data)
    }
    getTeacher()
  }, [])

  return (
    <div >
      <Grid xs={12} md={2}>
        Select a tutor to book a free demo class
      </Grid>

      <div className='dashboardWrapper'>
        <Grid container>
        <Grid item md={2} > <Sidebar /></Grid>
          <Grid item md={3} >
            {teacher && <Teacher teacherProfileDetails={teacher} />}
          </Grid>
          <Grid item md={4} >
            <Video teacherVideo={teacher} />
            <Typography>Demo Video </Typography>
          </Grid>
          <Grid item md={3} >
            <DateSelection />
          </Grid>
         
        </Grid>
      </div>
    </div>
  )
}
export default Dashboard