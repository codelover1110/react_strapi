import React, { useState } from "react";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import {
    Box,
    Grid,
    List,
    ListItem,
    Paper,
    useMediaQuery,
    useTheme,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        background : theme.palette.primary.main,
        padding : '50px',
        ['@media (max-width:900px)'] : {
            padding : '20px'
        },
        "& .MuiPaper-root" : {
            padding : '50px'
        },
        "& .MuiListItem-root" : {
            cursor : 'pointer',
            borderRadius : '8px',

            "&:hover" : {
                background : theme.palette.grey.A200
            }
        }
    },
    dashboard : {
        fontSize : '40px',
        color : theme.palette.common.black,
        fontWeight : 'bold',
        marginBottom : '50px'
    },
    listItems : {
        display : 'flex',
        justifyContent : 'space-between',
        borderBottom : '1px solid ' + theme.palette.grey.A200,
        paddingBottom : '12px',
        marginBottom : '24px'
    }
}))

const FAQ = () => {
    const classes = useStyles() ;
    const theme = useTheme();

    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Frequently asked question
            </Box>
            <Paper>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                Get started
                            </ListItem>
                            <ListItem>
                                Login & access
                            </ListItem>
                            <ListItem>
                                Billing & payments
                            </ListItem>
                            <ListItem>
                                My benefits
                            </ListItem>
                            <ListItem>
                                Account settings
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={8}>
                        <Box className={classes.listItems}>
                            <Box>
                                How to upgrade to Pro account?
                            </Box>
                            <HighlightOffIcon />
                        </Box>
                        <Box sx={{color : '#6F767E', mb : '24px'}}>
                            Enjoy instant access to our vast library of 5,121 premium products and all upcoming new releases with super-fast download speeds powered by Amazon S3. Yes, you read that right. Getting $127,035 in value means you're saving more than 99% on all products making it the sweetest deal for premium design assets around.
                        </Box>
                        <Box className={classes.listItems}>
                            <Box>
                                I forgot my password
                            </Box>
                            <ControlPointIcon />
                        </Box>
                        <Box className={classes.listItems}>
                            <Box>
                                I can't reset my password
                            </Box>
                            <ControlPointIcon />
                        </Box>
                        <Box className={classes.listItems}>
                            <Box>
                                How to upgrade to Pro account?
                            </Box>
                            <HighlightOffIcon />
                        </Box>
                        <Box sx={{color : '#6F767E', mb : '24px'}}>
                            Enjoy instant access to our vast library of 5,121 premium products and all upcoming new releases with super-fast download speeds powered by Amazon S3.
                        </Box>
                        <Box className={classes.listItems}>
                            <Box>
                                How do I change and reset my password
                            </Box>
                            <ControlPointIcon />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default FAQ;