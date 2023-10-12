import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
// import Timerr from './Timerr';
// import Timerr from './Timer';
import Modal from '@mui/material/Modal';
import NewBid from './NewBid';
import ButtonSubmit from './SubmitBox/submitBUtton';
import axios from 'axios';

export default function Allbids() {
    const partnerid =JSON.parse(localStorage.getItem('partnerid'))
    const [width, setWidth] = useState(window.innerWidth);
    const [newBidClick, setNewBidClick] = useState(false);
    const [successButton, setSuccessButton] = useState(false);
    const [bidDetails, setBiddetails] = useState({});
    const [newbiddata,setNewbidata]=useState();
    const open = Boolean(newBidClick);
    const id = open ? 'simple-popover' : undefined;
    // const partneridJSON = localStorage.getItem('partnerid');
    // const partnerid = JSON.parse(partneridJSON);
    
    function handledWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(()=> {
        window.addEventListener('resize', handledWindowSizeChange);
        return () => {
        window.removeEventListener('resize', handledWindowSizeChange);
        }
    }, [])
    const [allbids, setallbids] = useState([]);
    
    useEffect(() => {
        const getallbids = async () => {
            try {
            const response = await axios.get(`http://localhost:8003/users/getallbids?partnerid=${partnerid}`);
            setallbids(response.data.allbids);
            console.log(allbids)
            } catch (err) {
            console.error(err);
            }
        };
        getallbids();
    
    }, []); 
    const handleOpenNewBid = (order) => {
        setBiddetails(order);
        // console.log(bidDetails)
        setNewBidClick(true)
    }
    
    const handleCloseNewBid = (e) => {
        setNewBidClick(false)
        
    }
    const handlebidsubmission=async(data)=>{
        const id=bidDetails._id;
            const {amount,warranty,service,BidAmount}=data;
            const partnerid='650bd4a4ac0a5accf3316114';
            console.log({id,partnerid,amount,warranty,service})
        try {
             const resp = await axios.post('http://localhost:8003/users/submitquote',{id,partnerid,amount,warranty,service});
             console.log(resp);
            } catch (err) {
            console.error(err);
            }
     }
    const handleSuccessSubmit = (e) => {
        setSuccessButton(true);
    }
    const handleCloseSubmit = (e) => {
        setSuccessButton(false);
        setNewBidClick(false);
    }

    const handleNewBidData = (data) => {
        setNewbidata(data);
        console.log(data)
        handlebidsubmission(data);
        handleSuccessSubmit();
    }
  const isMobile = width <= 768;
//   const avaibleorders=[{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'}]
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow:1,width: isMobile ? '100%' : '400px',marginLeft:isMobile ? 'auto' : 'none'}} container >
    <Grid container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '14px' }}>
        <Grid item style={{marginBottom:'20px'}}>
            <Typography style={{ fontWeight: 400, fontSize: '16px', color: '#000000', fontFamily: 'Work sans', lineHeight: '18.66px' }}>
                Bid for the Service
            </Typography>
        </Grid>
        {allbids.reverse().map((order, index) => (
    <Grid container key={index} sx={{ display: 'flex', flexDirection: 'row', border: '1px solid #333333', borderRadius: '10px', padding: '12px',flexWrap:'nowrap',gap:'10px',marginBottom:'15px' }}>
            <Grid item sx={{ backgroundColor: '#D9D9D9', borderRadius: '5px', padding: '10px',width:'25%' }}>
            </Grid>

            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px', minWidth:'90px',textAlign:'left' }}>Device<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}>{order.device}</Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px', minWidth:'90px',textAlign:'left' }}>Model<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}>{order.model}</Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',  minWidth:'90px' ,textAlign:'left'}}>Issue<span style={{float:'right'}}>:</span></Grid>
                    <Grid item style={{display:'flex',flexDirection:'column'}}>
                    {order.issu.map((issue, index) => (
                        <Grid
                            item
                            key={index} 
                            sx={{
                            fontWeight: 500,
                            fontSize: '12px',
                            color: '#000',
                            fontFamily: 'Work sans',
                            lineHeight: '14.08px',
                            marginLeft: '5px',
                            textAlign: 'left',
                            }}
                        >
                            {issue}
                        </Grid>
                        ))}
                    </Grid>
                    
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px', minWidth:'90px',textAlign:'left' }}>Quoted on<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, fontSize: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}>
                    {new Date(order.createdAt).toLocaleString(undefined, {
                                            hour12: true,
                                            hour: 'numeric', 
                                            minute: 'numeric', 
                                            year: 'numeric', 
                                            month: 'numeric', 
                                            day: 'numeric',
                                            })}
                        </Grid>
                </Grid>
                {/* <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',minWidth:'82px' }}>Location<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}>{order.location}</Grid>
                </Grid> */}
                {/* <Grid container item sx={{ display: 'flex', flexDirection: 'row',flexWrap:'nowrap',marginBottom: '15px' }}> */}
                    {/* <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',minWidth:'82px'}}>Bid Ends in<span style={{float:'right'}}>:</span></Grid> */}
                    {/* <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}><Timerr bidEndDate={order.Ends} /></Grid> */}
                {/* </Grid> */}
                <Grid container item sx={{ display: 'flex', flexDirection: 'row',gap:'5px',flexWrap:'nowrap'}}>
                    <Typography sx={{lineHeight:'1.75',padding:'5px 10px 5px 10px',backgroundColor:'#6A6A6A',borderRadius:'5px',color:'#FFFFFF',fontWeight: 500, fontSize: '12px',fontFamily: 'Work sans',textAlign:'center',alignItems:'center'}}>No of Active bids : {order.quotesbypartner.length}</Typography>

                    <Button onClick={()=>{handleOpenNewBid(order)}} sx={{ padding:'5px 10px 5px 10px',backgroundColor: '#333333', borderRadius: '5px', color: '#fff' ,fontWeight: 500, fontSize: '12px',fontFamily: 'Work sans','&:hover': {backgroundColor: '#333333'}}}>Bid Now</Button>
                </Grid>
            </Grid>
        </Grid>
        ))}
            <Modal
                open={open}
                onClose={handleCloseNewBid}
            >
                <Grid sx={{padding: '0', width: isMobile ? '90%' : '370px',display: 'flex', justifyContent: 'center', margin: 'auto', border: '0px', position: "absolute", bottom: '60px', right: '0', left: '0', border: '1px solid #FFFFFF', borderRadius: '5px'}}>
                    <NewBid  sendDatatoParent={handleNewBidData} biddata={bidDetails}/>
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
