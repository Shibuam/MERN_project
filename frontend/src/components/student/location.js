import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setLocation } from "../../Redux/Actions/HandleSubjectsConstantAction";

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};

function Location(){
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const location = useSelector((state)=>{return state.location})

    const {loading, payload,err} =location


    console.log(location,"useSelectoruseSelectoruseSelectoruseSelectoruseSelectoruseSelector");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const paperStyle = { padding: 20, height: '30vh', width: 360, margin: ' auto' }
    const onSubmit = (data) => {
        console.log(data['exampleRequired']);
        dispatch(setLocation(data['exampleRequired']))
    }
    return(
        <div style={styles.paperContainer} >
        <Grid container spacing={2} >

            <Paper elevation={10} style={paperStyle}>

                <Grid item xs={12} spacing={'2'} align="center">
                    <Typography style={{ backgroundColor: '54D69E' }}>What is your location?</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid item xs={12} spacing={2} align="center" >
                        <TextField label="eg:Kannur" {...register("exampleRequired", { required: true })} ></TextField><br />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </Grid>

                    <Grid sx={{ marginTop: "10px" }} item xs={12} align="center">
                        <Button type='submit' variant="contained" >Next</Button>
                    </Grid>
                </form>
            </Paper >


        </Grid >

    </div >
    )
}
export default Location