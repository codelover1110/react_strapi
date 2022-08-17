import React, { useState } from "react";

import Avatar_Image from '../../../assets/Home/Avatar.png';
import TextEditor from "../../../components/Common/TextEditor";

import ErrorIcon from '@mui/icons-material/Error';

import {
    Box, Button, TextField,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        padding : '10px',
        
        "& .MuiButton-root" : {
            width : '200px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            background : '#2A85FF',
            borderRadius : '12px',
            padding : '10px',

            ['@media (max-width:900px)'] : {
                width : '180px'
            }
        },
        "& .MuiFormControl-root" : {
            marginTop : '10px',
            
            "& .MuiOutlinedInput-root" : {
                borderRadius : '12px',
            }
        },
    },
    profileTip : {
        width : '16px',
        height : '32px',
        background : '#B5E4CA',
        borderRadius : '4px',
    },
    removeButton : {
        background : 'white !important',
        color : 'black',
        border : '1px solid lightgrey',
        marginLeft : '20px !important'
    }
}))

const ProfileInfo = (props) => {
    const {
        match900
    } = props;

    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box sx={{display : 'flex', alignItems : 'center', mb : 3}}>
                <Box className={classes.profileTip} />
                <Box sx={{fontSize : '18px', fontWeight : 'bold', ml : 2}}> Profile Information </Box>
            </Box>

            <Box>
                <Box component={'img'} src={Avatar_Image} sx={{width : '80px', height : '80px', mr : 2}}/>
                <Button>
                    + Upload new picture
                </Button>
                {
                    match900 &&
                    <Button className={classes.removeButton}>
                        Remove
                    </Button>
                }
            </Box>

            <Box sx={{mt : 3}}>
                <Box sx={{fontSize : '16px'}}>
                    Display name
                    <ErrorIcon sx={{ml : 1}}/>
                </Box>
                <TextField
                    placeholder="Enter your name"
                    size="small"
                    fullWidth
                />
            </Box>
            <Box sx={{mt : 2}}>
                <Box sx={{fontSize : '16px'}}>
                    Email
                    <ErrorIcon sx={{ml : 1}}/>
                </Box>
                <TextField
                    placeholder="Enter your Email"
                    size="small"
                    fullWidth
                />
            </Box>
            <Box sx={{mt : 2}}>
                <Box sx={{fontSize : '16px'}}>
                    Location
                    <ErrorIcon sx={{ml : 1}}/>
                </Box>
                <TextField
                    placeholder="Enter your Country"
                    size="small"
                    fullWidth
                />
            </Box>
            <Box sx={{mt : 2}}>
                <Box sx={{fontSize : '16px', mb : 2}}>
                    Bio
                    <ErrorIcon sx={{ml : 1}}/>
                </Box>
                <TextEditor />
            </Box>
        </Box>
    );
}

export default ProfileInfo;
