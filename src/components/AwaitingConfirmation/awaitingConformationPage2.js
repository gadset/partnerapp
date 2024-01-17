import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ConfirmationBox from '../confirmationBox';
import AwaitingConformation2Box from './AwaitingConformation2Box';
import PersonOtherBid from '../personOtherBid';
import CancelBidAwaiting from '../CancelBidAwaiting';
import ChangeBidAwaiting from '../ChangeBidAwaiting';

function AwaitingConformation2() {

    const [cancelBid, setCancelBid] = useState(false)
    const [othersBid, setOthersBid] = useState(false)
    const [reBid, setReBid] = useState(false);
    const [winheight, setWinHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    function handledWindowSizeChange() {
        setWinHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handledWindowSizeChange);
        return () => {
            window.addEventListener('resize', handledWindowSizeChange);
        }
    }, [])

    const isMobile = width <= 768;

    const handleOpenCancelBid = (e) => {
        setCancelBid(true);
        console.log('clicked cancel');
    }

    const handleCloseCancelBid = (e) => {
        setCancelBid(false);
    }


    function handleOpenReBid() {
        setReBid(true);
        console.log('Clicked rebid')
    }

    const handleCloseReBid = (e) => {
        setReBid(false);
    }

    const dataNewBids = [
        {phone: 'iPhone X', issue: 'Camera not working, Battery replacement , ', bid: 7500, biddate : '2023-08-27T00:00:00'},
        {phone: 'Oppo A52', issue: 'Display broken, Battery replacement', bid: 4500, biddate : '2023-08-27T00:00:00'},
        {phone: 'oneplus Nord c', issue: 'Display broken, touch not working', bid: 6500, biddate : '2023-08-28T00:00:00'},
        {phone: 'iPhone 14 pro max', issue: 'Camera not working, Battery replacement', bid: 10000, biddate : '2023-08-29T00:00:00'},
        {phone: 'Samsung Z flip', issue: 'Display broken, Battery replacement', bid: 12000, biddate : '2023-08-30T00:00:00'}
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
                Awaiting Confirmation
            </Typography>
        </Grid>
        <Grid container style={{display: 'flex', flexDirection: 'column', margin: '0'}} >
            {dataNewBids.map((data, index) => (
                <AwaitingConformation2Box key={index} textDecorationNone={true}  phone={data.phone} issue={data.issue} bid={data.bid} date={data.biddate} onCancelBid={handleOpenCancelBid} onReBid={handleOpenReBid} />
            ))}
        </Grid>
        <Modal
            open={cancelBid}
            onClose={handleCloseCancelBid}
        >
            <Grid sx={{padding: '0', width: isMobile ? '238px' : '238px',display: 'flex', justifyContent: 'center', margin: 'auto', border: '0px', position: "absolute", bottom: '40%', right: '0', left: '0', border: '1px solid #FFFFFF', borderRadius: '5px'}}>
                <CancelBidAwaiting buttonClick={handleCloseCancelBid} />
            </Grid>
        </Modal>

        <Modal
            open={reBid}
            onClose={handleCloseReBid}
        >
            <Grid sx={{padding: '0', width: isMobile ? '90%' : '370px',display: 'flex', justifyContent: 'center', margin: 'auto', border: '0px', position: "absolute", bottom: '25%', right: '0', left: '0', borderRadius: '5px'}}>
                <ChangeBidAwaiting buttonClick={handleCloseReBid} />
            </Grid>
        </Modal>
    </Box>
  )
}

export default AwaitingConformation2;