import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function Profile() {
  const [cookies, removeCookie] = useCookies(['token']);
  const [data, setdata] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if ( localStorage.getItem('token') === 'undefined') {
      history.push({ pathname: '/login' });
    }
  }, []);

  useEffect(() => {
    const Getdata = async() => {
      try {
        const res = await axios.get(process.env.REACT_APP_BACKEND + 'partner/getprofile', {
          headers: {
            // 'x-token': cookies.access_token
			'x-token' : localStorage.getItem('token'),
          }
        })
        const data = res.data;
		console.log(data);
        setdata(data?.partner);
      } catch(error) {
        console.error(error);
      }
    }
    Getdata()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    removeCookie('token');
    localStorage.clear();
    window.location.href = '/'
  }

  const handleUpdateDetails = (e) => {
	history.push('/updateDetails');
  }


  return (
    <Box>
          <Grid>
            <Grid item sx={{display: 'flex', justifyContent: 'center', width: '100%', margin: '20px auto 10px auto'}}>
                <Typography sx={{fontSize: '24px', fontFamily: 'Work sans'}} >
                    Profile
                </Typography>
            </Grid>
            <Grid container sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <Grid item sx={{width: '95%', margin: 'auto', display: 'flex', flexDirection: 'row'}}>
                    <Typography sx={{textAlign: 'left', fontSize: '18px', fontFamily: 'Work sans', color: '#000000'}} > <strong>Name</strong> : </Typography>
                    <Typography sx={{textAlign: 'left', fontSize: '18px',  fontFamily: 'Work sans', color: '#000000'}} > {data?.name}  </Typography>
                </Grid>
                <Grid item sx={{width: '95%', margin: 'auto', display: 'flex', flexDirection: 'row'}}>
                    <Typography sx={{textAlign: 'left', fontSize: '18px',  fontFamily: 'Work sans', color: '#000000'}} ><strong> Phone Number  </strong>: </Typography>
                    <Typography sx={{textAlign: 'left', fontSize: '18px', fontFamily: 'Work sans', color: '#000000'}} > {data?.phone} </Typography>
                </Grid>
				 <Grid item sx={{width: '95%', margin: 'auto', display: 'flex', flexDirection: 'row'}}>
                    <Typography sx={{textAlign: 'left', fontSize: '18px',  fontFamily: 'Work sans', color: '#000000'}} ><strong>Email </strong> : </Typography>
                    <Typography sx={{textAlign: 'left', fontSize: '18px', fontFamily: 'Work sans', color: '#000000'}} > {data?.emailId} </Typography>
                </Grid>
				 <Grid item sx={{width: '95%', margin: 'auto', display: 'flex', flexDirection: 'row'}}>
                    <Typography sx={{textAlign: 'left', fontSize: '18px',  fontFamily: 'Work sans', color: '#000000'}} ><strong>Rating</strong> : </Typography>
                    <Typography sx={{textAlign: 'left', fontSize: '18px', fontFamily: 'Work sans', color: '#000000'}} > {data?.rating} </Typography>
                </Grid>
                <Grid item sx={{width: '95%', margin: 'auto', display: 'flex', flexDirection: 'row'}}>
                    <Typography sx={{textAlign: 'left', fontSize: '18px', fontFamily: 'Work sans', color: '#000000'}} > <strong>Address</strong> : </Typography>
				
          <Typography variant='body1'>
			{`${data?.address}`}
			</Typography>
     
                    {/* <Typography sx={{textAlign: 'left', fontSize: '18px',  fontFamily: 'Work sans', color: '#000000'}} > {data.address}  </Typography> */}
                </Grid>
				<div style={{}}>

				
				                <button onClick={handleUpdateDetails} style={{width: '150px', padding: '8px 15px', border: 'none', backgroundColor: '#D9D9D9', borderRadius: '5px', margin: '10px 2.5%', cursor: 'pointer'}}> Update Details</button>
                <button onClick={handleSubmit} style={{width: '100px', padding: '8px 15px', border: 'none', backgroundColor: '#D9D9D9', borderRadius: '5px', margin: '10px 2.5%', cursor: 'pointer'}}> Sign Out </button>
				</div>
            </Grid>
          </Grid>
    </Box>
  );
}

export default Profile;
