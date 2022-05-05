import { useNavigate } from 'react-router-dom'
import { Grid, Typography, TextareaAutosize,Button,Paper } from '@mui/material'

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
}
function Experience() {
  const  navigate=useNavigate()
    const paperStyle = { padding: 20, height: 'auto', margin: ' auto'}

    return (
        <div style={styles.paperContainer} >
            <Paper sx={{maxWidth: '720px'}} style={paperStyle}  textAlign={'center'}>
        <Grid container display={'flex'} justifyContent={'center'}> 
            <Grid item textAlign={'center'} spacing={2} xs={'12'} style={{backgroundColor:'rgb(84,214,158)'}} >
                <Typography variant='h6'color={'white'} >CONTINUE BUILDING YOUR PROFILE</Typography>
            </Grid>
            <Grid item textAlign={'center'} xs={'12'} spacing={2}>
                <Typography variant={'h3'}  >2</Typography>
            </Grid>
            <Grid item textAlign={'center'} xs={'12'} spacing={2}>
                <Typography variant='h5' color={'blue'} >What is your background and experience</Typography>
            </Grid>
            <Grid item textAlign={'center'} xs={12}  spacing={2}>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Eg: I am a teacher/engineer/dancer..I am giving Home/Online/tuition since ....I am certified in ...I have a degree in .. . My skills are... My accomplishments .. Any other relavant details to make your profile look richer."
                    style={{width:'auto'}}
                    />
            </Grid>
            <Grid item textAlign={'center'} spacing={2} >
                <Button variant="contained" onClick={()=>navigate('/profilePicture')}>Next</Button>
            </Grid>
        </Grid>
            </Paper>
        </div>
    )
}
export default Experience