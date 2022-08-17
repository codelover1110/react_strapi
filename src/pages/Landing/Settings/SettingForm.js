import React, { useState } from "react";

import SettingMenu from "./SettinMenu";
import ProfileInfo from "./ProfileInfo";
import Login from "./Login";
import Notifications from "./Notifications";

import {
    Box,
    Grid,
    Paper,
    useMediaQuery,
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
    const match900 = useMediaQuery('(min-width : 900px)');

    const [ type, setType ] = useState(1);
    const [ overViewType, setOverViewType ] = useState('customer');

    const handleChange = (e) => {
        setType(e.target.value)
    }
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Grid container>
                    <Grid items xs={match900 ? 3 : 12}>
                        <SettingMenu match900={match900}/>
                    </Grid>
                    <Grid items xs={match900 ? 9 : 12}>
                        <ProfileInfo match900={match900}/>
                        <Login match900={match900}/>
                        <Notifications match900={match900}/>
                        <Payment match900={match900}/>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default SettingForm;
