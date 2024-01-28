import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css';
import NotificationCount from './NotificationCount';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useTheme } from "@emotion/react";
//import theme from '../theme';


function Navbar() {

	const [anchorElNav, setAnchorElNav] = React.useState(false);
	const history = useHistory();
  const isMobile = true;

  const notificationCount = 9;

    const handleOpenNavMenu = (event) => {
  //  setAnchorElNav(event.currentTarget);
  setAnchorElNav(true);
  };
    const handleCloseNavMenu = (nextlink) => {
  //  setAnchorElNav(null);
  setAnchorElNav(false);
  history.push({
    pathname: nextlink
  })
  };

  return (
      <Box
        spacing={2}
        container
        style={{display: 'flex', flexGrow:1, flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent:'flex-start', width: '100%', backgroundColor:'#FFFFFF' }}
      >
        <AppBar position='static' color='transparent' sx={{marginTop:0, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', width: '100%' }}>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Grid container style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}  >
                <Grid style={{display: 'flex', flexDirection: 'row'}} >
                  <Grid item >
                    <Typography variant='h4' style={{color: '#000', fontFamily: 'Cinzel Decorative', fontSize: '24px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}} >
                      Tamboola
                    </Typography>
                  </Grid>
                  <Grid item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography  style={{color: '#C2C2C2', backgroundColor: '#EBEBEB', border: '0.25px solid #C2C2C2', padding: '0px 7px', borderRadius: '3px', fontSize: '10px', marginLeft: '10px'}}>
                      Partner
                    </Typography>
                  </Grid>
                </Grid>
                <Grid style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start'}} >
                  <Grid item>
                    {/* <IconButton
                      size='large'
                      color='inherit'
                      sx={{position: 'relative'}}
                    >
                      <NotificationsActiveOutlinedIcon />
                    </IconButton> */}
                    <NotificationCount count={notificationCount} />
                  </Grid>
                  {/* <Grid item>
                    <IconButton
                      size='large'
                      color='inherit'
                     
                    >
                      <MenuIcon style={{height: '30px', width: '30px'}} />
                    </IconButton>
                  </Grid> */}
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
  )
}

export default Navbar