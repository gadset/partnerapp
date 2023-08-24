

import * as React from 'react';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



const HomeBox = ({boxname, count}) => {
    return (
        <Grid 
            item 
            style={{color: '#B7B7B7', height: '100px' ,backgroundColor: '#F4F4F4' , border: '1px solid #B7B7B7', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '15px' ,padding: '15px 10px 15px 20px', width: '100%' }}
            // xs={5.5}
            // md={5} xl={5}
            // width='50%'
        >
            <Typography style={{fontFamily: 'Work Sans', fontSize: '40px', fontWeight: '300', color: '#000000', lineHeight: 1}}>{count}</Typography>
            <Typography  style={{fontFamily: 'Work Sans' , fontSize: '16px', fontWeight: '500', color: '#333333', lineHeight: 1, display: 'flex', justifyContent:'flex-start', textAlign: 'left'}}>{boxname}</Typography>

        </Grid>
    )
}

export default HomeBox;