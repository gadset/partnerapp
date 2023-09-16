import React from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';

const SubmitButtom = styled(Button) `
    text-transform: none;
    background-color: #505050;
    color: #FFFFFF;
    border: 1px solid #C5C5C5;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    font-family: Work Sans;
    margin: 10px 20px;
    width: 111px;
    padding: 6px 63px;
    margin: 10px auto 25px auto;

`

const CancelBidAwaiting = ({buttonClick}) => {
    return (
        <Box width='238px' margin='auto'>
            <Grid container style={{display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: '#D9D9D9', borderRadius: '5px'}} xs={12}>
                <Grid item sx={{padding: '20px 20px 3px 20px'}} xs={12}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        color='#333333'
                        lineHeight='18.78px'
                        textAlign='center'
                    >
                        Are you sure you want to cancel the bid
                    </Typography>
                </Grid>
                <SubmitButtom onClick={buttonClick} sx={{backgroundColor: '#505050', '&:hover': { backgroundColor: '#505050'},}} variant='contained'>Cancel</SubmitButtom>
            </Grid>

        </Box>
    )
}

export default CancelBidAwaiting