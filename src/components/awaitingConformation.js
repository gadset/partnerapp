import React from 'react'
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ConfirmationBox from './confirmationBox';

function awaitingConformation() {

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', bid: 7500, biddate : '2023-08-27T00:00:00'},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', bid: 4500, biddate : '2023-08-27T00:00:00'},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', bid: 6500, biddate : '2023-08-28T00:00:00'},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', bid: 10000, biddate : '2023-08-29T00:00:00'},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', bid: 12000, biddate : '2023-08-30T00:00:00'}
    ];
    

  return (
    <Box style={{display: 'flex', flexDirection: 'column', padding: '10px 30px', backgroundColor: '#FFFFFF'}}>
        <Grid item sx={{padding: 0, margin: '10px 0 5px 0'}}>
            <Typography
                fontFamily='Work Sans'
                fontSize='16px'
                fontWeight= '400'
                lineHeight='18.77px'
                textAlign='left'
            >
                Awaiting Confirmation
            </Typography>
        </Grid>
        <Grid container style={{display: 'flex', flexDirection: 'column', margin: '0'}} >
            {dataNewBids.map((data, index) => (
                // <Link to='/'>
                    <ConfirmationBox key={index} textDecorationNone={true}  phone={data.phone} issue={data.issue} bid={data.bid} date={data.biddate}/>
                // </Link>
            ))}
        </Grid>
    </Box>
  )
}

export default awaitingConformation