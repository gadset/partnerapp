import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
// import Geocode from "react-geocode";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  setAddressValue,
  setallValue,
  setemailValue,
  setnameValue,
  setPartnerIdValue,
} from "../../reduxslice.js";
import { SubscribeUser } from "../../subscription.js";

const DetailsPage = ({
				name,
				setName,
				email,
				setEmail,
				address,
				setaddress,
				handleSubmit,
				number
}) => {
  const [pinCode, setPinCode] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const theme = useTheme()

const [place, setplace] = useState("")
const [latlng, setlatlng] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const [cookies, setCookies] = useCookies(["token"]);
//   Geocode.setApiKey("AIzaSyBKIByYCgUyIZYIfQUchm4ZVtowK0tvfhg");

  const handlenext = () => {
	const addStr = `${flatNumber}, ${landmark}, ${city}, ${state}, ${pinCode}`;
	setaddress(addStr)
	dispatch(setAddressValue(addStr));
    dispatch(setnameValue(name));
    dispatch(setemailValue(email));
    // e.preventDefault();
    //  const docRef = doc(firestoredb, "Partners", number);
    const data = {
      email: email,
      name: name,
      address: addStr,
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
  }
  return (
    <Grid container sx={{ marginLeft: 0, width: "100%", display:'flex', flexDirection:'column', alignItems:'center' ,marginBottom: '30px',}}>
        <Grid container spacing={2} sx={{ width: "95%",  display:'flex', flexDirection:'column',marginTop:theme.spacing(1),borderRadius : '10px' ,textAlign:'left' }}>
          <Typography variant="h4">Name<sup>*</sup></Typography>
            <TextField
              variant="outlined"
              required
              id="name"
              name="name"
              value={name}
              size='small'
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
       
          <Typography variant="h4">Email<sup>*</sup></Typography>
            <TextField
              variant="outlined"
              required
              fullWidth
              size='small'
              id="mobileNumber"
              name="mobileNumber"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <Typography variant="h4">Address<sup>*</sup></Typography>

            <Grid container sx={{display:'flex', flexDirection : 'row', mt:1, mb:1, justifyContent:'space-between'}}>
            
            <TextField
              variant="outlined"
              required
              size='small'
              id="pinCode"
              name="pinCode"
              placeholder="Pin Code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              sx={{width:'48%'}}
            /> 

            <TextField
              variant="outlined"
              required
              size='small'
              id="state"
              name="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              sx={{width:'48%'}}
            />
            </Grid>

            <Grid container sx={{display:'flex', flexDirection : 'row', mt:1, mb:1, justifyContent:'space-between'}}>
            
            <TextField
              variant="outlined"
              required
              fullWidth
              id="city"
              size='small'
              name="city"
              value={city}
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
              sx={{width:'48%'}}
            />

            <TextField
              variant="outlined"
              required
              fullWidth
              size='small'
              id="flatNumber"
              name="flatNumber"
              placeholder="House No."
              value={flatNumber}
              onChange={(e) => setFlatNumber(e.target.value)}
              sx={{width:'48%'}}
            />
            </Grid>
           

            <TextField
              variant="outlined"
              fullWidth
              id="Area"
              size='small'
              name="Area"
              placeholder="Flat, Area, Company, Apartment"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />

        </Grid>
        
        <Box sx={{ mt: 1, textAlign: "right" }}>
          <Button type="submit" onClick={handlenext} >
            Add Details
          </Button>
        </Box>
    </Grid>
  );
};

export default DetailsPage;
