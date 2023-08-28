import  React, {useEffect, useState, forwardRef} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './style.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { IconButton, Radio, RadioGroup } from '@mui/material';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const SubmitButtom = styled(Button) `
    text-transform: none;
    background-color: #505050;
    color: #FFFFFF;
    border: 1px solid #C5C5C5;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    font-family: Work Sans;

`


function NewBid(props) {

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


    return (
        <Box container style={{display: 'flex', flexDirection: 'column', flexGrow:1, width: isMobile ? '100%' : '400px', backgroundColor: '#FFFFFF'}} >
            <Grid container style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' ,padding: '12px 16px'}}>
                <Grid item style={{padding: '5px 0', display: 'flex', justifyContent: 'flex-start'}}>
                    <Typography style={{fontWeight: 300, fontSize: '16px', color: '#333333', fontFamily: 'Work sans', lineHeight: '1'}}>
                        New Bid
                    </Typography>
                </Grid>
                <Grid item style={{padding: '6px 0', display: 'flex', justifyContent: 'flex-start'}}>
                    <Typography style={{fontWeight: 400, fontSize: '24px', color: '#000000', fontFamily: 'Work sans', lineHeight: '1', cursor: 'pointer'}}>
                        iPhone 14 pro max
                    </Typography>
                </Grid>
                <Grid container style={{}}>
                    <Grid xs={1.75} item style={{padding: '5px 0', display: 'flex', justifyContent: 'flex-start'}}>
                        <Typography style={{fontWeight: 400, fontSize: '14px', color: '#000000', fontFamily: 'Work sans', lineHeight: '1.25',}}>Issue :</Typography>
                    </Grid>
                    <Grid xs={10.25} item style={{padding: '5px 0', display: 'flex', justifyContent: 'flex-start'}}>
                        <Typography style={{fontWeight: 400, fontSize: '14px', color: '#000000', fontFamily: 'Work sans', lineHeight: '1.25', textAlign: 'left'}}>Screen Replacement , Touch is not working</Typography>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <FormControl style={{width: '100%'}}>
                        <FormLabel id='service-offer-radio-buttons' style={{fontWeight: '500', fontSize: '16px', color: '#000000', fontFamily: 'Work Sans', lineHeight: '1.25', textAlign: 'left'}} >Type of Service you offer</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='service-offer-radio-buttons'
                            name='row-radio-button-grp' 
                        >
                            <Grid container>
                                <Grid style={{display: 'flex', justifyContent: 'flex-start'}} item xs={7}>
                                    <FormControlLabel style={{padding: '0', fontWeight: 400, fontSize: '16px', color: '#000000', fontFamily: 'Work sans'}}  value='Doorstep Service' control={<Radio size='small' sx={{ color: '#CFCFCF', '&.Mui-checked': { color: '#000000'},}} />} label='Doorstep Service' />
                                </Grid>
                                <Grid style={{display: 'flex', justifyContent: 'flex-start'}} item xs={5}>
                                    <FormControlLabel style={{padding: '0', fontWeight: 400, fontSize: '16px', color: '#000000', fontFamily: 'Work sans'}}  value='Visit Store' control={<Radio size='small' sx={{ color: '#CFCFCF','&.Mui-checked': { color: '#000000' }, }} />} label='Visit Store' />
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid container >
                    <FormControl style={{width: '100%'}}>
                        <FormLabel id='warranty-radio-button-grp' style={{fontWeight: '500', fontSize: '16px', color: '#000000', fontFamily: 'Work Sans', lineHeight: '1.25', textAlign: 'left'}}>Warranty that you offer</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='warranty-radio-button-grp'
                            name='row-radio-button-grp'
                        >
                            <Grid container>
                                <Grid style={{display: 'flex', justifyContent: 'flex-start'}} item xs={7}>
                                    <FormControlLabel style={{padding: '0', fontWeight: 400, fontSize: '16px', color: '#000000', fontFamily: 'Work sans'}}  value='6 Months warranty' control={<Radio size='small' sx={{ color: '#CFCFCF', '&.Mui-checked': { color: '#000000'},}} />} label='6 Months warranty' />
                                </Grid>
                                <Grid style={{display: 'flex', justifyContent: 'flex-start'}} item xs={5}>
                                    <FormControlLabel style={{padding: '0', fontWeight: 400, fontSize: '16px', color: '#000000', fontFamily: 'Work sans'}}  value='No warranty' control={<Radio size='small' sx={{ color: '#CFCFCF', '&.Mui-checked': { color: '#000000'},}} />} label='No warranty' />
                                </Grid>
                                <Grid style={{display: 'flex', justifyContent: 'flex-start'}} item xs={7}>
                                    <FormControlLabel style={{padding: '0', fontWeight: 400, fontSize: '16px', color: '#000000', fontFamily: 'Work sans'}}  value='3 Months warranty' control={<Radio size='small' sx={{ color: '#CFCFCF', '&.Mui-checked': { color: '#000000'},}} />} label='3 Months warranty' />
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item style={{padding: '5px 0', display: 'flex', justifyContent: 'flex-start', margin: '5px 0'}}>
                    <Typography style={{fontWeight: 500, fontSize: '16px', color: '#000000', fontFamily: 'Work sans', lineHeight: '1'}}>
                        Enter bid amount
                    </Typography>
                </Grid>
                <Grid form sx={{display: 'flex', alignItems: 'center' , height: 34, border: '1px solid #B7B7B7', borderRadius: '5px', backgroundColor: "#F0EFEF"}}>
                    <IconButton
                        size='large'
                        color='#333333'
                        fontWeight='400'
                    >
                        <CurrencyRupeeOutlinedIcon sx={{color: '#000000'}} />
                    </IconButton>
                    <Divider sx={{height: 28, m: 0.5, color: '#B7B7B7'}} orientation='vertical' />
                    <InputBase sx={{m: 1, flex: 1, color: '#000000', fontWeight: '500', fontSize: '16px', fontFamily: 'Work sans'}} inputProps={{'area-label': 'Enter amount'}} />
                </Grid>
                <Typography style={{textAlign: 'left', fontWeight: '500',fontSize: '11px',color: '#000000', fontFamily: 'Work sans' }}>Tamboola commission : ₹850</Typography>
                <Grid item style={{padding: '5px 0', display: 'flex', justifyContent: 'flex-start', margin: '5px 0'}} >
                    <Typography style={{fontWeight: '600', fontSize: '16px', color: '#000000', fontFamily: 'Work sans', lineHeight: '1'}}>Final bid Amount : ₹9350</Typography>
                </Grid>
                <SubmitButtom onClick={props.handleSubmit} variant='contained' sx={{backgroundColor: '#505050', borderRadius: 5, border: '1px solid #C5C5C5', fontSize: 16, '&:hover': { backgroundColor: '#505050'},}}>submit</SubmitButtom>
            </Grid>
        </Box>
    );
    };

export default NewBid;