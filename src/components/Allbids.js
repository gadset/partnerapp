import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
// import Timerr from './Timerr';
import Timerr from './Timer';
import Modal from '@mui/material/Modal';
import NewBid from './NewBid';
import ButtonSubmit from './SubmitBox/submitButton';
import axios from 'axios';



export default function Allbids() {
    const [width, setWidth] = useState(window.innerWidth);
    const [newBidClick, setNewBidClick] = useState(false);
    const [successButton, setSuccessButton] = useState(false);
    const [newBiddata, setNewBidData] = useState({});

    const open = Boolean(newBidClick);
    const id = open ? 'simple-popover' : undefined;


    function handledWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(()=> {
        window.addEventListener('resize', handledWindowSizeChange);
        return () => {
        window.removeEventListener('resize', handledWindowSizeChange);
        }
    }, [])
    const handleOpenNewBid = (event) => {
        setNewBidClick(true)
    }

    const handleCloseNewBid = (e) => {
        setNewBidClick(false)
    }

    const handleSuccessSubmit = (e) => {
        setSuccessButton(true);
    }
    const handleCloseSubmit = (e) => {
        setSuccessButton(false);
        setNewBidClick(false);
    }

    const handleNewBidData = (data) => {
        setNewBidData(data);
        console.log(data)
        handleSuccessSubmit();
    }

    useEffect(() => {
        function Getdata() {
            // const res = axios
        }
    })


  const isMobile = width <= 768;
  const avaibleorders=[{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'}]
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow:1,width: isMobile ? '100%' : '400px',marginBottom:'40px',marginLeft:isMobile ? 'auto' : 'none'}} container >
    <Grid container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '14px' }}>
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
        {avaibleorders.map((order, index) => (
        <Grid container key={index} sx={{ display: 'flex', flexDirection: 'row', border: '1px solid #333333', borderRadius: '10px', padding: '12px',flexWrap:'nowrap',gap:'10px',marginBottom:'15px' }}>
            <Grid item sx={{ backgroundColor: '#D9D9D9', borderRadius: '5px', padding: '10px',maxWidth:'90px',width:'100%' }}>
                {/* Replace this with your image or content */}
                {/* Image */}
            </Grid>

            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap', }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px', minWidth:'82px', textAlign: 'left' }}>Device<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}>{order.Device}</Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',  minWidth:'82px', textAlign: 'left' }}>Issue<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px', textAlign: 'left'}}>{order.Issue}</Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',minWidth:'82px', textAlign: 'left' }}>Location<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}>{order.Location}</Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row',flexWrap:'nowrap',marginBottom: '15px' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',minWidth:'82px', textAlign: 'left'}}>Bid Ends in<span style={{float:'right'}}>:</span></Grid>
                    {/* <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}><Timerr bidEndDate={order.Ends} /></Grid> */}
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row',gap:'5px',flexWrap:'nowrap'}}>
                    <Typography sx={{lineHeight:'1.75',padding:'5px 10px 5px 10px',backgroundColor:'#6A6A6A',borderRadius:'5px',color:'#FFFFFF',fontWeight: 500, fontSize: '12px',fontFamily: 'Work sans',textAlign:'center',alignItems:'center'}}>No of Active bids : {order.Active}</Typography>

                    <Button onClick={handleOpenNewBid} sx={{ padding:'5px 10px 5px 10px',backgroundColor: '#333333', borderRadius: '5px', color: '#fff' ,fontWeight: 500, fontSize: '12px',fontFamily: 'Work sans','&:hover': {backgroundColor: '#333333'}}}>Bid Now</Button>
                </Grid>
            </Grid>
        </Grid>
        ))}
            <Modal
                open={open}
                onClose={handleCloseNewBid}
            >
                <Grid sx={{padding: '0', width: isMobile ? '90%' : '370px',display: 'flex', justifyContent: 'center', margin: 'auto', border: '0px', position: "absolute", bottom: '60px', right: '0', left: '0', border: '1px solid #FFFFFF', borderRadius: '5px'}}>
                    <NewBid  sendDatatoParent={handleNewBidData} />
                </Grid>
            </Modal>
            <Modal
                open={successButton}
                onClose={handleCloseSubmit}
            >
                <Grid sx={{padding: '0', width: isMobile ? '90%' : '370px',display: 'flex', justifyContent: 'center', margin: 'auto', border: '0px', position: "absolute", bottom: '42%', right: '0', left: '0', border: '1px solid #FFFFFF', borderRadius: '5px'}}>
                    <ButtonSubmit buttonClick={handleCloseSubmit} link={'/allbids'} />
                </Grid>
            </Modal>
    </Grid>

    </Box>
  );
}
