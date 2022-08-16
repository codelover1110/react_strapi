import React, { useState } from "react";

import ErrorIcon from '@mui/icons-material/Error';
import CheckIcon from '@mui/icons-material/Check';

import {
    Box, Button, Divider, Grid, ListItem, Paper, TextField,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        height : '100%',
        margin : '30px',
        marginLeft : '0px',
        paddingLeft : '100px',
        
        "& .MuiButton-root" : {
            width : '300px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            background : '#2A85FF',
            border : '2px solid #272B30',
            borderRadius : '12px',
            padding : '10px',
        },

        "& .MuiDivider-root" : {
            marginTop : '20px',
            marginBottom : '20px'
        },

        "& .MuiListItem-root" : {
            "& .MuiSvgIcon-root" : {
                color : '#B5E4CA',
                marginRight : '20px'
            }
        }
    },
    proTip : {
        width : '16px',
        height : '32px',
        background : '#CABDFF',
        borderRadius : '4px',
    },
}))

const Pro = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Paper>
                <Box>
                    <Box sx={{display : 'flex', alignItems : 'center', mb : 3}}>
                        <Box className={classes.proTip} />
                        <Box sx={{fontSize : '22px', fontWeight : 'bold', ml : 2}}> Pro </Box>
                    </Box>
                    
                    <Box sx={{color : '#9A9FA5'}}>
                        Pro shop and tools to set up your profile 🔥
                    </Box>

                    <Divider />

                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box sx={{fontSize : '64px', mr : 4}}>
                            12%
                        </Box>
                        <Box sx={{color : '#9A9FA5', mr : 10}}>
                            of the monthly income you earn on the market
                        </Box>
                        <ErrorIcon />
                    </Box>
                        
                    <Divider />

                    <ListItem>
                        <CheckIcon/>
                        Extended shop profile
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        Customer communication tools
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        Unlimited promotion posts
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        Ultimited product uploads
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        Special offers promo tool
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        Analytics and Insights
                    </ListItem>
                    <ListItem>
                        <CheckIcon/>
                        Bulk message of all customers
                    </ListItem>
                </Box>

                <Box sx={{mt : 7}}>
                    <Button variant="outlined">
                        Upgrade now
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default Pro;
