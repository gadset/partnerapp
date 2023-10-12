

import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Timer from './Timer';
import { Link } from 'react-router-dom';


const ConfirmBidsBox = ({model,device,issue, textDecorationNone}) => {

    return (
        <Box container sx={{ margin: '10px 0'}}>
            <Grid container style={{display: 'flex',justifyContent:'center' ,flexDirection: 'column', padding: '15px 10px', border: '1px solid #A19F9F' ,backgroundColor: '#DEDEDE', borderRadius: '5px', position: 'relative', textDecorationNone}}>
                <Link to='/entryInspection'>
                    <Grid style={{padding: "5px 10px", backgroundColor: '#333333', border: '1px solid #333333', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', height: '22px', position: 'absolute', float:'right', right: '20px', bottom: '-10px'}}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='10px'
                            lineHeight='11.73px'
                            color='#FFFFFF'
                            textDecorationNone
                        >
                            Start Reparing
                        </Typography>

                    </Grid>
                </Link>
                <Grid container style={{display: 'flex', flexDirection: 'row', margin: '3px 0'}}>
                    <Grid item xs={2.2}>
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
                    <Grid item xs={9.3}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            {device}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', flexDirection: 'row', margin: '3px 0'}}>
                    <Grid item xs={2.2}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                            textDecorationNone={true}
                        >
                            Model
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
                    <Grid item xs={9.3}>
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                        >
                            {model}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', flexDirection: 'row', margin: '3px 0'}}>
                    <Grid item xs={2.2}>
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
                    <Grid item xs={9.3}>
                    {issue.map((issu, index) => (
                            <Grid
                                item
                                key={index}
                                sx={{
                                    fontFamily: 'Work Sans',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '16.42px',
                                    color: '#333333',
                                    textAlign: 'left',
                                    whiteSpace: 'pre-line'
                                }}>
                                {issu}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ConfirmBidsBox;