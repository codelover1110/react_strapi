import React, { useState } from "react";

import ErrorIcon from '@mui/icons-material/Error';

import {
    Box, Button, Grid, TextField,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        padding : '10px',
        marginTop : '50px',
        
        "& .MuiButton-root" : {
            width : '200px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            border : '2px solid #272B30',
            borderRadius : '12px',
            padding : '10px',
        },

        "& .MuiFormControl-root" : {
            marginTop : '10px',

            "& .MuiOutlinedInput-root" : {
                borderRadius : '12px',
            }
        },
    },
    loginTip : {
        width : '16px',
        height : '32px',
        background : '#CABDFF',
        borderRadius : '4px',
    },
}))

const Login = (props) => {

    const {
        match900
    } = props;

    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box sx={{display : 'flex', alignItems : 'center', mb : 3}}>
                <Box className={classes.loginTip} />
                <Box sx={{fontSize : '18px', fontWeight : 'bold', ml : 2}}> Login </Box>
            </Box>
            
            <Box sx={{mt : 4}}>
                <Box sx={{fontSize : '16px'}}>
                    Old password
                    <ErrorIcon sx={{ml : 1}}/>
                </Box>
                <TextField
                    size="small"
                    fullWidth
                />
            </Box>
            
            <Grid container spacing={2}>
                <Grid item xs={match900 ? 6 : 12}>
                    <Box sx={{fontSize : '16px'}}>
                        New password
                        <ErrorIcon sx={{ml : 1}}/>
                    </Box>
                    <TextField
                        size="small"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <Box sx={{fontSize : '16px'}}>
                        Confirm new password
                        <ErrorIcon sx={{ml : 1}}/>
                    </Box>
                    <TextField
                        size="small"
                        fullWidth
                    />
                </Grid>
            </Grid>
                
            <Box sx={{display : 'flex', justifyContent : 'center'}}>
                <Button variant="outlined">
                    Update password
                </Button>
            </Box>
        </Box>
    );
}

export default Login;
