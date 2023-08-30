import React from 'react'
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import OtherBiddingBox from './OtherBiddingBox';
import PersonOtherBid from './personOtherBid';

function otherBidding() {
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
                What others bidding
            </Typography>
        </Grid>
        <OtherBiddingBox phone={'iPhone X'} issue={'Camera not working, Battery replacement'} date={'2023-08-27T00:00:00'} />

        <Grid container style={{display: 'flex', flexDirection:'column' , margin: '15px 0'}}>
            <Grid container xs={7} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding:" 5px", borderRadius: '10px 10px 0 0', border: '1px solid #000000', margin: '5px 8px 0px 8px'}}>
                <Grid item xs={6} style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        fontWeight= '400'
                        lineHeight='18.77px'
                    >
                        Name
                    </Typography>
                </Grid>
                <Grid item xs={5} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        fontWeight= '400'
                        lineHeight='18.77px'
                        marginRight='2%'
                    >
                        Bid
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
                <PersonOtherBid />
                <PersonOtherBid />
                <PersonOtherBid />
                <PersonOtherBid />
                <PersonOtherBid />
            </Grid>
        </Grid>

    </Box>
  )
}

export default otherBidding;