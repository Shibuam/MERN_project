import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Grid, Button } from '@mui/material'

import { setDate } from '../Redux/Actions/HandleSubjectsConstantAction'

function DateSelection() {
    const today = new Date();
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    useEffect(() => {

        dispatch(setDate(value))
    }, [value])



    return (
        <div>

            <Grid item>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        orientation="landscape"
                        openTo="day"
                        value={value}

                        shouldDisableDate={isWeekend}
                        minDate={today}
                        onChange={(newValue) => {
                            setValue(new Date(newValue));
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />

                </LocalizationProvider>
            </Grid>
        </div>
    )
}
export default DateSelection