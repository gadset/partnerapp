import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';




const NotificationCount = ({count}) => {
  return (
    <Box>
        <Grid item>
            <IconButton
                size='large'
                color='inherit'
                sx={{position: 'relative'}}
            >
                <NotificationsNoneOutlinedIcon style={{height : '30px', width: '30px'}} />
                {count > 0 && <Typography style={{position: 'absolute', float: 'right', right: '13px', top: '12px', fontSize: '8px', backgroundColor: '#FFFFFF', borderRadius: '50%', border: '1px solid black', padding: '0px 3px'}} >{count}</Typography> }
            </IconButton>
        </Grid>
    </Box>
  )
}

export default NotificationCount