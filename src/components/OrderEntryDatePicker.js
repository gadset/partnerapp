import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Grid  from '@mui/material/Grid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField} from '@mui/material';

const OrderEntryDatePicker = ({value, setValue}) => {
    return(
        <Grid>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                        fontSize: '12px',
                        fontWeight: 300,
                        fontFamily: 'Work Sans',
                      outline: 'none'
                    },
                    '& .css-eo80hn-MuiAutocomplete-root .MuiOutlinedInput-root': {
                        outline: 'none'
                    },
                    '& .MuiInputBase-root.MuiOutlinedInput-root': {
                        backgroundColor: '#F4F4F4',
                        height: '30px'
                    },
                    margin: '5px 0',
                    height: '30px',
                    width: '100%',
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                    />
                )}/>
            </LocalizationProvider>
        </Grid>
    )
}

export default OrderEntryDatePicker;