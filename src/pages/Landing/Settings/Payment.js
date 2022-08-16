import React, { useState } from "react";

import ErrorIcon from '@mui/icons-material/Error';

import {
    Box, List, Grid, ListItem, TextField, Switch, Button
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        padding : '10px',
        marginTop : '50px',
        
        "& .MuiListItem-root" : {
            justifyContent : 'space-between',
            borderBottom : '1px solid #272B30',
            fontSize : '16px', 
            fontWeight : 'bold',
            padding : '10px 0px',
            marginBottom : '10px'
        },
        "& .MuiButton-root" : {
            width : '100px',
            height : '40px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            border : '2px solid #272B30',
            borderRadius : '12px',
            padding : '10px',
        },
    },
    paymentTip : {
        width : '16px',
        height : '32px',
        background : '#FFBC99#B5E4CA',
        borderRadius : '4px',
    },
    saveButton : {
        background : '#2A85FF !important',
        border : 'none !important',
    }
}))

const Payment = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box sx={{display : 'flex', alignItems : 'center', mb : 3}}>
                <Box className={classes.paymentTip} />
                <Box sx={{fontSize : '18px', fontWeight : 'bold', ml : 2}}> Payment </Box>
            </Box>

            <ListItem>
                <Box sx={{mb : 1}}>
                    Paypal
                    <ErrorIcon sx={{ml : 1}}/>
                </Box>
                <Button variant="outlined">
                    Update
                </Button>
            </ListItem>

            <Box sx={{fontSize : '16px', fontWeight : 'bold', mt : 2}}>
                tam@ui8.net
            </Box>
            <Box sx={{mt : 1, mb : 2}}>
                payout fee is 1% of the amount transferred, with a minimum of USD $0.25 and a maximum of USD $20
            </Box>
            <Button variant="contained" className={classes.saveButton}>
                Save
            </Button>
        </Box>
    );
}

export default Payment;