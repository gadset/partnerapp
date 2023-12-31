import React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IoCallOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ImHome } from 'react-icons/im';
import { IconContext } from 'react-icons';

export default function Footer() {
    const Mobile = useMediaQuery('(max-width:400px)');
  return (
    <Box sx={{ zIndex: 999,position:'fixed',bottom:'0', width: '100%' }}>
      <Paper>
        <BottomNavigation
          sx={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'space-around', 
            width: '100%',
            borderTop:'1px solid #333333',
            boxShadow:'none'
          }}
          showLabels
        >
          <BottomNavigationAction
            label="Call"
            icon={
              <IconContext.Provider value={{ size: '23px' }}>
                <IoCallOutline />
              </IconContext.Provider>
            }
            style={{ color: '#333333' }}
            sx={{
                padding:Mobile? 0:'auto', 
                minWidth:Mobile? '60px':'80px', 
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                size:'23px'

            }}
          />
          <BottomNavigationAction
            label="Whatsapp"
            icon={<WhatsAppIcon />}
            style={{ color: '#333333' }}
            sx={{
                padding:Mobile? 0:'auto', 
                minWidth:Mobile? '60px':'80px', 
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                size:'23px'

            }}
          />
          <BottomNavigationAction
            label="Chat"
            icon={
              <IconContext.Provider value={{ size: '23px' }}>
                <IoChatbubbleEllipsesOutline />
              </IconContext.Provider>
            }
            style={{ color: '#333333' }}
            sx={{
                padding:Mobile? 0:'auto', 
                minWidth:Mobile? '60px':'80px', 
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                size:'23px'

            }}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<AccountCircleOutlinedIcon />}
            style={{ color: '#333333' }}
            sx={{
                padding:Mobile? 0:'auto',
                minWidth:Mobile? '60px':'80px', 
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                size:'23px'
            }}
          />
          <BottomNavigationAction
            label="Home"
            icon={
              <IconContext.Provider value={{ size: '23px' }}>
                <ImHome />
              </IconContext.Provider>
            }
            style={{ color: '#333333' }}
            sx={{
                padding:Mobile? 0:'auto', 
                minWidth:Mobile? '60px':'80px',
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                size:'23px'
            }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
