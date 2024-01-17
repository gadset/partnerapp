import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ConfirmationBox from '../Confirmed/confirmationBox';
// import PersonOtherBid from './personOtherBid';
// import CancelBidAwaiting from './CancelBidAwaiting';
// import ChangeBidAwaiting from './ChangeBidAwaiting';

function AwaitingConformation() {
    const [dataNewBids,setdataNewBids] = useState([]);
    const partnerid =JSON.parse(localStorage.getItem('partnerid'))
    useEffect(() => {
        const Getdata = async() => {
            
            try {
                const res = await axios.get('http://localhost:8003/users/awaitingbids', {
                    params: { partnerid },
                });
                console.log(res.data)
                setdataNewBids(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        Getdata();
    }, [])

    // console.log(dataNewBids)
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
                Awaiting Confirmation
            </Typography>
        </Grid>
        <Grid container style={{display: 'flex', flexDirection: 'column', margin: '0'}} >
            { dataNewBids.length===0 ? <Typography></Typography> : dataNewBids.map((data, index) => (
                // <Link to='/'>
                    <ConfirmationBox key={index}  model={data.model} device={data.device} issue={data.issu} bid={data.bid} date={data.biddate} />
                // </Link>
            ))}
        </Grid>
    </Box>
  )
}

export default AwaitingConformation