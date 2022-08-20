import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import BasicTabs from "../../../components/Common/Tabs";
import Avatar_Image from '../../../assets/Home/Avatar.png';
import Figma_Image from '../../../assets/Shop/figma.png';
import Link_Image from '../../../assets/Shop/link.png';

import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import {
    Box,
    Button,
    Drawer,
    Grid,
    IconButton,
    Paper,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import { getItem } from "../../../utils/helper";

const useStyles = makeStyles((theme) => ({
    drawer : {

        "& .MuiDrawer-paper" : {
            background : theme.palette.primary.main
        },
        "& .MuiPaper-root": {
            width: '100%',
            padding : '24px',
        },
        "& .MuiListItem-root" : {
            display : 'flex',
            alignItems : 'center',
            padding : '20px',
            paddingLeft : '0px',
            cursor : 'pointer',
        },
        "& .MuiButton-root" : {
            width : '150px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            border : '2px solid #272B30',
            borderRadius : '12px',
            padding : '10px',
        },

        "& svg" : {
            marginRight : '10px'
        }
    },
    menuBar : {
        display : 'flex',
        justifyContent : 'space-between'
    },
    body : {
        display : 'flex',
        marginTop : '50px',
        marginLeft : '210px',
        ['@media (max-width:1600px)'] : {
            marginLeft : '0px '
        }
    },
    tabPaper : {
        width : '90% !important',

        "@media (max-width:900px)" : {
            width : '100% !important',
            padding : '10px !important'
        },
    },
    sideBar : {
        position : 'relative',
        width : '210px',
        paddingLeft : '30px'
    },
    cover : {
        width : '64px',
        height : '64px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : theme.palette.grey.A200,
        borderRadius : '50%',
        marginTop : '24px'
    },
    navBar : {
        width : '500px'
    }
}))

const EditProduct = (props) => {

    const {
        open,
        onClose,
        isSideBar,
        comment
    } = props;

    const classes = useStyles() ;
    const match900 = useMediaQuery('(min-width : 900px)');
    
    useEffect(() => {
        console.log(comment);
    }, [comment])

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            className={classes.drawer}
        >
            <Box className={classes.menuBar}>
                <Button>
                    Edit product
                </Button>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            
            <Box className={classes.body}>
                <Paper className={classes.tabPaper}>
                    <Box className={classes.topBar}>
                        <BasicTabs />
                    </Box>
                </Paper>
                {
                    match900 && (comment === 'comment' ?
                    <Box className={classes.navBar}>
                        <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                            <Box sx={{display : 'flex', alignItems : 'center'}}>
                                <Box sx={{width : '40px', height : '40px', display : 'flex', justifyContent : 'center', alignItems : 'center', background : '#CABDFF', fontWeight : 'bold', borderRadius : '8px'}}>
                                    4
                                </Box>
                                <Box> Comment </Box>
                            </Box>
                            <IconButton>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    :
                    <Box className={classes.sideBar}>
                        <Box component={'img'} src={Avatar_Image} sx={{width : '64x', height : '64px'}}/>
                        <Box className={classes.cover}>
                            <Box component={'img'} src={Figma_Image}/>
                        </Box>
                        <Box className={classes.cover}>
                            <Box component={'img'} src={Link_Image} />
                        </Box>
                        <Box className={classes.cover} sx={{position : 'absolute', bottom : 20}}>
                            <ArrowForwardOutlinedIcon sx={{marginRight : '0px !important'}}/>
                        </Box>
                    </Box>)
                }
            </Box>
        </Drawer>
    );
}

const mapStateToProps = state => ({
    comment : state.shop.comment
}) ;
const mapDispatchToProps = {
} ;
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct) ;