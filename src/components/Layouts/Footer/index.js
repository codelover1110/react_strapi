

import React, { useState, useEffect } from 'react' ;

import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PersonIcon from '@mui/icons-material/Person';
import GRAB_IMAGE from '../../../assets/Layout/grab.jpg';

import {
    Box ,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
}));

const Footer = () => {

    const classes = useStyles() ;

    return (
        <Box className = {classes.root}>
        </Box>
    )
}
export default Footer ;