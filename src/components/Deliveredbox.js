import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Deliveredbox({model,issue, bid,device}) {
  return (
    <Box container sx={{ margin: '0'}}>
            <Grid container style={{display: 'flex',justifyContent:'center', minHeight: '90px' ,flexDirection: 'column', padding: '15px 10px', border: '1px solid #A19F9F' ,backgroundColor: '#DEDEDE', borderRadius: '5px', position: 'relative'}}>
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
                            {device}
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
                    <Grid item xs={8.5}>
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
                            Amount
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
                            {bid}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
  )
}
