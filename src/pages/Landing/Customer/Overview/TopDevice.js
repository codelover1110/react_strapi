import React, { useState } from "react";

import { RefundIcon } from "../../../../components/Common/SvgStatic";

import {
    Box,
    Grid,
    Paper,
    Button,
    useTheme,
    Divider,
    List,
    ListItem,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            padding : '30px',

            "& .MuiFormControl-root" : {
                width : '100px'
            },
            ['@media (max-width:700px)'] : {
                padding : '0px'
            }
        },
        "& .MuiButton-root" : {
            width : '50px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            borderRadius : '12px',
            padding : '10px',
        },
        "& .MuiListItem-root" : {
            padding : '20px 10px'
        }
    },
    top : {
        display : 'flex',
        justifyContent : 'space-between',
        width : '100%'
    },
    refundTip : {
        width : '16px',
        height : '32px',
        background : '#FFBC99',
        borderRadius : '4px',
    },
}))

const TopDevice = () => {
    const classes = useStyles() ;
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.refundTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Top device </Box>
                    </Box>
                </Box>
                
            </Paper>
        </Box>
    );
}

export default TopDevice;
