

import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Timer from './Timer';
import styled from '@emotion/styled';

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

const OrdersCompletedBox = ({phone,issue,delivery,}) => {

    return (
        <Box container sx={{ margin: '20px 0 30px 0'}}>
            <Grid container style={{display: 'flex',justifyContent:'center' ,flexDirection: 'column', padding: '15px 10px', border: '1px solid #A19F9F' ,backgroundColor: '#DEDEDE', borderRadius: '5px', position: 'relative',}}>
                <Grid container xs={14} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', height: '22px', position: 'absolute', right: 0, left: 0, margin: '0 auto', bottom: '-10px'}}>
            
                    <Grid item xs={5} style={{padding: 0}}>
                        <ButtonDelivery variant='contained'>Fill Delivery Form</ButtonDelivery>
                    </Grid>
                
                    <Grid item xs={5} style={{padding: 0}}>
                        <ButtonDelivery variant='contained'>Fill Exit Form</ButtonDelivery>
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
                            Delivery Status
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
                            {delivery}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default OrdersCompletedBox;