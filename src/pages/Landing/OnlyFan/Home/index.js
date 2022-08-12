import React, { useState } from "react";

import OverView from "./OverView";
import Sales from "./Sales";
import Sources from "./Sources";

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;
import TopClient from "./TopClient";
import TopSelling from "./TopSelling";

const useStyles = makeStyles((theme) => ({
    root : {
        background : theme.palette.primary.main,
        padding : '50px',
        ['@media (max-width:900px)'] : {
            padding : '20px'
        }
    }
}))
const OnlyFanHome = () => {
    const classes = useStyles() ;
    const match = useMediaQuery('(min-width : 900px)')
    
    return (
        <Box className={classes.root}>
            <Box sx={{fontSize : '40px', fontWeight : 'bold'}}>
                OnlyFans
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={match ? 8 : 12}>
                    <OverView />
                    <Sales />
                    <Sources />
                </Grid>
                <Grid item xs={match ? 4 : 12}>
                    <TopClient />
                    <TopSelling />
                </Grid>
            </Grid>
        </Box>
    );
}

export default OnlyFanHome;