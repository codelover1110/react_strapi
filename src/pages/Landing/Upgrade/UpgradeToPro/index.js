import React, { useState } from "react";

import {
    Box,
    Grid,
    Paper,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import Lite from "./Lite";
import Pro from "./Pro";

const useStyles = makeStyles((theme) => ({
    root : {
        background : theme.palette.primary.main,
        height : '900px',
        padding : '50px',
        
        "& .MuiPaper-root" : {
            height : '100%',
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'space-between',
            borderRadius : '8px',

            ['@media (max-width:700px)'] : {
                padding : '10px'
            }
        },
        ['@media (max-width:900px)'] : {
            padding : '20px'
        }
    },
    dashboard : {
        fontSize : '40px',
        color : theme.palette.common.black,
        fontWeight : 'bold',
        marginBottom : '50px'
    }
}))
const UpgradeToPro = () => {
    const classes = useStyles() ;
    
    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Upgrade to Pro
            </Box>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{}}>
                        <Lite />
                    </Grid>
                    <Grid item xs={6}>
                        <Pro />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default UpgradeToPro;