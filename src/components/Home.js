import React, {useState, useEffect, useRef, forwardRef} from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import HomeBox from './HomeBox';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { IconButton } from '@mui/material';
import NewBid from './NewBid';
import Popover from '@mui/material/Popover';
import {TweenMax, Power3} from 'gsap';
import Footer from './Footer';
import ButtonSubmit from '../SubmitBox/submitButton';

function Home() {

    const [shownewBid, setShowNewBid] = useState(true);
    const [winheight, setWinHeight] = useState(window.innerHeight);
    const [newBidClick, setNewBidClick] = useState(false);
    const [anchorel, setanchorel] = useState(null);

    function handledWindowSizeChange() {
        setWinHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handledWindowSizeChange);
        return () => {
            window.addEventListener('resize', handledWindowSizeChange);
        }
    }, [])


    const bids = 10;
    const names = 'pending';

    const open = Boolean(newBidClick);
    const id = open ? 'simple-popover' : undefined;

    const data1 = [
        { number: 1, names: "Confirmed" },
        { number: 2, names: "Awaiting Conformation" },
        { number: 3, names: "All bids" },
        { number: 4, names: "Pending" },
        { number: 5, names: "Cancelled Bids" },
        { number: 6, names: "Order Completed" },
        { number: 7, names: "Delivery Pending" },
        { number: 8, names: "Delivered" },
        { number: 9, names: "Confirmed Payment" },
        { number: 10, names: "After Service Payments" },
        { number: 11, names: "Warranty Clame" },
    ]

    const handleOpenNewBid = (event) => {
        setanchorel(event.currentTarget)
        console.log("Button clicked")
    }

    const handleCloseNewBid = (e) => {
        setanchorel(null);
    }

  return (
        <Grid container sx={{display: 'flex', position: 'relative' ,flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', margin: '0px 0'}}>
            {/* <Grid container aria-describedby={id} sx={{position:'sticky', top: '0', display: 'flex', justifyContent: 'center', backgroundColor: '#FFFFFF'}}>
                <Navbar />
            </Grid> */}
            <Grid container spacing={2} sx={{overflowX: 'hidden', width: '90%', margin: '30px auto' ,  opacity: 1}}>
                <Grid item style={{width:'100%', border: '1px solid #B7B7B7', borderRadius: '5px', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
                    <Grid container style={{display: 'flex', flexDirection: 'column', width: '80%', justifyContent: 'center', alignItems: 'flex-start', padding: '10px 10px 10px 20px' }}>
                        <Typography style={{fontWeight: '500', fontSize: '24px', color: '#333333', fontFamily: 'Work Sans', lineHeight: '1'}} >
                            New Bid Arrived
                        </Typography>
                        <Typography  onClick={handleOpenNewBid} style={{fontWeight: 300, fontSize: '21px', color: '#333333', fontFamily: 'Work sans', lineHeight: '1', cursor: 'pointer'}}>
                            Click here to view
                        </Typography>
                    </Grid>
                    <Grid style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%'}}>
                        <IconButton
                            size='large'
                        >
                            <NotificationsActiveOutlinedIcon  style={{height: '40px', width: '40px'}} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={2} columns={12.5} rowSpacing={2}   sx={{width: '100%', margin: '5px auto', display: 'flex', justifyContent: 'space-between'}} >
                    {data1.map((bids, index) => (
                        <Grid key={index} item style={{padding: '0px'}} xs={6}><HomeBox count={bids.number} boxname={bids.names} /></Grid>
                    ))}

                </Grid>
            </Grid>
            <Grid container aria-describedby={id} sx={{position:'sticky', bottom: '0', display: 'flex', justifyContent: 'center'}}>
                <Footer />
            </Grid>
        </Grid>
    )
}

export default Home