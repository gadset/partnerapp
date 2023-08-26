
import styled from '@emotion/styled';
import { Button, Grid, Typography, Box } from '@mui/material';
import React from 'react';

const Image = styled('img')({
    width: 30,
    height: 30,
    borderRadius: '50%',
})

const CounterButton = styled(Button) `
    text-transform: none;
    background-color: #333333;
    color: #FFFFFF;
    border: 1px solid #C5C5C5;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
    font-family: Work Sans;
    height: 26;

`

const PersonOtherBid = () => {
    return(
        <Box container sx={{ margin: '0'}}>
            <Grid conatiner style={{display: 'flex', flexDirection: 'row', alignContent: 'center', borderRadius:'10px', border: '1px solid #000000', minHeight: '50px'}}>
                <Grid item xs={2} style={{display: 'flex',justifyContent: 'center' ,alignItems:'center'}}>
                    <Image src='photos\photo 1.jpeg' alt='Avatar' />
                </Grid>
                <Grid item xs={3} style={{display: 'flex', justifyContent: 'flex-start', alignItems:'center'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontWeight='400'
                        fontSize='16px'
                        lineHeight='18.77px'
                        color='#333333'
                    >
                        Ashok
                    </Typography>
                </Grid>
                <Grid item xs={3} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontWeight='400'
                        fontSize='16px'
                        lineHeight='18.77px'
                        color='#333333'
                        textDecorationNone
                    >
                        ₹5000
                    </Typography>
                </Grid >
                <Grid item xs={4} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <CounterButton sx={{backgroundColor: '#333333','&:hover': { backgroundColor: '#333333'}}} variant='contained'>Counter bid</CounterButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PersonOtherBid;