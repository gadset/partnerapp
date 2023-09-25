

import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Timer from './Timer';


const CancelledBidsBox = ({phone,issue, bidEnd}) => {

    return (
        <Box container sx={{ margin: '20px 0 20px 0'}}>
            <Grid container style={{display: 'flex',justifyContent:'center', minHeight: '90px' ,flexDirection: 'column', padding: '15px 10px', border: '1px solid #A19F9F' ,backgroundColor: '#DEDEDE', borderRadius: '5px', position: 'relative'}}>
                {/* <Grid style={{padding: "5px 10px", backgroundColor: '#FFFFFF', border: '1px solid #333333', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', height: '22px', position: 'absolute', float:'right', right: '5px', top: '-10px'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontWeight='400'
                        fontSize='10px'
                        lineHeight='11.73px'
                        color='#333333'
                        textDecorationNone

                    >
                        Bid ends in
                    </Typography>
                    <Typography
                        fontFamily='Work Sans'
                        fontWeight='400'
                        fontSize='10px'
                        lineHeight='11.73px'
                        color='#333333'
                        paddingLeft='3px'
                    >
                        <Timer bidEndDate={bidEnd} />
                    </Typography>
                </Grid> */}
                {/* <Grid style={{padding: "5px 10px", backgroundColor: '#6B6A6A', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', height: '24px', width: '54px', position: 'absolute', right:0 ,left: 0, margin: '0 auto', bottom: '-10px', boxShadow:'0px 4px 4px 0px #00000040'}}>
                    <Typography
                        fontFamily='Work Sans'
                        fontWeight='400'
                        fontSize='10px'
                        lineHeight='11.73px'
                        color='#FFFFFF'

                    >
                        Rebid
                    </Typography>
                </Grid> */}
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
                        {/* <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                            whiteSpace='pre-line'
                        >
                            {issue}
                        </Typography> */}
                        <Typography
                            fontFamily='Work Sans'
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='16.42px'
                            color='#333333'
                            textAlign='left'
                            whiteSpace='pre-line'
                        >
                            {issue}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CancelledBidsBox;