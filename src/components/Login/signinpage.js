import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Demo from "../getlocation.js";
import { useDispatch } from "react-redux";
import {
  setAddressValue,
  setallValue,
  setemailValue,
  setnameValue,
  setPartnerIdValue,
} from "../../reduxslice.js";
import { Form, Alert } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { auth } from "../firebase.config.js";
import { RecaptchaVerifier } from "firebase/auth";
import Phonenumber from "./Phonenumber.js";
import { setMobileValue } from "../../reduxslice.js";
import { toast } from "react-toastify";
import { SubscribeUser } from "../../subscription.js";
import { useCookies } from "react-cookie";
import OtpInput from "otp-input-react";
import './styles.css';
import DetailsPage from "./DetailsPage.js";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [address, setaddress] = useState(null);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [showotp, setShowotp] = useState(false);
  const [loading , setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [verified, setverified] = useState(false);
  const [loggedin, setloggedin] = useState(false);
  const [docid, setdocid] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const [cookies, setCookies] = useCookies(["token"]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push({
        pathname: "/home",
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
  };

  const handleSubmit = async () => {
    dispatch(setAddressValue(address));
    dispatch(setnameValue(name));
    dispatch(setemailValue(email));
    // e.preventDefault();
    //  const docRef = doc(firestoredb, "Partners", number);
    const data = {
      email: email,
      name: name,
      address: address,
      number: number,
      rating: Math.floor(Math.random() * 3) + 2,
      percentage: Math.floor(Math.random() * 50) + 50,
    };

    fetch(process.env.REACT_APP_BACKEND + "partner/partnerlogin", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        //   localStorage.setItem('partnerid', JSON.stringify(json.id));
        //   SubscribeUser(json.id);
        setCookies("token", json?.token);
		localStorage.setItem("token", json?.token);
		SubscribeUser({partnerid : json?.id});
        history.push({
          pathname: "/home",
        });
      });
  };

  function onCaptchaVerifier() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            getOtp();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function getOtp(e) {
    e.preventDefault();
    if (number === "" || number.length !== 10 || number === undefined)
      return setError("Please enter a valid phone number!");
	setLoading(true);
    onCaptchaVerifier();
    const appVerifier = window.recaptchaVerifier;
	const formatPh = "+91" + number ;
    dispatch(setMobileValue(formatPh));
    const auth = getAuth();
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        setFlag(true);
		setLoading(false);
		setShowotp(true);
        setResult(confirmationResult);
      })
      .catch((err) => {
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
      fetch(
        process.env.REACT_APP_BACKEND + `partner/checkpartner?phone=${number}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.message === "GadsetPartner") {
            setCookies("token", json?.token);
			localStorage.setItem("token", json?.token);
			SubscribeUser({partnerid : json?.id});
            history.push({
              pathname: "/home",
            });
          } else {
            setloggedin(true);
          }
        });

      //   setverified(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Grid
      container
      sx={{
        margin: "4px",
        padding: "4px",
        display: "flex",
        flexDirection: "column",
		width : '100%'
      }}
    >

     <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "20px auto 10px auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "21.11px",
              fontFamily: "Work sans",
            }}
          >
			{ !loggedin ? 'Login' : "Enter Details"}
            
          </Typography>
        </Grid>
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

{
	!loggedin ? 
	<Grid
          container
          sx={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
            <Grid
            item
            sx={{
              width: "95%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "14px",
                lineHeight: "16.42px",
                fontFamily: "Work sans",
                color: "#000000",
              }}
            >
              Enter Number
            </Typography>
            <TextField
              sx={{
                width: "100%",
                border: "none",
                backgroundColor: "#D9D9D9",
                margin: "5px auto",
              }}
              type="tel"
              placeholder="995 587 9499"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Grid>
			<div style={{ margin: "8px" }} id="recaptcha-container"></div>
          {showotp && (
            <Grid
              item
              sx={{
                width: "95%",
                margin: "10px auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "14px",
                  lineHeight: "16.42px",
                  fontFamily: "Work sans",
                  color: "#000000",
                  mb: "5px",
                }}
              >
                Verify OTP
              </Typography>
              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container "
              ></OtpInput>
            </Grid>
          )}
		   <button
            onClick={!showotp ? getOtp : verifyOtp}
            className="btn-submit"
          >
            {" "}
            {loading && <i class="fa-solid fa-spinner fa-spin-pulse"></i>}{" "}
            {!showotp ? "Send OTP via Phone Number" : "Verify OTP"}{" "}
          </button>

		</Grid>

	: 
	<DetailsPage 
				name = {name}
				setName={setName}
				email = {email}
				setEmail = {setEmail}
				address = {address}
				setaddress = {setaddress}
				handleSubmit={handleSubmit}
				number={number}
	/>

}
 

          {/* <PhoneInput
            defaultCountry="IN"
              value={number}
              onChange={setNumber}
              inputComponent={Phonenumber}
              placeholder="Enter phone number"
            /> */}

      {/* {loggedin && (
        <Grid item>
          {" "}
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            sx={{ width: "90%" }}
          />{" "}
          {/*
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        /> 
          <TextField
            label="Name"
            type="name"
            variant="outlined"
            value={name}
            onChange={handleChangeName}
            sx={{ width: "90%" }}
          />
          <Demo setaddress={setaddress} />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      ) } */}
    </Grid>
  );
}

export default LoginForm;
