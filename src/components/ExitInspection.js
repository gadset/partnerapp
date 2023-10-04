import React, {useState, useEffect} from 'react'
import { Box, Grid , Typography, Button, TextField, InputAdornment, Divider, FormGroup, FormControlLabel, } from '@mui/material'
import OrderEntryAutocomplete from './OrderEntryAutocomplete'
import './EntryInspection.css';
import './OrderEntry.css'
import styled from '@emotion/styled';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { BiLink } from "react-icons/bi";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import SignatureCanvas from 'react-signature-canvas';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


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
    { label: 'Dead'},
    { label: 'On' },
    { label: 'Display dead but phone on',},
]

const reparing = [
    { label : 'Power Button' },
    { label : 'Ear Speaker' },
    { label : 'Network' },
    { label : 'Mic' },
    { label : 'Touch' },
    { label : 'Fingerprint Sensor' },
    { label : 'Volume Up Button' },
    { label : 'Volume Down Button' },
    { label : 'Charging Pin' },
    { label : 'Front Camera' },
    { label : 'Rear Camera' },
    { label : 'Headphone jack' },
    { label : 'Flash Light' },
    { label : 'Proximity Sensor' },
    { label : 'Auto Rotation' },
    { label : 'LCD' },
    { label : 'Speaker' },
    { label : 'Brightness' },
    { label : 'Ringer' },
]

function EntryInspection() {
    const [orderNo, setOrderNo] = useState('');
    const [phoneCondition, setPhoneCondition] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [url, setURL] = useState('');
    const [data, setData] = useState(null);
    const [signatureData, setSignatureData] = useState(null);
    const [inspection, setInspection] = useState('');
    const [whatsWorking, setWhatsWorking] = useState(
        reparing.reduce((acc, data) => {
          acc[data.label] = false;
          return acc;
        }, {})
    );


    const [width, setWidth] = useState('');
    const [formData, setFormData] = useState('');

	const location = useLocation();
	const history = useHistory();
  	const id = location?.state?.id;


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
    

    const signatureRef = React.useRef();
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

    const handleSignatureChange = () => {
        const signatureImage = signatureRef.current.toDataURL();
        setSignatureData(signatureImage);
        console.log(signatureImage);// You can log it here for immediate feedback
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
        setWhatsWorking('')
    }


    const handleToggle = (event) => {
        const { name, checked } = event.target;
        setWhatsWorking({ ...whatsWorking, [name]: checked });
    };

    const handleSubmit = () => {
        const signatureImage = signatureRef.current.toDataURL();
        setSignatureData(signatureImage);
        console.log(signatureImage);
        const fromInfo = {
			id,
            phoneCondition,
            data,
            whatsWorking,
            signatureImage,
            inspection
        }
        console.log(fromInfo)

        try {
            const res = axios.post(process.env.REACT_APP_BACKEND + 'order/exit', {id, fromInfo} , {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.data);
            console.log('entered')
            clearForm();
			history.push('/home');
        } catch (error) {
            console.error('Fetch error', error);
        }
    }


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
                    Exit Inspection Form
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
						<TextField value={id}
							disabled />
                        {/* <OrderEntryAutocomplete options={locations} value={orderNo} setValue={setOrderNo} /> */}
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
                            width: '100%',
                            margin: '5px 0'
                        }}
                        spacing={2}
                        container
                    >

                        {reparing.map((data) => (
                            <Grid className='switches' sx={{margin:'5px', border: '0px 0px 1px 0px'}}>
                                <FormControlLabel
                                    key={data.label}
                                    control={
                                        <Switch
                                        checked={whatsWorking[data.label]}
                                        onChange={handleToggle}
                                        variant='solid'
                                        name={data.label}
                                        />
                                    }
                                    label={data.label}
                                    color='success'
                                    labelPlacement='top'
                                />
                            </Grid>
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
						<TextField value={inspection} onChange={(event) => setInspection(event.target.value)} />
                        {/* <OrderEntryAutocomplete options={locations} value={inspection} setValue={setInspection} /> */}
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
                            canvasProps={{ height: 180, width: width <= 335 ? 250 : width <= 405 ? 250 : 300 }}
                            sx={{ borderBottom: '1px solid #000', marginBottom: '10px' }}
                            onChange={handleSignatureChange}
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