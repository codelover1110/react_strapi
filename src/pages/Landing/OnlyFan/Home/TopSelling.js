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
    card : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        background : theme.palette.formControl.main,
        borderRadius : '10px',
        padding : '20px',
        marginTop : '20px'
    },
    listItem : {
        display : 'flex',
        alignItems : 'center',
        padding : '10px 0px',
    },
    contact : {
        position : 'relative',
        width : '40px',
        height : '40px',
        background : '#3E7EFF',
        borderRadius : '10px',
    },
    contactImage : {
        position : 'absolute',
        left : 0,
        right : 0,
        top : 0,
        bottom : 0,
        color : 'white !important',
        margin : 'auto',
    },
    moreCountry : {
        color : '#3E7EFF',
        marginTop : '20px',
    }
}))

const mockData = [
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
                    Top selling countries
                </Box>
                <Box className={classes.content}>
                    <Box component={'img'} src={World_Image} sx={{width : '100%'}}/>
                    <Box className={classes.card}>
                        <Box>
                            <Box sx={{fontSize : '20px'}}>
                                2.650
                            </Box>
                            <Box>
                                Total customers
                            </Box>
                        </Box>
                        <Box className={classes.contact}>
                            <PeopleOutlineIcon className={classes.contactImage}/>
                        </Box>
                    </Box>

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
                    <Box className={classes.moreCountry}>
                        <LanguageIcon sx={{mr : 1}}/>
                        See more countries
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default TopSelling;
