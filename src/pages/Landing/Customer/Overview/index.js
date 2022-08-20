import React, { useState } from "react";

import TotalCustomers from "./TotalCustomers";
import TrafficChannel from "./TrafficChannel";
import ActiveCustomers from "./ActiveCustomers";
import ShareProducts from "./ShareProducts";
import RefundRequests from "./RefundRequests";

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;
import TopDevice from "./TopDevice";

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
const Customers = () => {
    const classes = useStyles() ;
    const match = useMediaQuery('(min-width : 900px)')
    
    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Customers
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={match ? 8 : 12}>
                    <TotalCustomers />
                    <TrafficChannel />
                    <ActiveCustomers />
                    <ShareProducts />
                </Grid>
                <Grid item xs={match ? 4 : 12}>
                    <RefundRequests />
                    <TopDevice />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Customers;