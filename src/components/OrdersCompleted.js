import React from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import OrdersCompletedBox from './OrdersCompletedBox';


function OrdersCompleted() {

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', delivery: 'Not deliveried'},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', delivery: 'deliveried'},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', delivery: 'Not deliveried'},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', delivery: 'deliveried'},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', delivery: 'Not deliveried'}
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
                    Order Completed
                </Typography>
            </Grid>
            <Grid>
                {dataNewBids.map((data,index) => (
                    <OrdersCompletedBox key={index} phone={data.phone} issue={data.issue} delivery={data.delivery} />
                ))}
            </Grid>
        </Box>
    )
}

export default OrdersCompleted;