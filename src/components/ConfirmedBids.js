

import React from 'react';
import styled from '@emotion/styled';
import { Button, Grid, Typography, Box } from '@mui/material';
import ConfirmedBidsBox from './ConfirmedBidsBox';


function ConfirmedBids() {

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', bid: 7500,},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', bid: 4500,},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', bid: 6500,},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', bid: 10000,},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', bid: 12000,}
    ]

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
                    Bid Confirmed by the Customer
                </Typography>
            </Grid>
            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '0'}} >
                {dataNewBids.map((data, index) => (
                    // <Link to='/'>
                        <ConfirmedBidsBox key={index} textDecorationNone={true}  phone={data.phone} issue={data.issue} bid={data.bid} date={data.biddate}/>
                    // </Link>
                ))}
            </Grid>

        </Box>
    )
}

export default ConfirmedBids;