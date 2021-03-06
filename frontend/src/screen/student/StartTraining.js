import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Paper, FormControl, Button, Radio, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";

import { setTrainingType } from '../../Redux/Actions/HandleSubjectsConstantAction'
const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
};
function StartTraining() {

    const [training, setTraining] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const paperStyle = { padding: 20, height: 'auto', width: 400, margin: ' auto' }

    const trainingTpe = useSelector((state) => { return state.trainingType })
    console.log(trainingTpe)
    const submit = (data) => {
        if (training) {
            dispatch(setTrainingType(training))
            navigate('/studentReg')
        }
    }
    return (
        <div style={styles.paperContainer} >
            <Grid container spacing={2} >

                <Paper elevation={10} style={paperStyle}>

                    <Grid item xs={12} spacing={'2'} align="center">
                    </Grid>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">When do you plan to start training?</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={(e) => { setTraining(e.target.value) }}
                        >
                            <FormControlLabel value="immediate" control={<Radio />} label="Immediatly" />
                            <FormControlLabel value="later" control={<Radio />} label="Not sure,just want to look at options" />
                            <FormControlLabel value="within_a_month" control={<Radio />} label="Within a month" />

                        </RadioGroup>
                        <Button type='submit' onClick={submit} variant="contained" >Next</Button>
                    </FormControl>
                </Paper >


            </Grid >

        </div >
    )
}
export default StartTraining