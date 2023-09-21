

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Grid, Typography, Box } from '@mui/material';
import ConfirmedBidsBox from './ConfirmedBidsBox';
import axios from 'axios';


function ConfirmedBids() {

    const [data, setData] = useState([]);

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', bid: 7500,},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', bid: 4500,},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', bid: 6500,},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', bid: 10000,},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', bid: 12000,}
    ]

    useEffect(()=> {
        const Getdata = async() => {
            const id = '65074f7ebbca59502d1d2aee';

            try {
                const res = await axios.get('http://localhost:8003/users/getquotes', {
                    params: { id },
                });

                const data = res.data;
                setData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
        Getdata();
    }, [])

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
                        data.map((data, index) => (
                            <ConfirmedBidsBox key={index} textDecorationNone={true}  phone={data.device} issue={data.issue} bid={data.bid} date={data.biddate}/>
                        ))
                    )
                }
            </Grid>

        </Box>
    )
}

export default ConfirmedBids;