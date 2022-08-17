import React, { useState } from "react";

import {
    Box,
    Grid,
    Paper,
    useMediaQuery,
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
                padding : '0px'
            }
        },
        ['@media (max-width:900px)'] : {
            height : '1400px',
            padding : '0px'
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
    const match900 = useMediaQuery('(min-width : 900px)');
    
    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Upgrade to Pro
            </Box>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item xs={match900 ? 6 : 12}>
                        <Lite />
                    </Grid>
                    <Grid item xs={match900 ? 6 : 12}>
                        <Pro />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default UpgradeToPro;