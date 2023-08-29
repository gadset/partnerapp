import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import styled from '@emotion/styled';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './OrderEntry.css';
import OrderEntryAutocomplete from './OrderEntryAutocomplete';
import OrderEntryTextField from './OrderEntryTextField';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import OrderEntryDatePicker from './OrderEntryDatePicker';



const CustomTextField = styled(TextField)`
  & .MuiInputBase-root {
    background-color: #f4f4f4;
    border: 1px solid #b7b7b7;
    border-radius: 5px;
    // padding: 8px 12px;
    height: 30px
  }
  & .MuiInputLabel-root {
    color: blue;
    padding: 0px
  }
`;


const SubmitButton = styled(Button) `
    text-transform: none;
    background-color: #505050;
    color: #FFFFFF;
    border: 1px solid #B7B7B7;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    font-family: Work Sans;
    height: 34px
`

const ResetButton = styled(Button) `
    text-transform: none;
    background-color: #B7B7B7;
    color: #757575;
    border: 1px solid #B7B7B7;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    font-family: Work Sans;
    height: 34px;

`




function OrderEntry() {

    const [storeLocation, setStoreLocation] = useState('');
    const [customerknow, setCustomerknow] = useState('');
    const [dealerName, setDealerName] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [phoneCondition, setPhoneCondition] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [gadgettype, setGadgettype] = useState('');
    const [gadgetModel, setGadgetModel] = useState('');
    const [problemMentioned, setProblemMentioned] = useState('');
    const [orderEntry, setOrderEntry] = useState('');
    const [estimatedDelivery, setEstimatedDelivery] = useState('');
    const [amountQuoted, setAmountQuoted] = useState('');
    const [warrantygiven, setWarrantygiven] = useState('');
    const [estimated, setEstimated] = useState('');
    const [gadgetcolor, setGadgetcolor] = useState('');
    const [passcode, setPasscode] = useState('');
    const [orderStatus, setOrderStatus] = useState('');
    const [orderStatusComments, setOrderStatusComments] = useState('');
    const [scheduleddatetime, setScheduleddatetime] = useState('');
    const [actualCost, setActualCost] = useState('');
    const [paymentCode, setPaymentCode] = useState('');
    const [amountpaidbycoustomer, setAmountpaidbycoustomer] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [serviceInfo, setServiceInfo] = useState('');
    const [assigned, setAssigned] = useState('');

    const locations = [
        { label: 'Vizag', year: 1994 },
        { label: 'Hyderabad', year: 1972 },
        { label: 'Guntur', year: 1974 },
        { label: 'Tirupati', year: 2008 },
        { label: 'chirala', year: 1957 },
        { label: "Tuni", year: 1993 },
        { label: 'Rajamundry', year: 1994 },
    ]

    const handleSubmit = () => {
        const fromData = {
            storeLocation,
            customerknow,
            dealerName,
            name,
            phoneNumber,
            email,
            phoneCondition,
            orderDate,
            gadgettype,
            gadgetModel,
            problemMentioned,
            orderEntry,
            estimatedDelivery,
            amountQuoted,
            warrantygiven,
            estimated,
            gadgetcolor,
            passcode,
            orderStatus,
            orderStatusComments,
            scheduleddatetime,
            actualCost,
            paymentCode,
            amountpaidbycoustomer,
            paymentStatus,
            deliveryDate,
            serviceInfo,
            assigned
        } 
        console.log(fromData);
    }
 
    const handleReset = () => {
        setStoreLocation('');
        setCustomerknow('');
        setDealerName('');
        setName('');
        setPhoneNumber('');
        setEmail('');
        setPhoneCondition('');
        setOrderDate('');
        setGadgettype('');
        setGadgetModel('');
        setProblemMentioned('');
        setOrderEntry('');
        setEstimatedDelivery('');
        setAmountQuoted('');
        setWarrantygiven('');
        setEstimated('');
        setGadgetcolor('');
        setPasscode('');
        setOrderStatus('');
        setOrderStatusComments('');
        setScheduleddatetime('');
        setActualCost('');
        setPaymentCode('');
        setAmountpaidbycoustomer('');
        setPaymentStatus('');
        setDeliveryDate('');
        setServiceInfo('');
        setAssigned('');
    };

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
                Order Entry
            </Typography>
        </Grid>
        <Grid component='form' container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
            <Grid container style={{display: 'flex', flexDirection: 'column'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Store Location
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={storeLocation} setValue={setStoreLocation} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        How did customer know about us
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={customerknow} setValue={setCustomerknow} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Dealer Name
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={dealerName} setValue={setDealerName} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Name
                    </Typography>
                </Grid>
                <OrderEntryTextField value={name} setValue={setName} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Phone
                    </Typography>
                </Grid>
                <Grid item style={{margin: '3px 0', display: 'flex'}} >
                    <PhoneInput
                        country={'us'}
                        value={phoneNumber}
                        onChange={(value) => setPhoneNumber(value)}
                    />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Email
                    </Typography>
                </Grid>
                <OrderEntryTextField value={email} setValue={setEmail} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Phone condition when recieved at lab
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={phoneCondition} setValue={setPhoneCondition} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Order date and time
                    </Typography>
                </Grid>
                <Grid item sx={{margin: '3px 0'}}>
                    <OrderEntryDatePicker value={orderDate} setValue={setOrderDate} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Gadget Type
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={gadgettype} setValue={setGadgettype} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Gadget Model
                    </Typography>
                </Grid>
                <OrderEntryTextField value={gadgetModel} setValue={setGadgetModel} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Problem Mentioned by customer
                    </Typography>
                </Grid>
                <OrderEntryTextField value={problemMentioned} setValue={setProblemMentioned} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Order entered by
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={orderEntry} setValue={setOrderEntry} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Estimated delivery date & time
                    </Typography>
                </Grid>
                <Grid item sx={{margin: '3px 0'}}>
                    <OrderEntryDatePicker value={estimatedDelivery} setValue={setEstimatedDelivery} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Amount quoted
                    </Typography>
                </Grid>
                <OrderEntryTextField value={amountQuoted} setValue={setAmountQuoted} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Warranty given
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={warrantygiven} setValue={setWarrantygiven} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Estimated cost
                    </Typography>
                </Grid>
                <OrderEntryTextField value={estimated} setValue={setEstimated} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Gadget color
                    </Typography>
                </Grid>
                <OrderEntryTextField value={gadgetcolor} setValue={setGadgetcolor} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        pass code
                    </Typography>
                </Grid>
                <OrderEntryTextField value={passcode} setValue={setPasscode} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Order status
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={orderStatus} setValue={setOrderStatus} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Order status comments
                    </Typography>
                </Grid>
                <OrderEntryTextField value={orderStatus} setValue={setOrderStatus} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Scheduled date & time
                    </Typography>
                </Grid>
                <Grid item sx={{margin: '3px 0'}}>
                    <OrderEntryDatePicker value={scheduleddatetime} setValue={setScheduleddatetime} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Actual cost of order
                    </Typography>
                </Grid>
                <OrderEntryTextField value={actualCost} setValue={setActualCost} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Payment mode
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={paymentCode} setValue={setPaymentCode} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Amount paid by customer
                    </Typography>
                </Grid>
                <OrderEntryTextField value={amountpaidbycoustomer} setValue={setAmountpaidbycoustomer} />
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Payment status
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={paymentStatus} setValue={setPaymentStatus} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Delivery date & time
                    </Typography>
                </Grid>
                <Grid item sx={{margin: '3px 0'}}>
                    <OrderEntryDatePicker value={deliveryDate} setValue={setDeliveryDate} />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Service information
                    </Typography>
                </Grid>
                <Grid item sx={{margin: '3px 0'}}>
                    {/* <TextField sx={{width: '100%', backgroundColor: '#F4F4F4'}} InputProps={{ style:{height: '30px',fontSize: '12px', fontWeight: 300, fontFamily: 'Work Sans' ,'&:hover': {border: '1px solid #F4F4F4'} , '&:focus': {border: '1px solid #F4F4F4'}}}} placeholder='First Name'/> */}
                    <TextareaAutosize
                        value={serviceInfo}
                        onChange={(e) => setServiceInfo(e.target.value)}
                        aria-label='service information'
                        Rows={4}
                        style={{
                            resize: 'none',
                            fontSize: '12px',
                            fontFamily: 'Work Sans',
                            fontWeight: 300,
                            padding: '8px 10px',
                            backgroundColor: '#F4F4F4',
                            height: '92px',
                            width: '94%',
                            paddingTop: '8px',
                            // textIndent: '10px',
                            border: '1px solid #B7B7B7',
                            borderRadius: '5px',
                            outline: 'none',
                            '&:hover' : {
                                border: '1px solid #B7B7B7'
                            },
                            '&:focus' : {
                                border: '1px solid #B7B7B7'
                            }
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid item sx={{padding: 0}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='12px'
                        color='#000000'
                        lineHeight='14.08px'
                        textAlign='left'
                    >
                        Assigned to
                    </Typography>
                </Grid>
                <Grid>
                    <OrderEntryAutocomplete options={locations} value={assigned} setValue={setAssigned} />
                </Grid>
            </Grid>

            <SubmitButton onClick={handleSubmit} sx={{borderRadius: 5, fontSize: 12, '&:hover': { backgroundColor: '#505050'}, margin: '40px 0px 10px 0'}} variant='contained'>Submit</SubmitButton>
            <ResetButton onClick={handleReset} sx={{borderRadius: 5, fontSize: 12, '&:hover': { backgroundColor: '#B7B7B7'}, margin: '0'}} variant='contained'>Reset</ResetButton>

        </Grid>
    </Box>
  )
}

export default OrderEntry