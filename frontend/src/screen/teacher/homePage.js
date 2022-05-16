import { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'
import {SidebarTeacher} from '../../components/teacher/sidebar-teacher'
import {Topbar} from '../../components/teacher/sidebar-teacher'

// const drawerWidth = 240;
function TeacherDashboard() {
  const [imagecloud, setimagecloud] = useState([])
  const [getFunction] = useState()

  useEffect(() => {
    const getImages = async () => {
      const { data } = await axios.get('/api/teacher/TeacherProfileImage')
      setimagecloud(data)
    }

    getImages()
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
