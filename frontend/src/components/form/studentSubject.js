import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};
function StudentSubject() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

 const onSubmit = (data) => console.log(data);

    const paperStyle = { padding: 20, height: '30vh', width: 360, margin: ' auto' }

    return (

        <div style={styles.paperContainer} >
            <Grid container spacing={2} >

                <Paper elevation={10} style={paperStyle}>

                    <Grid item xs={12} spacing={'2'} align="center">
                        <Typography style={{backgroundColor:'54D69E'}}>What do you want to learn?</Typography>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid item xs={12} spacing={2} align="center" >
                            <TextField label="eg:English,Mathematics" {...register("exampleRequired", { required: true })} ></TextField><br />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </Grid>

                        <Grid sx={{marginTop:"10px"}} item xs={12} align="center">
                            <Button  type='submit' variant="contained" >Find</Button>
                        </Grid>
                    </form>
                </Paper >


            </Grid >

        </div >
    )
}
export default StudentSubject