import React from "react";

import clsx from "clsx";

import { Box } from "@mui/material";

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
    },
    largeCircle : {
        position : 'relative',
        width : '14px',
        height : '14px',
        border : '1px solid #262643',
        borderRadius : '50%',
        marginRight : '10px'
    },
    smallCircle : {
        position : 'absolute',
        left : 0,
        right : 0,
        top : 0,
        bottom : 0,
        width : '4px',
        height : '4px',
        background: props => {
            return props.colorType
        },
        borderRadius : '50%',
        margin : 'auto'
    }
}))

const SourceIcon = (props) => {

    const {
        color
    } = props;

    const classes = useStyles({colorType : color});

    return(
        <Box sx={{display : 'flex'}}>
            <Box className={clsx(classes.largeCircle)}>
                <Box className={classes.smallCircle}></Box>
            </Box>
        </Box>
    )
}

export default SourceIcon;