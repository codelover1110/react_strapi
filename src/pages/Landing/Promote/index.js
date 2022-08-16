import React, { useState } from "react";

//user components
import Insights from "../../../components/Promote/Insights";
import Recentpost from "../../../components/Promote/Recentpost";

import {
    Box,
    useMediaQuery,
} from '@mui/material';

import { useStyles } from './StyledDiv/index.styles';

const Promote = () => {
    const classes = useStyles();
    const match = useMediaQuery('(min-width : 900px)')

    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Promote
            </Box>
            <Insights />
            <Recentpost />
        </Box>
    );
}

export default Promote;