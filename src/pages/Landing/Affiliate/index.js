import React from 'react';

import PopularProduct from "./PopularProduct";
import CreateLink from "./CreateLink";
import OverView from "./OverView";
import { AffliateTable } from './AffliateTable';

import {
    Box,
    Grid,
    useMediaQuery,
} from '@mui/material';

import { useStyles } from './StyledDiv/index.styles';

const Affiliate = () => {
    const classes = useStyles();
    const match900 = useMediaQuery('(min-width : 900px)');

    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Affliate Center
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={match900 ? 8 : 12}>
                    <OverView />
                    <AffliateTable />
                </Grid>
                <Grid item xs={match900 ? 4 : 12}>
                    <CreateLink />
                    <PopularProduct />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Affiliate;