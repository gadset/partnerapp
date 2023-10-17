import { getAuth, signInWithPhoneNumber } from "firebase/auth"
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { Link , useHistory} from 'react-router-dom';
import Demo from "./getlocation";
import { useDispatch } from "react-redux";
import { setAddressValue, setallValue, setemailValue, setnameValue } from "../reduxslice";
import { Form, Alert } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {auth} from './firebase.config'
import {RecaptchaVerifier} from 'firebase/auth'
import Phonenumber from "../Login/Phonenumber.js";
import { setMobileValue } from "../reduxslice";
import { toast } from "react-toastify";
import { SubscribeUser } from '../subscription.js';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [address, setaddress] = useState(null);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [verified, setverified] = useState(false);
  const [loggedin, setloggedin] = useState(false);
  const [docid, setdocid] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const isloggedin = localStorage.getItem('partnerid');
if(isloggedin){
  history.push({
    pathname : '/home',
 });
 toast.success("already logged in");
}
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = async(e) => {
    dispatch(setAddressValue(address));
    dispatch(setnameValue(name));
    dispatch(setemailValue(email));
    e.preventDefault();
  //  const docRef = doc(firestoredb, "Partners", number);
    const data = {
               "email" : email,
               "name" : name,
               "address" : 'IIT JODHPUR',
               "number" : number,
               "rating" : Math.floor(Math.random() * 3)+2,
               "percentage" : Math.floor(Math.random() * 50)+50,
               }

               fetch(process.env.REACT_APP_BACKEND + 'partner', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
              })
                .then(response => response.json())
                .then(json => {
                  localStorage.setItem('partnerid', JSON.stringify(json.id));
                  SubscribeUser(json.id);
                  history.push({
                    pathname: '/home',
                  });
                });
  };
  function onCaptchaVerifier(){
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
          getOtp()
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      },auth);
    }
  }
  function getOtp(e){
    e.preventDefault();
    onCaptchaVerifier()
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    
    const appVerifier = window.recaptchaVerifier;
    dispatch(setMobileValue(number));
    console.log(number)
    const auth = getAuth();
    signInWithPhoneNumber(auth, number, appVerifier)
    .then((confirmationResult) => {
      setFlag(true);
      setResult(confirmationResult);
    }).catch((err) => {
      console.error(err);
      setError(err.message);
    });
    
  }

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      setverified(true);
      alert("number verified");
      console.log(number);
      setloggedin(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Grid container sx={{margin:'4px', padding:'4px', display:'flex', flexDirection:'column'}}>
        <Typography>Sign in first to see the customer requirements</Typography>
        {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast> 
        <Button onClick={() => setShow(true)}>Show Toast</Button>*/}
    {error && <Alert variant="danger">{error}</Alert>}
    
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none", margin:'auto' }}>
          <Form.Group style={{margin:'8px'}} controlId="formBasicEmail">
            <PhoneInput
            defaultCountry="IN"
              value={number}
              onChange={setNumber}
              inputComponent={Phonenumber}
              placeholder="Enter phone number"
            />
            <div style={{margin:'8px'}} id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button color="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="contained" color="primary" id="sendotp"  sx={{ background: '#056AB5',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '20px',}}>
              Send code
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group style={{margin:'8px'}} controlId="formBasicOtp">
            <TextField
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              size='small'
              autoFocus
            />
            {/* <otpInput OTPLength={6} otpType='number' disabled={false} autofocus onChange={(e) => setOtp(e.target.value)}></otpInput> */}
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button color="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="contained" color="primary"  sx={{ background: '#056AB5',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '20px',}}>
              Verify
            </Button>
          </div>
        </Form>
        {
          loggedin ? 
          <Grid item> <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        /> {/*
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        /> */}
          <TextField
          label="Name"
          type="name"
          variant="outlined"
          value={name}
          onChange={handleChangeName}
        />
        <Typography> Set your service center address </Typography>
        <Demo setaddress={setaddress}/>
        <Button type="submit" variant="contained" onClick={handleSubmit}>Submit</Button>
        </Grid>
        :
        <></>
        }
      
    </Grid>
  );
}

export default LoginForm;
