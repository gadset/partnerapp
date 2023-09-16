import React from 'react';
import Grid  from '@mui/material/Grid';
import { TextField} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import './OrderEntry.css'

const OrderEntryAutocomplete = ({value, setValue, options}) => {

    return(
        <Grid>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                blurOnSelect
                sx={{
                    '& .MuiOutlinedInput-root': {
                      padding: 0,
                    },
                    '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                        textIndent: '8px',
                        fontSize: '12px',
                        fontWeight: 300,
                        fontFamily: 'Work Sans',
                    },
                    '& .css-eo80hn-MuiAutocomplete-root .MuiOutlinedInput-root': {
                        border: '1px solid #B7B7B7',
                    },
                    '& .css-eo80hn-MuiAutocomplete-root .MuiOutlinedInput-root.Mui-focused': {
                        border: '1px solid #B7B7B7',
                    },
                    margin: '3px 0',
                    height: '30px',
                    backgroundColor: '#F4F4F4',
                  }}
                id='selectLocation'
                options={options}
                renderInput={(params => <TextField sx={{border: '0px solid #B7B7B7' ,height: '32px', borderRadius: '5px', backgroundColor: '#F4F4F4'}} InputProps={{sx:{fontSize: '12px', textIndent: '10px'}}} {...params} placeholder='select'   />)}
            />
        </Grid>
    )
}

export default OrderEntryAutocomplete;