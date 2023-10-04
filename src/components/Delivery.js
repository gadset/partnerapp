

import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import DeliveryBox from './DeliveryBox';


function Delivery() {

    const [data, setData] = useState([]);

    console.log('Vaue')
    
    useEffect(()=> {
        const Getdata = async() => {
            const id = '65074f7ebbca59502d1d2aee';

            try {
                const res = await axios.get(process.env.REACT_APP_BACKEND + 'users/delivered', {
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
                    Delivered Orders
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
                            <DeliveryBox key={index} phone={data.device} issue={data.issue} payment={data.paymentdone} />
                        ))
                    )
                }
            </Grid>

        </Box>
    )
}

export default Delivery;