import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CancelledBidsBox from './CalcelledBidsBox';
import axios from 'axios'



function CancelledBids() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const Getdata = async() => {
            const id = '64dd0c4aa11521155128628a';
            try {
                const res = await axios.get(process.env.REACT_APP_BACKEND + 'users/missedbids', {
                    params: { id },
                });

                console.log('Value of res', res);
                const data = res.data;
                setData(data);
            } catch (error) {
                console.error(error);
            }
        }
        Getdata();
    }, [])

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', biddate : '2023-08-27T00:00:00'},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', biddate : '2023-08-27T00:00:00'},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', biddate : '2023-08-28T00:00:00'},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', biddate : '2023-08-29T00:00:00'},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', biddate : '2023-08-30T00:00:00'}
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
                    Missed Bids
                </Typography>
            </Grid>
            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '0'}}>
                {
                    data && data.length === 0 ? (
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='20px'
                            fontWeight= '400'
                            textAlign='left'
                        >
                            You missed nothing.
                        </Typography>
                    ) : (
                        data.map((data, index) => (
                            <CancelledBidsBox key={index} textDecorationNone={true}  phone={data.model} issue={data.issu} bid={data.bid} date={data.biddate}/>
                        ))
                    )
                }

            </Grid>
        </Box>
    )
}

export default CancelledBids;