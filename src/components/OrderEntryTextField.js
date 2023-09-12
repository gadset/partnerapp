import React from 'react';
import Grid  from '@mui/material/Grid';
import { TextField} from '@mui/material';
import './OrderEntry.css';

const OrderEntryTextField = ({value, setValue}) => {
    return(
        <Grid item sx={{margin: '3px 0'}}>
            <TextField className='txtfield' value={value} onChange={(e) => setValue(e.target.value)} sx={{width: '100%', backgroundColor: '#F4F4F4'}} InputProps={{ style:{height: '30px',fontSize: '12px', fontWeight: 300, fontFamily: 'Work Sans' ,'&:hover': {border: '1px solid #F4F4F4'} , '&:focus': {border: '1px solid #F4F4F4'}}}} placeholder='First Name'/>
        </Grid>
    )
}

export default OrderEntryTextField;