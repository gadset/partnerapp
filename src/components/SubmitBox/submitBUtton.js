

import React from 'react'
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom'

const SubmitButtom = styled(Button) `
    text-transform: none;
    background-color: #505050;
    color: #FFFFFF;
    border: 1px solid #C5C5C5;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    font-family: Work Sans;
    padding: 6px 20px;

`

const submitButton = ({buttonClick}) => {
  return (
    <Box sx={{padding: '20px' , height: 200, display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '5px'}}>
        <Grid container  style={{display: 'flex', flexDirection: 'row', padding: 0,}}>
            <Grid container xs = {12} style={{display: 'flex', flexDirection: 'row'}}>
                <Grid xs={8} item style={{padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontWeight='400'
                        fontSize='16px'
                        color='#333333'
                        textAlign='left'
                        lineHeight='1'
                    >
                        Your bid has been successfully submitted sit back and wait for the confirmation from the customer
                    </Typography>
                </Grid>
                <Grid item xs ={4} style={{padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <IconButton
                        color='#B7B7B7'
                    >
                        <CheckCircleOutlineRoundedIcon style={{height: '80px', width: '80px'}} />
                    </IconButton>
                </Grid>
            </Grid>
            <Link to='/' style={{textDecoration: 'none'}}>
                <SubmitButtom onClick={buttonClick} sx={{'&:hover': {backgroundColor: '#505050'} }} variant='contained'>Back</SubmitButtom>
            </Link>
        </Grid>
    </Box>
  )
}

export default submitButton