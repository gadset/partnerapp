import React, {useState, useEffect} from 'react';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HomeBox from './HomeBox';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { IconButton } from '@mui/material';
import NewBid from './NewBid';
import ButtonSubmit from './SubmitBox/submitBUtton';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import './Home.css';

const Container = styled(Grid) `
    position: 'absolute',
    transform: 'translated(-50%, -50%)',
    bgcolor: 'background.paper'
`



function Home() {

    const [winheight, setWinHeight] = useState(window.innerHeight);
    const [newBidClick, setNewBidClick] = useState(false);
    const [successButton, setSuccessButton] = useState(false);
    const [newBiddata, setNewBidData] = useState({});

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

    const [width, setWidth] = useState(window.innerWidth);

    function handledWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(()=> {
        window.addEventListener('resize', handledWindowSizeChange);
        return () => {
        window.removeEventListener('resize', handledWindowSizeChange);
        }
    }, [])


    const isMobile = width <= 768;

    const data1 = [
        // { number: 2, names: "Awaiting Conformation", link: '/awaitingConfirmation' },
        { number: 3, names: "All bids", link: '/allbids' },
        { number: 5, names: "Missed Bids" , link: '/cancelledBids'},,
        { number: 1, names: "Confirmed Orders" , link: '/ConfirmedOrders'},
        { number: 4, names: "Pending/ Reparing" , link: '/pendingorders'},
        
        { number: 6, names: "Order Completed" , link: '/ordersCompleted'},
        // { number: 7, names: "Delivery Pending" , link: '/confirmedBids'},
        { number: 8, names: "Delivered", link: '/confirmedBids' },
        // { number: 9, names: "Confirmed Payment", link: '/confirmedBids' },
        // { number: 10, names: "After Service Payments", link: '/confirmedBids' },
        // { number: 11, names: "Warranty Clame", link: '/confirmedBids' },
    ]

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
        handleSuccessSubmit();
    }

    const customScrollbarStyle = {
        msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        overflow: 'hidden'
    };

  return (
        <Grid container sx={{ ...customScrollbarStyle ,display: 'flex', position: 'relative' ,flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', margin: '0px auto'}}>
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
                        <Grid key={index} item style={{padding: '0px'}} xs={6}><HomeBox count={bids.number} boxname={bids.names} link={bids.link} /></Grid>
                    ))}

                </Grid>
            </Grid>
         

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
                    <ButtonSubmit buttonClick={handleCloseSubmit} link={'/'}/>
                </Grid>
            </Modal>
        </Grid>
    )
}

export default Home