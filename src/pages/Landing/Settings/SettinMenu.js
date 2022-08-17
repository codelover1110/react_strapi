import React, { useState } from "react";

import {
    Box, List, ListItem, Select,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        
        "& .MuiListItem-root" : {
            cursor : 'pointer',
            marginBottom : '5px',

            "&:hover" : {
                fontWeight : 'bold',
                background : theme.palette.grey.A200,
                borderRadius : '8px',
            }
        },
    },
    selected : {
        fontWeight : 'bold !important',
        background : theme.palette.grey.A200 + ' !important',
        borderRadius : '8px !important',
    }
}))

const SettingMenu = (props) => {

    const {
        match900
    } = props;

    const classes = useStyles() ;
    
    const [ selectedItem, setSelectedItem ] = useState('basics');

    const handleChangeSelected = (value) => {
        setSelectedItem(value);
    }

    return (
        <Box className={classes.root}>
            {
                match900 ?
                <List>
                    <ListItem onClick={() => handleChangeSelected('basics')} className={selectedItem === 'basics' ? classes.selected : ''}>
                        Basics
                    </ListItem>
                    <ListItem onClick={() => handleChangeSelected('account')} className={selectedItem === 'account' ? classes.selected : ''}>
                        Account
                    </ListItem>
                    <ListItem onClick={() => handleChangeSelected('notifications')} className={selectedItem === 'notifications' ? classes.selected : ''}>
                        Notifications
                    </ListItem>
                    <ListItem onClick={() => handleChangeSelected('payment')} className={selectedItem === 'payment' ? classes.selected : ''}>
                        Payment
                    </ListItem>
                </List>
                :
                <Select fullWidth defaultValue={"basic"}>
                    <option value="basic"> Basic </option>
                    <option value="account"> Account </option>
                    <option value="notifications"> Notifications </option>
                    <option value="payment"> Payment </option>
                </Select>
            }
        </Box>
    );
}

export default SettingMenu;
