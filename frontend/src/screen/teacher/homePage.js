import { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'
import {SidebarTeacher} from '../../components/teacher/sidebar-teacher'
import {Topbar} from '../../components/teacher/sidebar-teacher'

function TeacherDashboard() {

  let user = JSON.parse(localStorage.getItem('user'))
  const [imagecloud, setimagecloud] = useState([])
  const [getFunction] = useState()

  useEffect(() => {
    const teacherInfo = async () => {
        const config = {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        }

        let { data } = await axios.get(`/api/teacher/teacherDetails`, config)
        setimagecloud(data.teacherDetails.image)
        setUserDetails(data)
    }
    teacherInfo()
}, [])
  return (
    <div>
      {/* {
        imagecloud.map((image) =>
          <img style={{height: '320px'}}src={image}></img>)
      } */}
      <Grid container>
        <Grid item xs={12} md={2}>
          <SidebarTeacher />
        </Grid>
        <Grid item xs={12} md={10}>
         <Topbar/>
        </Grid>
      </Grid>
    </div>

  )
}
export default TeacherDashboard
