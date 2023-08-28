

import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography , Button} from '@mui/material';
import Timer from './Timer';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom'

const ButtonDelivery = styled(Button) `
    text-transform: none;
    background-color: #333333;
    color: #FFFFFF;
    border: 1px solid #C5C5C5;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 500;
    font-family: Work Sans;
    padding: '10px 5px';
`

const ButtonCancel = styled(Button) `
    text-transform: none;
    background-color: #C0C0C0;
    color: #333333;
    border: 1px solid #C5C5C5;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 500;
    font-family: Work Sans;
    padding: '10px 5px';
    border: 1px solid #333333
`



const AwaitingConformation2Box = ({phone,issue,bid, date,onCancelBid, onReBid}) => {

    const bidend = date;
    console.log(onCancelBid)
    console.log(onReBid)

    return (
        <Box container sx={{ margin: '25px 0'}}>
            <Grid container style={{display: 'flex', minHeight: '125px',justifyContent:'center' ,flexDirection: 'column', padding: '15px 10px', border: '1px solid #A19F9F' ,backgroundColor: '#DEDEDE', borderRadius: '5px', position: 'relative'}}>
                <Grid style={{padding: "5px 10px", backgroundColor: '#FFFFFF', border: '1px solid #333333', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', height: '22px', position: 'absolute', float:'right', right: '5px', top: '-10px'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontWeight='400'
                        fontSize='10px'
                        lineHeight='11.73px'
                        color='#333333'
                        textDecorationNone

                    >
                        Bid ends in
                    </Typography>
                    <Typography
                        fontFamily='Work Sans'
                        fontWeight='400'
                        fontSize='10px'
                        lineHeight='11.73px'
                        color='#333333'
                        paddingLeft='3px'
                    >
                        <Timer bidEndDate={bidend} />
                    </Typography>

                </Grid >
                <Grid container style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', height: '22px', position: 'absolute', right: 0, left: 0, margin: '0 auto', bottom: '-10px'}}>
                    <Grid item xs={4} style={{padding: 0}}>
                        <ButtonCancel onClick={onCancelBid} sx={{backgroundColor: '#C0C0C0', '&:hover': {backgroundColor: '#C0C0C0'}}} variant='contained'>Cancel bid</ButtonCancel>
                    </Grid>
                    <Grid item xs={4} style={{padding: 0}}>
                        <Link to='/otherBidding' style={{textDecoration: 'none'}}>
                            <ButtonDelivery sx={{backgroundColor: '#333333', '&:hover': {backgroundColor: '#333333'}}} variant='contained'>Others bid</ButtonDelivery>
                        </Link>
                    </Grid>
                    <Grid item xs={4} style={{padding: 0}}>
                        <ButtonDelivery onClick={onReBid} sx={{backgroundColor: '#333333', '&:hover': {backgroundColor: '#333333'}}} variant='contained'>change bid</ButtonDelivery>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', flexDirection: 'row', margin: '3px 0'}}>
                    <Grid item xs={2.2}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                            textDecorationNone={true}
                        >
                            Device 
                        </Typography>
                    </Grid>
                    <Grid item xs={0.5} style={{display:'flex', justifyContent: 'center', alignItems: 'top'}}>
                        <Typography
                                fontFamily='Work Sans'
                                fontWeight='400'
                                fontSize='14px'
                                lineHeight='16.42px'
                                color='#333333'
                                textAlign='left'
                            >
                            :
                        </Typography>
                    </Grid>
                    <Grid item xs={9.3}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            {phone}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', flexDirection: 'row', margin: '3px 0'}}>
                    <Grid item xs={2.2}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            Issue 
                        </Typography>
                    </Grid>
                    <Grid item xs={0.5} style={{display:'flex', justifyContent: 'center', alignItems: 'top'}}>
                        <Typography
                                fontFamily='Work Sans'
                                fontWeight='400'
                                fontSize='14px'
                                lineHeight='16.42px'
                                color='#333333'
                                textAlign='left'
                            >
                            :
                        </Typography>
                    </Grid>
                    <Grid item xs={9.3}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            {issue}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', flexDirection: 'row', margin: '3px 0'}}>
                    <Grid item xs={2.2} >
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            Your Bid
                        </Typography>
                    </Grid>
                    <Grid item xs={0.5} style={{display:'flex', justifyContent: 'center', alignItems: 'top'}}>
                        <Typography
                                fontFamily='Work Sans'
                                fontWeight='400'
                                fontSize='14px'
                                lineHeight='16.42px'
                                color='#333333'
                                textAlign='left'
                            >
                            :
                        </Typography>
                    </Grid>
                    <Grid item xs={9.3}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            ₹{bid}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default AwaitingConformation2Box;