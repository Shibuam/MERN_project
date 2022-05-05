import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Grid, Paper, Typography, Checkbox, TextField, Button } from '@mui/material'
const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};

function ClassType() {
    const navigate = useNavigate()
    const paperStyle = { padding: 20, height: 'auto', width: 'auto', margin: ' auto' }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div style={styles.paperContainer} >
            <Grid container  >
                <form onSubmit={handleSubmit(onSubmit)}>
                                   <Paper elevation={10} style={paperStyle}>
                    <Grid item align='center'>
                        <Typography variant="h5" color={'red'} >You are just  a few steps away from contacting students </Typography>
                        <Typography>How would you like to conduct your class?</Typography>
                    </Grid>
                    
                    <Typography> I can teach live online using video call
                        <Checkbox defaultChecked /></Typography>
                    <Typography>I can teach at Home
                        <Checkbox></Checkbox>
                    </Typography>
                    <Typography>I can teach at Student's Home
                        <Checkbox></Checkbox>
                    </Typography>
                    <Typography>I can teach at my institute
                        <Checkbox></Checkbox>
                    </Typography>
                    <Grid item  spacing={'2'}>
                    <Typography>How do  you charge per Hour?
                      
                        <TextField id="outlined-basic" label="Enter Price" variant="outlined" />
                    </Typography>
                        </Grid>
                    <Grid item align="center" sx={{marginTop:'8px'}}>
                        <Button type='submit' variant="contained">Next</Button>
                    </Grid>
                </Paper>
                </form>
            </Grid>
        </div>
    )
}
export default ClassType