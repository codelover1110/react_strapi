import React, { useState } from "react";

import Client1_Image from '../../../../assets/Home/Client1.png';
import Client2_Image from '../../../../assets/Home/Client2.png';
import Client3_Image from '../../../../assets/Home/Client3.png';
import Client4_Image from '../../../../assets/Home/Client4.png';
import Client5_Image from '../../../../assets/Home/Client5.png';
import Client6_Image from '../../../../assets/Home/Client6.png';
import Client7_Image from '../../../../assets/Home/Client7.png';
import Client8_Image from '../../../../assets/Home/Client8.png';

import {
    Box,
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
    percentageActive : {
        width : '200px',
        height : '4px',
        background : '#3E7EFF',
        borderRadius : '6.5px',
        marginBottom : '5px',
        
        ['@media (max-width:1600px)'] : {
            width : '100px',
        }
    },
    percentagePassive : {
        width : '100px',
        height : '4px',
        background : 'rgba(245, 245, 250, 0.06)',
        borderRadius : '6.5px',

        ['@media (max-width:1600px)'] : {
            width : '50px',
        }
    }
}))

const mockImage = [
    {
        image : Client1_Image,
        percent : 98
    },
    {
        image : Client2_Image,
        percent : 66
    },
    {
        image : Client3_Image,
        percent : 55
    },
    {
        image : Client4_Image,
        percent : 30
    },
    {
        image : Client5_Image,
        percent : 28
    },
    {
        image : Client6_Image,
        percent : 27
    },
    {
        image : Client7_Image,
        percent : 12
    },
    {
        image : Client8_Image,
        percent : 10
    },
]

const TopCustomer = () => {
    const classes = useStyles() ;
    const theme = useTheme();
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.title}>
                    Top Customers
                </Box>
                <Box className={classes.content}>
                    {
                        mockImage.map((element, index) => {
                            return(
                                <Box key={index} className={classes.listItem}>
                                    <Box component={'img'} src={element.image} />
                                    <Box>
                                        <Box className={classes.percentageActive} />
                                        <Box className={classes.percentagePassive} />
                                    </Box>
                                    <Box sx={{width : '100%', display : 'flex', justifyContent : 'flex-end'}}>
                                        {element.percent} %
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Paper>
        </Box>
    );
}

export default TopCustomer;
