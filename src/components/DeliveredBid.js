import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Deliveredbox from './Deliveredbox'
export default function DeliveredBid() {
    const partnerid="650bd4a4ac0a5accf3316114"
    const [data1,setdata]=useState([
        {device: 'iPhone X', issu: ['Camera not working', 'Battery replacement'], bid: 7500,},
        {device: 'Oppo A52', issu: ['Display broken', 'Battery replacement'], bid: 4500,},
        {device: 'oneplus Nord c', issu: ['Display broken', 'touch not working'], bid: 6500,},
        {device: 'iPhone 14 pro max', issu: ['Camera not working', 'Battery replacement'], bid: 10000,},
        {device: 'Samsung Z flip', issu: ['Display broken', 'Battery replacement'], bid: 12000,}
    ])
    useEffect(()=> {
        const Getdata = async() => {
            try {
                const res = await axios.get('http://localhost:8003/users/deliveredquotes', {
                    params: { partnerid },
                });

                console.log('Value of res', res);
                // const data = res.data.objects;
                // setData(data);
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
                    Delivered Bids
                </Typography>
            </Grid>
            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '0'}}>
                {
                    data1 && data1.length === 0 ? (
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='16px'
                            fontWeight= '400'
                            textAlign='left'
                        >
                            You have no delivered bids yet.
                        </Typography>
                    ) : (
                        data1.map((data, index) => (
                            <Deliveredbox key={index} textDecorationNone={true}  model={data.model} issue={data.issu} bid={data.bid} device={data.device}/>
                        ))
                    )
                }

            </Grid>
        </Box>
  )
}
