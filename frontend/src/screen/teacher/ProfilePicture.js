import { useState,useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography, TextareaAutosize, Button, Paper } from '@mui/material'

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
}
function ProfilePicture() {
    const navigate=useNavigate()
    const [imagecode,setImage]=useState()
    const handleCreateBase64=useCallback(async(e)=>{
        const file=e.target.files[0]
        const base64 =await  (file);
        setImage(base64)
    })

    const paperStyle = { padding: 20, height: 'auto', margin: ' auto' }

    return (
        <div style={styles.paperContainer} >
            <Paper sx={{ maxWidth: '720px' }} style={paperStyle} textAlign={'center'}>
                <Grid container display={'flex'} justifyContent={'center'}>
                    <Grid item textAlign={'center'} spacing={2} xs={'12'} style={{ backgroundColor: 'rgb(84,214,158)' }} >
                        <Typography variant='h4' color={'white'} >CONTINUE BUILDING YOUR PROFILE</Typography>
                    </Grid>
                    <Grid item variant='h2' textAlign={'center'} xs={'12'} spacing={2}>
                        <Typography  >3</Typography>
                    </Grid>
                    <Grid item textAlign={'center'} xs={'12'} spacing={2}>
                        <Typography variant='h5' color={'blue'} >Add front facing Profile Picture</Typography>
                    </Grid>
                    <Grid item textAlign={'center'} xs={'12'} spacing={2}>
                        <img src='/imagePaceHolder.png' alt="image label"></img>
                    </Grid>
                    <Grid item textAlign={'center'} xs={'12'} spacing={2}>

                        <Button variant="contained" component="label" >
                            Upload File
                            <input type="file" hidden />
                        </Button>
                    </Grid>
                    <Grid item textAlign={'center'} spacing={2} >
                        <Button variant="contained" onClick={()=>navigate('/teacherProfile')}>Next</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default ProfilePicture