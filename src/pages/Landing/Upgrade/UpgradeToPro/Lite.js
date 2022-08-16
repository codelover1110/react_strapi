import React, { useState } from "react";

import ErrorIcon from '@mui/icons-material/Error';
import CheckIcon from '@mui/icons-material/Check';

import {
    Box, Button, Divider, Grid, ListItem, Paper, TextField,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        height : '100%',
        margin : '30px',
        marginRight : '0px',
        paddingRight : '100px',
        borderRight : '1px solid lightgrey',
        
        "& .MuiButton-root" : {
            width : '300px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            border : '2px solid #272B30',
            borderRadius : '12px',
            padding : '10px',
        },

        "& .MuiDivider-root" : {
            marginTop : '20px',
            marginBottom : '20px'
        },

        "& .MuiListItem-root" : {
            "& .MuiSvgIcon-root" : {
                color : '#B5E4CA',
                marginRight : '20px'
            }
        }
    },
    listTip : {
        width : '16px',
        height : '32px',
        background : '#B1E5FC',
        borderRadius : '4px',
    },
}))

const Lite = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Paper>
                <Box>
                    <Box sx={{display : 'flex', alignItems : 'center', mb : 3}}>
                        <Box className={classes.listTip} />
                        <Box sx={{fontSize : '22px', fontWeight : 'bold', ml : 2}}> Lite </Box>
                    </Box>
                    
                    <Box sx={{color : '#9A9FA5'}}>
                        Basic shop and tools to set up your profile
                    </Box>

                    <Divider />

                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box sx={{fontSize : '64px', mr : 4}}>
                            8%
                        </Box>
                        <Box sx={{color : '#9A9FA5', mr : 10}}>
                            of the monthly income you earn on the market
                        </Box>
                        <ErrorIcon />
                    </Box>
                        
                    <Divider />

                    <ListItem>
                        <CheckIcon/>
                        Basic shop profile
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        Customer communication tools
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        100 promotion posts
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        Maximum 50 product uploads
                    </ListItem>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'center'}}>
                    <Button variant="outlined">
                        Your plan
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default Lite;
