

import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Timer from './Timer';
import { Link } from 'react-router-dom';


const PendingOrdersBox = ({phone,issue, textDecorationNone, id}) => {

    return (
        <Box container sx={{ margin: '10px 0'}}>
            <Grid container style={{display: 'flex',justifyContent:'center', minHeight: '90px' ,flexDirection: 'column', padding: '15px 10px', border: '1px solid #A19F9F' ,backgroundColor: '#DEDEDE', borderRadius: '5px', position: 'relative', textDecorationNone}}>
                <Link to={{pathname : '/exitInspection', state : {"id" : id}}}>
                    <Grid style={{padding: "5px 10px", backgroundColor: '#6B6A6A', border: '1px solid #333333', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', height: '22px', width: '177px' ,padding: '5px 10px', position: 'absolute', right: 0, left: 0, margin: '0 auto' ,bottom: '-10px'}}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='10px'
                            lineHeight='11.73px'
                            color='#FFFFFF'
                            textDecorationNone
                        >
                            Please complete the order
                        </Typography>
                    </Grid>
                </Link>
                <Grid container style={{display: 'flex', flexDirection: 'row', margin: '3px 0'}}>
                    <Grid item xs={3}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                            textDecorationNone={true}
                        >
                            Device 
                        </Typography>
                    </Grid>
                    <Grid item xs={0.5} style={{display:'flex', justifyContent: 'center', alignItems: 'top'}}>
                        <Typography
                                fontFamily='Work Sans'
                                fontWeight='400'
                                fontSize='14px'
                                lineHeight='16.42px'
                                color='#333333'
                                textAlign='left'
                            >
                            :
                        </Typography>
                    </Grid>
                    <Grid item xs={8.5}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            {phone}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', flexDirection: 'row', margin: '3px 0'}}>
                    <Grid item xs={3}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            Issue 
                        </Typography>
                    </Grid>
                    <Grid item xs={0.5} style={{display:'flex', justifyContent: 'center', alignItems: 'top'}}>
                        <Typography
                                fontFamily='Work Sans'
                                fontWeight='400'
                                fontSize='14px'
                                lineHeight='16.42px'
                                color='#333333'
                                textAlign='left'
                            >
                            :
                        </Typography>
                    </Grid>
                    <Grid item xs={8.5}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            {issue}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PendingOrdersBox;