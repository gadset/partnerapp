import React from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CancelledBidsBox from './CalcelledBidsBox';



function CancelledBids() {

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', biddate : '2023-08-27T00:00:00'},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', biddate : '2023-08-27T00:00:00'},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', biddate : '2023-08-28T00:00:00'},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', biddate : '2023-08-29T00:00:00'},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', biddate : '2023-08-30T00:00:00'}
    ];

    return(
        <Box style={{display: 'flex', flexDirection: 'column', padding: '10px 30px', backgroundColor: '#FFFFFF'}}>
            <Grid item sx={{padding: 0, margin: '10px 0 5px 0'}}>
                <Typography
                    fontFamily='Work Sans'
                    fontSize='16px'
                    fontWeight= '400'
                    lineHeight='18.77px'
                    textAlign='left'
                >
                    Cancelled bid
                </Typography>
            </Grid>
            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '0'}}>
                {dataNewBids.map((data,index) => (
                    <CancelledBidsBox key={index} phone={data.phone} issue={data.issue} bidEnd={data.biddate} />
                ))}

            </Grid>
        </Box>
    )
}

export default CancelledBids;