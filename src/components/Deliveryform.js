import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputBase from '@mui/material/InputBase';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { styled } from '@mui/system';
import dayjs from 'dayjs';
import {Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { InputAdornment } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { BiLink } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import SignatureCanvas from 'react-signature-canvas';
import { useForm, Controller } from 'react-hook-form';
import {  InputLabel, Container, FormControlLabel, Switch } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import './deliveryform.css';
export default function Deliveryform() {
    const [width, setWidth] = useState(window.innerWidth);
    const [selectedValue, setSelectedValue] = useState('Select');
    const [gadgetType, setGadgettype] = useState('Select');
    const [warantyGiven,setWarantygiven]=useState('Select');
    const [paymentMode,setPaymentmode]=useState('Select');
    const [deliveredBy,setDeliveredby]=useState('Select');
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [entername, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [invoiceno, setInvoice] = useState('');
    const [amount, setAmount] = useState('');
    const [gadgetModel, setGadgetmodel] = useState('');
    const [serviceDone, setServicedone] = useState('');
    const [url, setURL] = useState('');
    const [data, setData] = useState(null);
    const [formData, setFormData] = useState(null);
    const signatureRef = React.useRef();
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
  const [signatureData, setSignatureData] = useState(null);

  const clearSignature = () => {
    signatureRef.current.clear();
    setSignatureData(null);
  };
  
  const StyledSelect = styled(Select)`
  background-color: #F7F7F7;
  border: 1px solid #B7B7B7;
  border-radius: 5px;
  height: 30px;
  &:before,
  &:after {
    border-bottom: none !important;
  }
  
  & .MuiSelect-select {
    padding: 6px 10px;
    font-family: Work Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.selectedValue === 'Select' ? '#33333380' : '#000'};
  }
`;

const StyledButton = styled(Button)`
// width:100%;

  && {
    text-transform: none;
    // justify-content;flex-start;
    font-family: 'Work Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    padding: 0 5px;
    height: 23px;
    background-color: #d9d9d9;
    border: 1px solid #b7b7b7;
    box-shadow: 0px 3px 4px 0px #00000040;
    border-radius: 5px;
    // width:100%;
    .MuiButton-startIcon {
      margin-right: 1px;
    }
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
const StyledCancelButton = styled(Button)`
  && {
    text-transform: none;
    border-radius: 5px;
    background-color: #D9D9D9;
    color: #333333;
    font-family: 'Work Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    border: 1px solid #B7B7B7; /* Specify the border style and color */
    box-shadow: 0px 3px 4px 0px #0000001A;
    margin-right:5px;
    &:hover {
      background-color: #D9D9D9;
    }
  }
`;
const StyledSaveButton = styled(Button)`
  && {
    text-transform: none;
    border-radius: 5px;
    background-color: #D9D9D9;
    color: #333333;
    font-family: 'Work Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    border: 1px solid #B7B7B7; /* Specify the border style and color */
    box-shadow: 0px 3px 4px 0px #0000001A;
    background: linear-gradient(0deg, #AAAAAA, #AAAAAA),
    linear-gradient(0deg, #B7B7B7, #B7B7B7);
    
    &:hover {
      background-color: #D9D9D9;
    }
  }
`;
const [selectedFiles, setSelectedFiles] = useState([]);
const handleDateChange = (newDate) => {
  setSelectedDate(newDate);
};
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    console.log(selectedFiles);
  };

  const handleFileRemove = (fileToRemove) => {
    setSelectedFiles((prevFiles) => prevFiles.filter(file => file !== fileToRemove));
  };
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setSignatureImage(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  
  const handleNameChange = (event) => {
    const newValue = event.target.value;
    setName(newValue); 
  };
  const handleSave = () => {
    const newData = {
      selectedFiles: selectedFiles,
      url: url,
    };
    setData(newData);
    console.log()
    toast.success('Data saved successfully', { autoClose: 2500 });
  };

  const handleCancel = () => {
    setSelectedFiles([]);
    setURL('');
    setData(null);
    toast.info('Changes discarded', { autoClose: 2500 });
  };
  const handleSubmit = () => {
    const signatureImage = signatureRef.current.toDataURL();

    setSignatureData(signatureImage);
    const newData = {
      selectedValue,
      gadgetType,
      warantyGiven,
      paymentMode,
      deliveredBy,
      selectedDate,
      entername,
      number,
      email,
      invoiceno,
      amount,
      gadgetModel,
      serviceDone,
      signatureData,
    };
    setFormData(newData);
    console.log(formData);
    toast.success('Form submitted successfully', { autoClose: 3000 });
    clearForm();
  };

  const handleReset = () => {
    clearForm();
  };

  const clearForm = () => {
    setSelectedValue('Select');
    setGadgettype('Select');
    setWarantygiven('Select');
    setPaymentmode('Select');
    setDeliveredby('Select');
    setSelectedDate(dayjs());
    setName('');
    setNumber('');
    setEmail('');
    setInvoice('');
    setAmount('');
    setGadgetmodel('');
    setServicedone('');
    setSignatureData(null);
    signatureRef.current.clear();
    setFormData(null);
    handleCancel();
  };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow:1,marginBottom:'60px',justifyContent: 'center',alignItems:'center',padding: '14px 23px'}} container >
          <Box sx={{width: isMobile ? '100%' : '400px',}}>
             <Grid container>
              <Grid item>
                <Typography style={{fontWeight: 500, fontSize: '14px', color: '#000', fontFamily: 'Work sans', lineHeight: '16.42px'}}>Order Entry</Typography>
              </Grid>
              <Grid container sx={{display:'flex',flexDirection:'column',marginTop:'17px',gap:'10px'}}>
                <Grid item sx={{width:'100%',}}><FormControl fullWidth >
                    <Typography style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Order now</Typography>
                    <StyledSelect
                        style={{ height: '30px' }}
                        labelId="order-number"
                        label="Order Number"
                        value={selectedValue} 
                        onChange={(event) => setSelectedValue(event.target.value)}
                        displayEmpty
                        selectedValue={selectedValue} 
                        renderValue={() => <span>{selectedValue}</span>}
                        >
                        <MenuItem value="Red">Red</MenuItem>
                        <MenuItem value="Black">Black</MenuItem>
                        <MenuItem value="Blue">Blue</MenuItem>
                        <MenuItem value="Green">Green</MenuItem>
                        <MenuItem value="Yellow">Yellow</MenuItem>
                    </StyledSelect>

                </FormControl></Grid>
                <Grid item sx={{width:'100%',}}>
                    <Typography style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Name</Typography>
                    <InputBase className='inputbase'
                    placeholder="First Name"
                    id="name"
                    
                    value={entername}
                    onChange={handleNameChange}
                    />
                   {/* <TextField className='txtfield' value={entername} onChange={(e) => setName(e.target.value)} sx={{width: '100%', backgroundColor: '#F4F4F4'}} InputProps={{ style:{height: '30px',fontSize: '12px', fontWeight: 300, fontFamily: 'Work Sans' ,'&:hover': {border: '1px solid #F4F4F4'} , '&:focus': {border: '1px solid #F4F4F4'}}}} placeholder='First Name'/> */}
                </Grid>
                <Grid item sx={{width:'100%',}}>
                     <Typography style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Phone</Typography>
                     <TextField className='textfeild'
                     value={number} 
                     onChange={(event) => setNumber(event.target.value)}
                     
                     placeholder='9900852366'
                        id="standard-start-adornment"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Box
                                sx={{
                                    fontSize: '12px',
                                    color: '#333',
                                    borderRight: '1px solid #B7B7B7',
                                    padding:'0 5px',
                                }}
                                >
                                +91
                                </Box>
                            </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        />
                </Grid>
                <Grid item sx={{width:'100%',}}>
                    <Typography  style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Email</Typography>
                    <InputBase className='inputbase' placeholder="rajkumar@gadset.in" id='email'value={email} 
                        onChange={(event) => setEmail(event.target.value)} />
                </Grid>
                <Grid item sx={{width:'100%',}}>
                    <Typography  style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Date and time</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDateTimePicker
                        className='datepicker'
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </LocalizationProvider>
                    </Grid>
                <Grid item sx={{width:'100%',}}>
                    <Typography  style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Invoice no</Typography>
                    <InputBase className='inputbase' placeholder="Enter" id='invoice' value={invoiceno} 
                        onChange={(event) => setInvoice(event.target.value)}/>
                </Grid>
                <Grid item sx={{width:'100%',}}><FormControl fullWidth >
                    <Typography style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Gadget Type</Typography>
                    <StyledSelect style={{height:'30px'}}
                        labelId="gadget-type"
                        label="Gadget Type"
                        value={gadgetType}
                        onChange={(event) => setGadgettype(event.target.value)}
                        displayEmpty
                        selectedValue={gadgetType}
                        renderValue={() => <span>{gadgetType}</span>}
                        >
                        <MenuItem value="Mobile">Mobile</MenuItem>
                        <MenuItem value="Watch" >Watch</MenuItem>
                        <MenuItem value="Laptop">Laptop</MenuItem>
                        <MenuItem value="Tablet" >Tablet</MenuItem>
                    </StyledSelect>
                </FormControl></Grid>
                
                <Grid item sx={{width:'100%',}}><FormControl fullWidth >
                    <Typography style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Warranty given</Typography>
                    <StyledSelect style={{height:'30px'}}
                        labelId="warranty-given"
                        label="Warranty given"
                        value={warantyGiven}
                        onChange={(event) => setWarantygiven(event.target.value)}
                        displayEmpty
                        selectedValue={warantyGiven}
                        renderValue={() => <span>{warantyGiven}</span>}
                        >
                        <MenuItem value="3 months">3 months</MenuItem>
                        <MenuItem value="6 months">6 months</MenuItem>
                        <MenuItem value="1 year" >1 year</MenuItem>
                        <MenuItem value="2 years" >2 years</MenuItem>
                        
                    </StyledSelect>
                </FormControl></Grid>
                <Grid item sx={{width:'100%',}}>
                    <Typography style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Amount collected</Typography>
                    <InputBase className='inputbase' placeholder="enter amount" id='amount' value={amount} 
                        onChange={(event) => setAmount(event.target.value)}/>
                </Grid>
                <Grid item sx={{width:'100%',}}><FormControl fullWidth >
                    <Typography sx={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Payment mode</Typography>
                    <StyledSelect style={{height:'30px'}}
                        labelId="payment-mode"
                        label='Payment Mode'
                        value={paymentMode}
                        onChange={(event) => setPaymentmode(event.target.value)}
                        displayEmpty
                        selectedValue={paymentMode}
                        renderValue={() => <span>{paymentMode}</span>}
                        >
                        <MenuItem value="UPI" >UPI</MenuItem>
                        <MenuItem value="Cards">Cards</MenuItem>
                        <MenuItem value="Net Banking" >Net Banking</MenuItem>
                        <MenuItem value="cash on delivery" >Cash on Delivery</MenuItem>
                        
                    </StyledSelect>
                </FormControl></Grid>
                <Grid item sx={{width:'100%',}}>
                    <Typography style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Gadget Model</Typography>
                    <InputBase className='inputbase' placeholder="Select" id='gadgetmodel' value={gadgetModel} 
                        onChange={(event) => setGadgetmodel(event.target.value)}/>
                </Grid>
                <Grid item sx={{width:'100%',}}><FormControl fullWidth >
                    <Typography sx={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Delivered by</Typography>
                    <StyledSelect style={{height:'30px'}}
                        labelId="deliveredby"
                        label='Delivered by'
                        value={deliveredBy}
                        onChange={(event) => setDeliveredby(event.target.value)}
                        displayEmpty
                        selectedValue={deliveredBy}
                        renderValue={() => <span>{deliveredBy}</span>}
                        >
                        <MenuItem value="UPI" >UPI</MenuItem>
                        <MenuItem value="Cards">Cards</MenuItem>
                        <MenuItem value="Net Banking" >Net Banking</MenuItem>
                        <MenuItem value="cash on delivery" >Cash on Delivery</MenuItem>
                    </StyledSelect>
                </FormControl></Grid>
                <Grid item sx={{width:'100%',}}>
                    <Typography style={{width:'100%',fontFamily: 'Work sans',fontWeight: 400, fontSize: '12px', color: '#000', lineHeight: '14.08px'}}>Service done</Typography>
                    <InputBase className='inputbase' placeholder="Type Issue" id='servicedone' value={serviceDone} 
                        onChange={(event) => setServicedone(event.target.value)}/>
                </Grid>
                <Grid item sx={{width:'100%',marginTop:'2px'}}>
                    <Grid container sx={{display:'flex',flexDirection:'row'}}>
                        <Grid item xs={1.5}>
                             <Typography style={{fontFamily: 'Work Sans',
                                fontSize: '12px',
                                fontWeight: '400',
                                lineHeight: '14px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                                }}>
                             *Note :
                            </Typography>
                        </Grid>
                        <Grid item xs={10.5}>
                             <Typography style={{fontFamily: 'Work Sans',
                                fontSize: '12px',
                                fontWeight: '400',
                                lineHeight: '14px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                                }}>
                             Upload 3 images
                            </Typography>
                            <Grid container style={{display:'flex',flexDirection:'column',fontFamily: 'Work Sans',marginTop:'3px',gap:'3px',
                                fontSize: '12px',
                                fontWeight: '400',
                                lineHeight: '14px',
                                letterSpacing: '0em',
                                textAlign: 'left',}}>
                                <Grid item>1.Image Before Repair</Grid>
                                <Grid item>2.Image after Repair</Grid>
                                <Grid item>3.Phone with part replaced side by side</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box style={{backgroundColor: '#F5F5F5',borderRadius:'5px',padding:'17px'}}>
                        <Grid container sx={{display:'flex',flexDirection:'row' ,gap:'5px'}}>
                            <Grid item xs={5}>
                                <label>
                                <input
                                    style={{ display: 'none' }}
                                    id="upload-photo"
                                    name="upload-photo"
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    />
                                    <StyledButton
                                    startIcon={<FileUploadOutlinedIcon style={{ borderRight: '1px solid #B3B3B3', margin: 0 }} />}
                                    component="span"
                                    >
                                    Choose file
                                    </StyledButton></label>
                            </Grid>
                            <Grid item>
                                {selectedFiles.map((file, index) => (
                                <Typography key={index} style={{fontSize: '12px',fontFamily: 'Work Sans',
                                fontWeight: '400',
                                lineHeight: '14px',
                                letterSpacing: '0em',
                                textAlign: 'left', display:'flex',alignItems:'center'}} ><CloseIcon style={{color:'red',fontSize: '12px'}} onClick={() => handleFileRemove(file)} />{file.name}</Typography>
                                ))}
                            </Grid>
                        </Grid>
                        <Typography style={{width:'100%',textAlign:'center',fontSize: '12px',fontFamily: 'Work Sans',marginTop:'5px',marginBottom:'5px',
                                fontWeight: '400',
                                lineHeight: '14.08px',
                                letterSpacing: '0em',}}>or</Typography>
                        <Grid container sx={{display:'flex',flexDirection:'column'}}>
                         <Grid item><Typography style={{width:'100%',textAlign:'left',fontSize: '12px',fontFamily: 'Work Sans',
                                fontWeight: '400',
                                lineHeight: '14.08px',
                                letterSpacing: '0em',}}>Web URL</Typography></Grid>
                         <Grid item>
                         <TextField className='textfeild2'
                         value={url} 
                         onChange={(event) => setURL(event.target.value)}
                         placeholder='https://images.unsplash.com/..'
                            id="standard-start-adornment"
                            InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Box
                                sx={{
                                    fontSize: '12px',
                                    color: '#333',
                                    borderRight: '1px solid #B7B7B7',
                                    padding:'0 5px',
                                }}
                                >
                                <BiLink style={{fontSize:'18px',marginTop:'4px'}}/>
                                </Box>
                            </InputAdornment>
                            ),
                            }}
                            variant="standard"
                            />
                         </Grid>
                         <Grid item sx={{textAlign:'Right',marginTop:'15px'}}>
                          <StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
                          <StyledSaveButton onClick={handleSave}>Save</StyledSaveButton>
                          <ToastContainer position="bottom-right" className="custom-toast-container"/>
                         </Grid>
                        </Grid>
                        
                    </Box>
                    
                </Grid>
                <Grid item>
                            <Typography
                              sx={{
                                fontFamily: 'Work Sans',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '14px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                              }}
                            >
                              Signature
                            </Typography>
                    <Box style={{backgroundColor: '#F4F4F4',borderRadius:'5px',padding:'17px',boxShadow: '0px 1px 4px 0px #00000080'
,border:'1px solid #B7B7B7',padding:'17px'}}>
                        <Grid container sx={{display:'flex',flexDirection:'row',wrap:'nowrap',width:'100%'}}>
                           <Grid item xs={7}>
                                <Typography sx={{
                                fontFamily: 'Work Sans',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '14px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                              }}>Place your signature here</Typography>
                           </Grid>
                           <Grid item sx={{textAlign:'end'}} xs={5}>
                            <Button startIcon={<CancelSharpIcon sx={{margin:'0',fontSize:'13px'}}/>}sx={{padding:'0',fontFamily: 'Work Sans',float:'right',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '14px',
                                textTransform:'none !important',
                                letterSpacing: '0em',background:'none',color:'#000'}} onClick={clearSignature}>
                              Clear
                            </Button>
                           </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',borderBottom:'1px solid #000' }}>
                         
                        <SignatureCanvas
                          ref={signatureRef}
                          penColor="black"
                          canvasProps={{ height: 180, width:width<=335?220:width<=405?250:300 }}
                          sx={{borderBottom:'1px solid #000'}}
                        />
                    </Grid>

                    </Box>
                </Grid>
              </Grid>
             </Grid>
             <Grid container style={{display:'flex',flexDirection:'column'}}>
                  <SubmitButton
              onClick={handleSubmit}
              sx={{ fontSize: 12, '&:hover': { backgroundColor: '#505050' }, margin: '40px 0px 10px 0' }}
              variant='contained'
            >
              Submit
            </SubmitButton>
            <ResetButton
              onClick={handleReset}
              sx={{ fontSize: 12, '&:hover': { backgroundColor: '#B7B7B7' }, margin: '0' }}
              variant='contained'
            >
              Reset
            </ ResetButton>
            {/* <ToastContainer position="bottom-right" className="custom-toast-container"/> */}
            </Grid>
          </Box>
      </Box>
    );
  }
  
  
  
  
  