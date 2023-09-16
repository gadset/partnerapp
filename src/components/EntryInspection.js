import React, {useState, useRef, useEffect} from 'react'
import { Box, Grid , Typography, Button, TextField, InputAdornment, Divider,Switch, FormControlLabel, } from '@mui/material'
import OrderEntryAutocomplete from './OrderEntryAutocomplete'
import './OrderEntry.css'
import styled from '@emotion/styled';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { BiLink } from "react-icons/bi";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './EntryInspection.css';
import SignatureCanvas from 'react-signature-canvas';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import { useTheme } from '@mui/material/styles';
import SwitchButton from './SwitchButton';

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

const locations = [
    { label: 'Vizag', year: 1994 },
    { label: 'Hyderabad', year: 1972 },
    { label: 'Guntur', year: 1974 },
    { label: 'Tirupati', year: 2008 },
    { label: 'chirala', year: 1957 },
    { label: "Tuni", year: 1993 },
    { label: 'Rajamundry', year: 1994 },
]

const reparing = [
    { label : 'Power Button' },
    { label : 'Network' },
    { label : 'Ear Speaker' },
    { label : 'Volume Down Button' },
    { label : 'Mic' },
    { label : 'Touch' },
    { label : 'Fingerprint Sensor' },
    { label : 'Volume Down Button' },
    { label : 'Front Camera' },
    { label : 'Rear Camera' },
    { label : 'Speaker' },
    { label : 'Charging Pin' },
    { label : 'Headphone jack' },
    { label : 'Flash Light' },
    { label : 'Proximity Sensor' },
    { label : 'LCD' },
    { label : 'Auto Rotation' },
    { label : 'Brightness' },
    { label : 'Ringer' },
    { label : 'Brightness' },

]

const MaterialUISwitch = styled(Switch) (({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('/photos/like.png')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },

    '& .MuiSwitch-thumb': {
    //   backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('/photos/thumbs-down-silhouette (1).png')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
}));

function EntryInspection() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [url, setURL] = useState('');
    const [data, setData] = useState(null);
    const [width, setWidth] = useState('');
    const [orderNo, setOrderNo] = useState('');
    const [phoneCondition, setPhoneCondition] = useState('');
    const [inspection, setInspection] = useState('');
    const [switches, setSwitches] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
    const [formData, setFormData] = useState(null);
    const [powerButton, setPowerButton] = useState('');
    const [network, setNetwork] = useState('');
    const [Earspeaker, setEarspeaker] = useState('');
    const [volumedown, setVolumeDown] = useState('');
    const [mic, setMic] = useState('');
    const [touch, setTouch] = useState('');
    const [Fingerprint, setFingerprint] = useState('');
    const [frontcamera, setFrontcamera] = useState('');
    const [rearcamera, setRearcamera] = useState('');
    const [Speaker, setSpeaker] = useState('');
    const [chargingpin, setChargingpin] = useState('');
    const [headphone, setHeadphone] = useState('');
    const [flashlight, setFlashlight] = useState('');
    const [proximitysensor, setProximitysensor] = useState('');
    const [lcd, setLCD] = useState('');
    const [autorotation, setAutorotation] = useState('');
    const [Brightness, setBrightness] = useState('');
    const [ringer, setRinger] = useState('');


    const theme = useTheme();

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

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
        console.log(selectedFiles);
    };

    const handleFileRemove = (fileToRemove) => {
        setSelectedFiles((prevFiles) => prevFiles.filter(file => file !== fileToRemove));
    };

    const handleCancel = () => {
        setSelectedFiles([]);
        setURL('');
        setData(null);
        toast.info('Changes discarded', { autoClose: 2500 });
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

    const clearForm = () => {
        setInspection('')
        setOrderNo('')
        setPhoneCondition('')
        clearSignature()
        handleCancel()
        // setSwitches([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
        // handleCancel()
    }

    const handleSwitchToggle = (index) => {
        const newSwitches = [...switches];
        newSwitches[index] = !newSwitches[index];
        setSwitches(newSwitches);
        console.log('clicked')
    }

    const handleSubmit = (data) => {
        const signatureData = signatureRef.current.toDataURL();
        // const imageFile = imageInputRef.current.files[0];

        setSignatureData(signatureData)
        // setURL(imageFile)

        const newData = {
            orderNo,
            phoneCondition,
            inspection,
            signatureData,
            url,
            switches
        }
        setFormData(newData);
        console.log(formData);
        clearForm()
    };



  return (
    <>
        <Box style={{display: 'flex', flexDirection: 'column', padding: '10px 30px', backgroundColor: '#FFFFFF'}}>
            <Grid item sx={{padding: 0, margin: '10px 0 5px 0'}}>
                <Typography
                    fontFamily='Work Sans'
                    fontSize='16px'
                    fontWeight= '400'
                    lineHeight='18.77px'
                    textAlign='left'
                >
                    Entry Inspection Form
                </Typography>
            </Grid>

            <Grid component='form' container style={{display: 'flex', flexDirection: 'column', margin: '5px 0'}}>
                <Grid container style={{display: 'flex', flexDirection: 'column',}}>
                    <Grid item sx={{padding: 0}}>
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='12px'
                            color='#000000'
                            lineHeight='14.08px'
                            textAlign='left'
                        >
                            Order No
                        </Typography>
                    </Grid>
                    <Grid>
                        <OrderEntryAutocomplete options={locations} value={orderNo} setValue={setOrderNo} />
                    </Grid>
                </Grid>

                <Grid container style={{display: 'flex', flexDirection: 'column'}}>
                    <Grid item sx={{padding: 0}}>
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='12px'
                            color='#000000'
                            lineHeight='14.08px'
                            textAlign='left'
                        >
                            Phone Condition
                        </Typography>
                    </Grid>
                    <Grid>
                        <OrderEntryAutocomplete options={locations} value={phoneCondition} setValue={setPhoneCondition} />
                    </Grid>
                </Grid>

                <Grid item sx={{width:'100%',marginTop:'2px'}}>
                    <Grid container sx={{display:'flex',flexDirection:'row'}}>
                        <Grid item xs={2}>
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
                        <Grid item xs={10}>
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


                <Grid container sx={{padding: 0, margin: '10px 0 5px 0'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        fontWeight= '400'
                        lineHeight='18.77px'
                        textAlign='left'
                    >
                        whats working and whats not
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid 
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginTop: '0px',
                            width: '100%',
                        }}
                        spacing={2}
                        container

                    >
                        
                        {reparing.map((label, index) => (
                            <SwitchButton checked={label} onChange={() => handleSwitchToggle(index)} xs={3} md={4} xl={4} key={index} name={label.label} />
                        ))}

                    </Grid>
                </Grid>

                <Grid item sx={{padding: 0, margin: '10px 0 5px 0'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        fontWeight= '400'
                        lineHeight='18.77px'
                        textAlign='left'
                    >
                        Section
                    </Typography>
                </Grid>

                <Grid container style={{display: 'flex', flexDirection: 'column'}}>
                    <Grid item sx={{padding: 0}}>
                        <Typography
                            fontFamily='Work Sans'
                            fontSize='12px'
                            color='#000000'
                            lineHeight='14.08px'
                            textAlign='left'
                        >
                            Inspection Done By
                        </Typography>
                    </Grid>
                    <Grid>
                        <OrderEntryAutocomplete options={locations} value={inspection} setValue={setInspection} />
                    </Grid>
                </Grid>

                <Grid item sx={{padding: 0, margin: '10px 0 5px 0'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontSize='16px'
                        fontWeight= '400'
                        lineHeight='18.77px'
                        textAlign='left'
                    >
                        Signature
                    </Typography>
                </Grid>

                <Grid container style={{display: 'flex', flexDirection: 'column', backgroundColor: '#F4F4F4', borderRadius: '5px'}}>
                            <Button startIcon={<CancelSharpIcon sx={{margin:'0',fontSize:'13px'}}/>}sx={{padding:'0',fontFamily: 'Work Sans',float:'right',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '14px',
                                textTransform:'none !important',
                                position: 'absolute',
                                float: 'right',
                                right: '30px',
                                padding:'10px',
                                letterSpacing: '0em',background:'none',color:'#000'}} onClick={clearSignature}
                            >
                              Clear
                            </Button>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                         
                        <SignatureCanvas
                          ref={signatureRef}
                          penColor="black"
                          canvasProps={{ height: 180, width:width<=335?250:width<=405?250:300 }}
                          sx={{borderBottom:'1px solid #000', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Divider variant={'middle'} style={{marginBottom: '15px', backgroundColor: '#000000'}} />
                </Grid>

                <SubmitButton onClick={handleSubmit}  sx={{borderRadius: 5, fontSize: 12, '&:hover': { backgroundColor: '#505050'}, margin: '40px 0px 10px 0'}} variant='contained'>Submit</SubmitButton>
                <ResetButton onClick={clearForm} sx={{borderRadius: 5, fontSize: 12, '&:hover': { backgroundColor: '#B7B7B7'}, margin: '0'}} variant='contained'>Reset</ResetButton>


            </Grid>

        </Box>
    </>
  )
}

export default EntryInspection