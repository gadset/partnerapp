import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Start } from '@mui/icons-material';
import Timerr from './Timerr';
export default function Allbids() {
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
  const avaibleorders=[{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'},{'Device':'iPhone 14','Issue':'Screen broken, touch  not working.','Location':'RT Nagar','Ends':'2023-08-27','Active':'4'}]
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow:1,width: isMobile ? '100%' : '400px',marginBottom:'40px',marginLeft:isMobile ? 'auto' : 'none'}} container >
    <Grid container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '14px 23px' }}>
        <Grid item style={{marginBottom:'20px'}}>
            <Typography style={{ fontWeight: 400, fontSize: '16px', color: '#000000', fontFamily: 'Work sans', lineHeight: '18.66px' }}>
                Bid for the Service
            </Typography>
        </Grid>
        {avaibleorders.map((order, index) => (
    <Grid container key={index} sx={{ display: 'flex', flexDirection: 'row', border: '1px solid #333333', borderRadius: '10px', padding: '12px',flexWrap:'nowrap',gap:'10px',marginBottom:'15px' }}>
            <Grid item sx={{ backgroundColor: '#D9D9D9', borderRadius: '5px', padding: '10px',maxWidth:'90px',width:'100%' }}>
                {/* Replace this with your image or content */}
                {/* Image */}
            </Grid>

            <Grid item container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px', minWidth:'82px' }}>Device<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}>{order.Device}</Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',  minWidth:'82px' }}>Issue<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px'}}>{order.Issue}</Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: '12px',flexWrap:'nowrap' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',minWidth:'82px' }}>Location<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}>{order.Location}</Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row',flexWrap:'nowrap',marginBottom: '15px' }}>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',minWidth:'82px'}}>Bid Ends in<span style={{float:'right'}}>:</span></Grid>
                    <Grid item sx={{ fontWeight: 500, Size: '12px', color: '#000', fontFamily: 'Work sans', lineHeight: '14.08px',marginLeft:'5px' }}><Timerr bidEndDate={order.Ends} /></Grid>
                </Grid>
                <Grid container item sx={{ display: 'flex', flexDirection: 'row',gap:'5px',flexWrap:'nowrap'}}>
                    <Typography sx={{lineHeight:'1.75',padding:'5px 10px 5px 10px',backgroundColor:'#6A6A6A',borderRadius:'5px',color:'#FFFFFF',fontWeight: 500, fontSize: '12px',fontFamily: 'Work sans',textAlign:'center',alignItems:'center'}}>No of Active bids : {order.Active}</Typography>
                    <Button sx={{ padding:'5px 10px 5px 10px',backgroundColor: '#333333', borderRadius: '5px', color: '#fff' ,fontWeight: 500, fontSize: '12px',fontFamily: 'Work sans','&:hover': {backgroundColor: '#333333'}}}>Bid Now</Button>
                </Grid>
            </Grid>
        </Grid>
))}

    </Grid>

    </Box>
  );
}
