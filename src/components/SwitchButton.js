import React from 'react';
import { Switch, FormControlLabel, Box, Typography } from '@mui/material'
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';


const MaterialUISwitch = styled(Switch) (({ theme }) => ({
    width: 60,
    height: 34,
    marginLeft: 20,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          // backgroundImage: `url('/photos/like.png')`,
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

const SwitchButton = ({name}) => {
    const theme = useTheme();
  return (
    <Box  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5px 10px', backgroundColor: '#F4F4F4', borderRadius: '5px', margin: '3.5px' }}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '12px',
            fontFamily: 'Work Sans',
            fontWeight: 500
          }}
        >
          {name}
        </Typography>
        <FormControlLabel 
            control={<MaterialUISwitch defaultchecked/>}
        />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 10,
            color: '#6A6A6A',
            fontFamily: 'Work Sans',
          }}
        >
          Working
        </Typography>
    </Box>
  )
}

export default SwitchButton;