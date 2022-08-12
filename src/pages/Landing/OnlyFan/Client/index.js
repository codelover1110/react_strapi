import React, { useState } from "react";

import Transaction from "./Transaction";
import Sources from "./Sources";
import TopCustomer from "./TopCustomer";
import TopSelling from "./TopSelling";

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        background : theme.palette.primary.main,
        padding : '50px',
        ['@media (max-width:900px)'] : {
            padding : '20px'
        }
    }
}))
const OnlyFanClient = () => {
    const classes = useStyles() ;
    const match = useMediaQuery('(min-width : 900px)')
    
    return (
        <Box className={classes.root}>
            <Box sx={{fontSize : '40px', fontWeight : 'bold'}}>
                OnlyFans-Client View
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={match ? 8 : 12}>
                    <Transaction />
                    <Sources />
                </Grid>
                <Grid item xs={match ? 4 : 12}>
                    <TopCustomer />
                    <TopSelling />
                </Grid>
            </Grid>
        </Box>
    );
}

export default OnlyFanClient;