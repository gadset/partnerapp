

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Grid, Typography, Box } from '@mui/material';
import ConfirmedBidsBox from './ConfirmedBidsBox';
import axios from 'axios';


function ConfirmedBids() {
    const dataNewBids = [
        {device: 'iPhone X', issu: ['Camera not working', 'Battery replacement'], bid: 7500,},
        {device: 'Oppo A52', issu: ['Display broken', 'Battery replacement'], bid: 4500,},
        {device: 'oneplus Nord c', issu: ['Display broken', 'touch not working'], bid: 6500,},
        {device: 'iPhone 14 pro max', issu: ['Camera not working', 'Battery replacement'], bid: 10000,},
        {device: 'Samsung Z flip', issu: ['Display broken', 'Battery replacement'], bid: 12000,}
    ]
    const [data, setData] = useState(dataNewBids);
	const partnerid = JSON.parse(localStorage.getItem('partnerid'));
    useEffect(()=> {
        const Getdata = async() => {
            try {
                const res = await axios.get(process.env.REACT_APP_BACKEND + `order/getorders?partnerid=${partnerid}&status=no&delivery=${false}`, );
                const data = res?.data?.objects || [];
                setData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
        Getdata();
    }, [partnerid])

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
                {
                    data.length === 0 ? (
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='20px'
                            fontWeight= '400'
                            textAlign='left'
                        >
                            There is no bids to Display.
                        </Typography>
                    ) : (
                        data?.map((data, index) => (
							// pass data as a prop and change all the things once
                            <ConfirmedBidsBox key={index} textDecorationNone={true}  phone={data.device} issue={data.issue} bid={data.bid} date={data.biddate} id={data._id}/>
                        ))
                    )
                }
            </Grid>

        </Box>
    )
}

export default ConfirmedBids;