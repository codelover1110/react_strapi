import React, { useState } from "react";

import OverView from "./OverView";
import ProductView from "./ProductView";

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;
import ProTip from "./ProTip";
import GetCustomer from "./GetCustomer";
import PopularProduct from "./PopularProduct";
import Comment from "./Comment";
import Refund from "./Refund";

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
const Home = () => {
    const classes = useStyles() ;
    const match = useMediaQuery('(min-width : 900px)')
    
    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Dashboard
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={match ? 8 : 12}>
                    <OverView />
                    <ProductView />
                    <ProTip />
                    <GetCustomer />
                </Grid>
                <Grid item xs={match ? 4 : 12}>
                    <PopularProduct />
                    <Comment />
                    <Refund />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;