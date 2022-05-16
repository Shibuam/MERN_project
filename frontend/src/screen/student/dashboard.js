import { useEffect, useState } from 'react';
import axios from 'axios'

import DateSelection from '../../components/bookDate'
import { Grid, Paper, Typography } from '@mui/material'

import Teacher from '../../components/student/teacherDetails'
import Sidebar from '../../components/student/sidebar'
import Video from  '../../components/student/teacherVideo'
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

      await setTeacher(data)
    }
    getTeacher()
  }, [])


  return (
    <Grid container spacing={2} >


      <Grid item xs={12}>
        Select a tutor to book a free demo class
      </Grid>

      <Grid item xs={12} md={2}>
        <Paper style={{ minHeight: "500px" }}>
          <Sidebar />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={6}>
        <Teacher teacherProfileDetails={teacher} />

      </Grid>
      <Grid item xs={12} md={4} lg={6} alignContent={'center'} display={'flext'} justifyContent={'center'} >
<Video teacherVideo={teacher}/>
<Typography>Demonstration Video </Typography>
        <DateSelection />
      </Grid>

    </Grid>
  )
}
export default Dashboard