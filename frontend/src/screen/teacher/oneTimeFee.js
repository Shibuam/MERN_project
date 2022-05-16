import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, Card, Paper, FormControl, Button, Radio, FormControlLabel, FormLabel, RadioGroup, Typography, Checkbox } from "@mui/material";
import { bgcolor } from "@mui/system";

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};
function OneTimeFees() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [fees, setFees] = useState(0)
    const paperStyle = { padding: 20, height: 'auto', margin: ' auto' }

    
    const feesHandle=(fee)=>{
setFees(fee)
navigate('/experience')
    }
    console.log(fees)

    return (
        <div style={styles.paperContainer} >
            <Paper elevation={10} style={paperStyle} sx={{ maxWidth: 'sm' }} textAlign={'center'}>
                <Grid container justifyContent={'center'}>
                    <Grid item  >
                        <Typography variant="h5" color={'red'}>Please select an option to continue</Typography><br />
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent={'center'}>

                    <Grid item sx={12} md={6} textAlign={'center'} >
                        <Paper elevation={20}>
                            <Typography color={'rgb(46,100,208)'}>&#x20b9; 0</Typography>
                            <Typography color={'red'}>One Time fee</Typography>
                            <Typography>Bring your own Students to teach Free tools for teaching for teaching online Free Online Profile with tools to promote Demo requests from students training and product support.</Typography>
                            <Button onClick={() => {
                                feesHandle(0)
                            }} variant="contained">Select</Button>
                        </Paper>
                    </Grid>
                    <Grid item sx={12} md={6} textAlign={'center'} >
                        <Paper elevation={20}>
                            <Typography color={'rgb(46,100,208)'}>&#x20b9; 500</Typography>
                            <Typography color={'red'}>One Time fee</Typography>
                            <Typography>Find students to teach all benefits of a free partner + respond to student enquiries demo requests from students rank higher among other tutors become a top tutor partner and earn more.</Typography>
                            <Button variant="contained" onClick={() => {
                                feesHandle(500)
                            }} margin={'2'}>Select</Button>
                        </Paper>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}
export default OneTimeFees