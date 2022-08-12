import React, { useState } from "react";

import Transaction1_Image from '../../../../assets/Home/Transaction1.png';
import Transaction2_Image from '../../../../assets/Home/Transaction2.png';
import Transaction3_Image from '../../../../assets/Home/Transaction3.png';
import Transaction4_Image from '../../../../assets/Home/Transaction4.png';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import {
    Box,
    Grid,
    Paper,
    MenuItem,
    FormControl,
    Select,
    Button,
    useTheme,
    useMediaQuery,
    List,
    ListItem,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            padding : '30px',
            marginBottom : '20px',

            "& .MuiFormControl-root" : {
                width : '100px'
            },
            ['@media (max-width:700px)'] : {
                padding : '10px'
            }
        },
        "& .MuiListItem-root" : {
            justifyContent : 'space-between',
            background : theme.palette.formControl.main,
            boxShadow: '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.06)',
            borderRadius : '12px',
            marginBottom : '10px'
        }
    },
    top : {
        width : '100%',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginBottom : '20px',
        "& .MuiFormControl-root" : {
            margin : '0px',
            "& .MuiOutlinedInput-root" : {
                // border: '2px solid #EFEFEF'
            }
        }
    },
    transactionTip : {
        width : '16px',
        height : '32px',
        background : '#FFBC99',
        borderRadius : '4px',
    },
    imageContent : {
        display : 'flex',
        justifyContent : 'space-between',
        marginTop : '30px'
    },
    imageCard : {
        position : 'relative',
        width : '50px',
        height : '50px',
        background : theme.palette.common.white,
        boxShadow: '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.06)',
        borderRadius : '12px',
        marginRight : '15px'
    },
    imageStyle : {
        position : 'absolute',
        left : 0,
        right : 0,
        top : 0,
        bottom : 0,
        width : '25px',
        height : '25px',
        margin : 'auto',
    }
}))

const mockData = [
    {
        image : Transaction1_Image,
        title : "FirstName LastName",
        text : 'Username',
        price : '4.20',
        time : '4 Aug 1:00 PM'
    },
    {
        image : Transaction2_Image,
        title : "FirstName LastName",
        text : 'Username',
        price : '396.00',
        time : '12 Aug 3:10 PM'
    },
    {
        image : Transaction3_Image,
        title : "FirstName LastName",
        text : 'Username',
        price : '400.00',
        time : '8 Aug 1:00 PM'
    },
    {
        image : Transaction4_Image,
        title : "FirstName LastName",
        text : 'Username',
        price : '4.20',
        time : '14 Aug 7:00 AM'
    },
]

const Transaction = () => {
    const classes = useStyles() ;
    const theme = useTheme();
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.transactionTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Transactions </Box>
                    </Box>
                </Box>

                <List>
                    {
                        mockData.map((element, index) => {
                            return(
                                <ListItem>
                                    <Box sx={{display : 'flex'}}>
                                        <Box component={'img'} src={element.image} sx={{width : '36px', height : '36px', mr : 2}}/>
                                        <Box>
                                            {element.title}
                                            <Box sx={{fontSize : '12px'}}>
                                                {element.text}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{display : 'flex', alignItems : 'center', textAlign : 'right'}}>
                                        <Box sx={{mr : 2}}>
                                            -${element.price}
                                            <Box>
                                                {element.time}
                                            </Box>
                                        </Box>
                                        <MoreHorizOutlinedIcon />
                                    </Box>
                                </ListItem>
                            )
                        })
                    }
                </List>
                
                <Box className={classes.imageContent}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.imageCard} >
                            <RestartAltIcon className={classes.imageStyle} />
                        </Box>
                        <Box>
                            <Box> 215 </Box>
                            <Box> Pending </Box>
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.imageCard} >
                            <WarningAmberIcon className={classes.imageStyle} />
                        </Box>
                        <Box>
                            <Box> 324 </Box>
                            <Box> Denied </Box>
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.imageCard} >
                            <CheckCircleOutlineOutlinedIcon className={classes.imageStyle} />
                        </Box>
                        <Box>
                            <Box> 5.3k </Box>
                            <Box> Accepted </Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default Transaction;
