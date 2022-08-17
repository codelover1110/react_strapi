import React, { useState } from "react";

import UpgradeToPro from "./UpgradeToPro";
import FAQ from "./FAQ";

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
    }
}))
const Upgrade = () => {
    const classes = useStyles() ;
    const match900 = useMediaQuery('(min-width : 900px)');
    
    return (
        <Box className={classes.root}>
            <UpgradeToPro />
            {
                match900 && <FAQ />
            }
        </Box>
    );
}

export default Upgrade;