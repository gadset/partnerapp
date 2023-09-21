import React, { Component } from 'react'
import { makeStyles } from "@mui/styles";
import { Box, Typography, TextField, Divider, Button, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/system';
import upload from '../Images/upload.svg';
import link from '../Images/link.svg';
import working from '../Images/working.svg';
import { BorderHorizontal } from '@mui/icons-material';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const StyledTextField = styled(TextField)`
  background-color: #F4F4F4;
  border-radius: 5px;
`;

const useStyles = makeStyles(theme => ({
    root : {
        display : 'flex',
        flexDirection : 'column',
        width : '80%',
        alignItems : 'flex-start'
    },
    imagesection : {
        background : '#F5F5F5',
        borderRadius : '5px',
        padding : '10px',
        width:'100%'
    },
    imageinput : {
        borderRadius: '5px',
  border: '1px solid #B7B7B7',
  background: '#D9D9D9',
  boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.25)' 
    },
    powerbtn : {
        borderRadius: '5px',
        background: '#F4F4F4',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        padding: '5px 10px',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight : '10px',
        marginTop : '10px',
    }
  }))

export default function Orders(){
    const classes = useStyles();
    const [brand, setBrand]= useState('');
    const [password, setPassword] = useState('');
    const [condition, setCondition] = useState('');

    const handleCondition = (e) => {
        setCondition(e.target.value);
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    } 

    const handleChangebrand = (e) => {
setBrand(e.target.value);
    }
    return(
<Box className={classes.root}>
    <Typography variant='h5'>Entry Inspection of the Mobile</Typography>
    <Typography variant="h4">Order Number</Typography>
    <StyledTextField
            hiddenLabel
            size="small"
          select
          placeholder="Search your brand"
          fullWidth
          value={brand}
          onChange={(e) => handleChangebrand(e)}/>
    
    <Typography variant="h4">Password</Typography>
    <StyledTextField
            hiddenLabel
            size="small"
          placeholder="enter password"
          fullWidth
          value={password}
          onChange={(e) => handlePassword(e)}/>

    
<Typography variant="h4">Phone Condition</Typography>
    <StyledTextField
            hiddenLabel
            size="small"
            select
          placeholder="enter password"
          fullWidth
          value={condition}
          onChange={(e) => handleCondition(e)}/>

<Typography variant='h4'>Attach Entry Image</Typography>
<Typography variant='body2'>*Note: Upload (7) images, one of which should be an image of a switched-off phone.</Typography>
<Box className={classes.imagesection}>
    <Box>
    <Button><img src={upload} alt='upload'/> <Divider orientation="vertical" variant='middle' flexItem/><Typography>choose file</Typography></Button>
    <Typography variant='body1'>or</Typography>
    <Typography variant='body1'>Web Url</Typography>
    <TextField
    label=''
      variant="outlined"
      className={classes.imageinput}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={link} alt='link' />
              <div
                style={{
                  height :'24px',
                  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                  margin: '0 8px',
                }}
              />
            </div>

          </InputAdornment>
        ),
      }}
      placeholder="Enter link here"
    />

    </Box>

</Box>
<Typography variant='h4'>What's Working and what's not</Typography>
<Box sx={{display : 'flex', flexWrap : 'wrap'}} >
    <Box className={classes.powerbtn}> <Typography variant='body1'>Power</Typography> <Switch {...label} /></Box>

    <Box className={classes.powerbtn}> <Typography variant='body1'>Network</Typography>  <Switch {...label} /></Box>
    <Box className={classes.powerbtn}> <Typography variant='body1'>Ear speaker</Typography>  <Switch {...label} /></Box>
    <Box className={classes.powerbtn}> <Typography variant='body1'>Volume down button</Typography>  <Switch {...label} /></Box>
    <Box className={classes.powerbtn}> <Typography variant='body1'>Network</Typography>  <Switch {...label} /></Box>
    <Box className={classes.powerbtn}> <Typography variant='body1'>Network</Typography>  <Switch {...label} /></Box>
</Box>
</Box>
    )
};
