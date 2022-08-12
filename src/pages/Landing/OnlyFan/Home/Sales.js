import React, { useState } from "react";

import StatisticsGraph from "../../../../components/Common/Chart/StatisticsGraph";

import {
    Box,
    Grid,
    Paper,
    useTheme,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            padding : '30px',
            marginBottom : '20px',

            "& .MuiFormControl-root" : {
                width : '100px'
            },
            ['@media (max-width:700px)'] : {
                padding : '10px'
            }
        }
    },
    salesTip : {
        width : '16px',
        height : '32px',
        background : '#FFBC99',
        borderRadius : '4px',
    },
    top : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
        marginBottom : '20px',
        "& .MuiFormControl-root" : {
            margin : '0px',
        }
    },
}))

const Sales = () => {
    const classes = useStyles() ;
    const theme = useTheme();
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.salesTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Sales </Box>
                    </Box>
                </Box>

                <Box>
                    <StatisticsGraph />
                </Box>
            </Paper>
        </Box>
    );
}

export default Sales;
