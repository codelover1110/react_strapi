import React, { useState } from "react";

import World_Image from '../../../../assets/Home/World.png';

import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LanguageIcon from '@mui/icons-material/Language';

import {
    Box,
    List,
    ListItem,
    Paper,
    useTheme,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;
import { element } from "prop-types";

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            marginBottom : '20px',

            "& .MuiFormControl-root" : {
                width : '100px'
            },
            ['@media (max-width:700px)'] : {
                padding : '10px'
            },
            "& .MuiListItem-root" : {
                borderBottom : '1px solid #E4E6E8',
                padding : '15px 10px'
            }
        }
    },
    title : {
        fontSize : '20px',
        fontWeight : 'bold',
        borderBottom : '1px solid rgba(228, 230, 232, 0.15)',
        padding : '30px',
    },
    content : {
        padding : '30px',
        "& img" : {
            marginRight : '20px'
        }
    },
    listItem : {
        display : 'flex',
        alignItems : 'center',
        padding : '10px 0px',
    },
}))

const mockData = [
    {
        country : 'Russia',
        customer : 1120,
        price : 84.5
    },
    {
        country : 'China',
        customer : 1120,
        price : 84.5
    },
    {
        country : 'USA',
        customer : 1350,
        price : 99.5
    },
    {
        country : 'Canada',
        customer : 1120,
        price : 84.5
    },
    {
        country : 'Germany',
        customer : 980,
        price : 80.1
    },
]

const TopSelling = () => {
    const classes = useStyles() ;
    const theme = useTheme();
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.title}>
                    Top Countries
                </Box>
                <Box className={classes.content}>
                    <Box component={'img'} src={World_Image} sx={{width : '100%'}}/>

                    <List>
                        {
                            mockData.map((element, index) => {
                                return (
                                    <ListItem key={index} sx={{justifyContent : 'space-between'}}>
                                        <Box>
                                            {element.country}
                                        </Box>
                                        <Box>
                                            { element.customer }
                                            <Box component={'span'} sx={{ml : 2}}>
                                                ${ element.price }k
                                            </Box>
                                        </Box>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Box>
            </Paper>
        </Box>
    );
}

export default TopSelling;
