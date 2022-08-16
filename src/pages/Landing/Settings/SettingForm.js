import React, { useState } from "react";

import SettingMenu from "./SettinMenu";
import ProfileInfo from "./ProfileInfo";
import Login from "./Login";
import Notifications from "./Notifications";

import {
    Box,
    Grid,
    Paper,
    useTheme,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;
import Payment from "./Payment";

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            padding : '30px',

            ['@media (max-width:700px)'] : {
                padding : '10px'
            }
        },
    },
}))

const SettingForm = () => {
    const classes = useStyles() ;
    const theme = useTheme();

    const [ type, setType ] = useState(1);
    const [ overViewType, setOverViewType ] = useState('customer');

    const handleChange = (e) => {
        setType(e.target.value)
    }
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Grid container>
                    <Grid items xs={3}>
                        <SettingMenu />
                    </Grid>
                    <Grid items xs={9}>
                        <ProfileInfo />
                        <Login />
                        <Notifications />
                        <Payment />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default SettingForm;
