import React from "react";

import { FacebookSvgIcon, TwitterSvgIcon } from "../../../components/Common/SvgStatic";

import InstagramIcon from '@mui/icons-material/Instagram';

import {
    Box,
    Paper,
    Button,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            padding : '30px',

            "& .MuiFormControl-root" : {
                width : '100px'
            },
            "@media (max-width:700px)" : {
                padding : '10px'
            }
        },
        "& .MuiButtonBase-root" : {
            width : '200px',
            fontSize : '15px',
            textTransform : 'unset',
            border : '2px solid #EFEFEF',
        },
        "& svg" : {
            color : '#6F767E',
            width : '20px',
            height : '20px',
            marginRight : '10px'
        }
    },
    top : {
        width : '100%',
        marginBottom : '36px',
    },
    customerTip : {
        width : '16px',
        height : '32px',
        background : '#B1E5FC',
        borderRadius : '4px',
    },
    buttonGroup : {
        display : 'flex',
        justifyContent : 'space-between',
        padding : '20px 0px'
    }
}))

const GetCustomer = () => {
    const classes = useStyles() ;
    const match = useMediaQuery('(min-width : 900px)');
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center', mb : 2}}>
                        <Box className={classes.customerTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Get more customers! </Box>
                    </Box>
                </Box>

                <Box>
                    50% of new customers explore products because the author sharing the work on the social media network. Gain your earnings right now! 🔥
                </Box>

                <Box className={classes.buttonGroup}>
                    <Button variant="outlined">
                        {FacebookSvgIcon}
                        {
                            match && "Facebook"
                        }
                    </Button>
                    <Button variant="outlined">
                        {TwitterSvgIcon}
                        {
                            match && "Twitter"
                        }
                    </Button>
                    <Button variant="outlined">
                        <InstagramIcon />
                        {
                            match && "Instagram"
                        }
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default GetCustomer;
