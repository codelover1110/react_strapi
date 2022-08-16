import React, { useState } from "react";

import ErrorIcon from '@mui/icons-material/Error';

import {
    Box, List, Grid, ListItem, TextField, Switch
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        padding : '10px',
        marginTop : '50px',
        
        "& .MuiListItem-root" : {
            justifyContent : 'space-between',
            borderBottom : '1px solid #272B30',
            fontSize : '16px', 
            fontWeight : 'bold',
            marginBottom : '10px'
        }
    },
    notificationTip : {
        width : '16px',
        height : '32px',
        background : '#FFBC99',
        borderRadius : '4px',
    },
}))

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 48,
    height: 24,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(24px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(24px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 20,
      height: 20,
      borderRadius: 9,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 64 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
}));

const Notifications = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box sx={{display : 'flex', alignItems : 'center', mb : 3}}>
                <Box className={classes.notificationTip} />
                <Box sx={{fontSize : '18px', fontWeight : 'bold', ml : 2}}> Notifications </Box>
            </Box>
            
            <List>
                <ListItem>
                    <Box sx={{mb : 1}}>
                        Product updates and community announcements 
                        <ErrorIcon sx={{ml : 1}}/>
                    </Box>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </ListItem>
                <ListItem>
                    <Box sx={{mb : 1}}>
                        Market newsletter
                        <ErrorIcon sx={{ml : 1}}/>
                    </Box>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </ListItem>
                <ListItem>
                    <Box sx={{mb : 1}}>
                        Comments
                        <ErrorIcon sx={{ml : 1}}/>
                    </Box>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </ListItem>
                <ListItem>
                    <Box sx={{mb : 1}}>
                        Purchase
                        <ErrorIcon sx={{ml : 1}}/>
                    </Box>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </ListItem>
            </List>

        </Box>
    );
}

export default Notifications;
