import React from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import InputBase from '@mui/material/InputBase';


const SubmitButtom = styled(Button) `
    text-transform: none;
    background-color: #505050;
    color: #FFFFFF;
    border: 1px solid #C5C5C5;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    font-family: Work Sans;
    margin: 10px 20px

`


const ChangeBidAwaiting = ({buttonClick}) => {
    return (
        <Box style={{display: 'flex', backgroundColor: '#FFFFFF', width: '100%'}}>
            <Grid container style={{display: 'flex', flexDirection: 'column', width: '100%'}} xs={12}>
                <Grid item sx={{padding: '20px 20px 3px 20px'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        color='#333333'
                        lineHeight='18.78px'
                        textAlign='left'
                    >
                        Currenting bidding price : ₹ 5000
                    </Typography>
                </Grid>
                <Grid item sx={{padding: '3px 20px'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        color='#333333'
                        lineHeight='18.78px'
                        textAlign='left'
                    >
                        Tamboola commission : ₹ 5000
                    </Typography>
                </Grid>
                <Grid item sx={{padding: '3px 20px 8px 20px'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        color='#333333'
                        lineHeight='18.78px'
                        textAlign='left'
                        fontWeight='400'
                    >
                        Total : ₹ 10000
                    </Typography>
                </Grid>
                <Divider />
                <Grid item sx={{padding: '20px 20px 20px 20px', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Grid item xs={7}>
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='18px'
                            color='#333333'
                            lineHeight='21.11px'
                            textAlign='left'
                            fontWeight='500'
                        >
                            Change bid to :
                        </Typography>
                    </Grid>
                    <Grid xs={5} form sx={{display: 'flex', alignItems: 'center' , height: 34, border: '1px solid #B7B7B7', borderRadius: '5px', backgroundColor: "#F0EFEF"}}>
                        <IconButton
                            size='large'
                            color='#333333'
                            fontWeight='400'
                        >
                            <CurrencyRupeeOutlinedIcon sx={{color: '#000000'}} />
                        </IconButton>
                        <InputBase sx={{m: 1, flex: 1, color: '#000000', fontWeight: '500', fontSize: '16px', fontFamily: 'Work sans'}} inputProps={{'area-label': 'Enter amount'}} />
                    </Grid>
                </Grid>
                <Divider />
                <Grid item sx={{padding: '3px 20px 4px 20px'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='14px'
                        color='#333333'
                        lineHeight='16.42px'
                        textAlign='left'
                        fontWeight='400'
                    >
                        Tamboola commission : ₹600
                    </Typography>
                </Grid>
                <Grid item sx={{padding: '3px 20px 8px 20px'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        color='#333333'
                        lineHeight='16.42px'
                        textAlign='left'
                        fontWeight='500'
                    >
                        Total : ₹ 10600
                    </Typography>
                </Grid>
                <SubmitButtom onClick={buttonClick} sx={{backgroundColor: '#505050', '&:hover': { backgroundColor: '#505050'},}} variant='contained'>Submit</SubmitButtom>
            </Grid>
        </Box>
    )
}

export default ChangeBidAwaiting;