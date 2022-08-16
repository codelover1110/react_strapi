import React, { useState } from "react";

import SettingForm from "./SettingForm";

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        background : theme.palette.primary.main,
        padding : '50px',
        ['@media (max-width:900px)'] : {
            padding : '20px'
        }
    },
    dashboard : {
        fontSize : '40px',
        color : theme.palette.common.black,
        fontWeight : 'bold'
    }
}))
const Settings = () => {
    const classes = useStyles() ;
    
    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Settings
            </Box>
            <SettingForm />
        </Box>
    );
}

export default Settings;