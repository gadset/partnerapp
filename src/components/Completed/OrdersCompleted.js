import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import OrdersCompletedBox from './OrdersCompletedBox';
import axios from 'axios';


function OrdersCompleted() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const Getdata = async() => {
            const partnerid = JSON.parse(localStorage.getItem('partnerid'));

            try {
                const res = await axios.get(process.env.REACT_APP_BACKEND  + `order/getorders?partnerid=${partnerid}&status=done&delivery=${false}`, {
					headers : {
						'x-token' : localStorage.getItem('token'),
					}
                });
                console.log('Value of res', res);
                const data = res?.data?.objects;
                setData(data);
            } catch (error) {
                console.error(error);
            }
        }
        Getdata();
    }, [])

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', delivery: 'Not deliveried'},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', delivery: 'deliveried'},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', delivery: 'Not deliveried'},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', delivery: 'deliveried'},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', delivery: 'Not deliveried'}
    ];

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
                    Order Completed
                </Typography>
            </Grid>
            <Grid>
                {
                    data && data.length === 0 ? (
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='20px'
                            fontWeight= '400'
                            textAlign='left'
                        >
                            No Completed Orders.
                        </Typography>
                    ) : (
                        data?.map((data, index) => (
                            <OrdersCompletedBox key={index} textDecorationNone={true}  phone={data.device} delivery={data?.delivery} amount ={data?.amount} issue={data.issue} bid={data.bid} date={data.biddate} id={data._id}/>
                        ))
                    )
                }
            </Grid>
        </Box>
    )
}

export default OrdersCompleted;