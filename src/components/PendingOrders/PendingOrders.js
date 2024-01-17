import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ConfirmationBox from '../Confirmed/confirmationBox';
import PendingOrdersBox from './PendingOrdersBox';
import axios from 'axios'

function PendingOrders() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const Getdata = async() => {
            const partnerid = JSON.parse(localStorage.getItem('partnerid'));

            try {
                const res = await axios.get(process.env.REACT_APP_BACKEND  + `order/getorders?partnerid=${partnerid}&status=repairing&delivery=${false}`, {
                    params: { partnerid },
                });

                const data = res?.data?.objects || [];
                setData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
        Getdata();
    }, [])

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', bid: 7500, biddate : '2023-08-27T00:00:00'},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', bid: 4500, biddate : '2023-08-27T00:00:00'},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', bid: 6500, biddate : '2023-08-28T00:00:00'},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', bid: 10000, biddate : '2023-08-29T00:00:00'},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', bid: 12000, biddate : '2023-08-30T00:00:00'}
    ];

    return(
        <Box style={{display: 'flex', flexDirection: 'column', padding: '10px 30px', backgroundColor: '#FFFFFF'}}>
            <Grid item sx={{padding: 0, margin: '10px 0 5px 0'}}>
                <Typography
                    fontFamily='Work Sans'
                    fontSize='16px'
                    fontWeight= '400'
                    lineHeight='18.77px'
                    textAlign='left'
                >
                    Pending Orders
                </Typography>
            </Grid>
            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '0'}} >
            {
                    data && data.length === 0 ? (
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='20px'
                            fontWeight= '400'
                            textAlign='left'
                        >
                            No Pending Orders.
                        </Typography>
                    ) : (
                        data.map((data, index) => (
                            <PendingOrdersBox key={index} textDecorationNone={true}  phone={data.device} issue={data.issue} bid={data.bid} date={data.biddate} id={data._id}/>
                        ))
                    )
                }
            </Grid>
        </Box>
    )
}

export default PendingOrders;