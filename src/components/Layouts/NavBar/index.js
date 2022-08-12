
import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux' ;

import { HomeIcon, ProductsIcon, CustomersIcon, ShopIcon, LogoLightIcon, LogoDarkIcon, IncomeMenuIcon, PromoteIcon } from '../../Common/SvgStatic';
import { ColorModeContext } from '../../../utils/theme';
import { getItem, setItem } from '../../../utils/helper';

import { makeStyles } from '@mui/styles';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Box, Button, Divider, List, ListItem , MenuItem, useTheme, Accordion, AccordionSummary, AccordionDetails, useMediaQuery
} from '@mui/material' ;
  

const useStyles = makeStyles((theme) => ({
    root : {
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        background : theme.palette.background.bg,
        padding : '24px',
        
        "& .MuiListItem-root" : {
            display : 'flex',
            alignItems : 'center',
            cursor : 'pointer',
            "&:hover" : {
                background : theme.palette.grey.A200,
                borderRadius : '12px',
            }
        },

        "& svg" : {
            marginRight : '10px'
        },
        ['@media (max-width:1200px)'] : {
            width  : '100px',
            padding : '10px'
        },
        ['@media (max-width:900px)'] : {
            display : 'none'
        }
    } ,
    home : {
        "& path" : {
            fill : theme.palette.common.black
        }
    }
})) ;

const menuList = [
    {
        label : 'OnlyFans Home',
        icon : '',
        link : '/home/onlyfan'
    },
    {
        label : 'OnlyFans Client View',
        icon : '',
        link : '/home/onlyfan/client'
    },
    {
        label : 'Home',
        icon : HomeIcon,
        link : '/home',
    },
    {
        label : 'Products',
        icon : ProductsIcon,
        link : '/product',
    },
    {
        label : 'Customers',
        icon : CustomersIcon,
        link : '/customer',
    },
    {
        label : 'Shop',
        icon : ShopIcon,
        link : '/shop',
    },
    {
        label : 'Income',
        icon : IncomeMenuIcon,
        link : '/income',
    },
    {
        label : 'Promote',
        icon : PromoteIcon,
        link : '/promote',
    },
]

const productSubMenu = [
    {
        label : 'Dashboard',
        link : '/product/dashboard'
    },
    {
        label : 'Drafts',
        link : '/product/drafts'
    },
    {
        label : 'Released',
        link : '/product/released'
    },
    {
        label : 'Scheduled',
        link : '/product/scheduled'
    },
]

const NavBar = (props) => {

    const classes = useStyles();
    const match1200 = useMediaQuery('(min-width : 1200px)') ;
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const navigate = useNavigate();

    const handleMenuChange = (element) => {
        navigate(element.link)
    }

    const themeModeHandleClick = () => {
        colorMode.toggleColorMode();
        const themeMode = getItem('userThemeMode');
        setItem('userThemeMode', themeMode === 'light' ? 'dark' : 'light');
    };

    return (
        <Box className={classes.root}>
            <List>
            {
                <>
                <Box sx={{mb : 6}}> { theme.palette.mode === 'light' ? LogoLightIcon : LogoDarkIcon } </Box>
                {
                    menuList.map((element, index) => {
                        return(
                            (element.label === "OnlyFans Home" || element.label === "OnlyFans Client View" || element.label === "Home" || element.label === "Shop" || element.label ==="Promote") ?
                            <ListItem key={index} onClick={() => handleMenuChange(element)} className={index === 2 ? classes.home : ''}>
                                {element.icon}
                                {match1200 && element.label}
                            </ListItem> :
                                    <Accordion key={index}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <ListItem>
                                            {element.icon}
                                            {match1200 && element.label}
                                        </ListItem>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Box>
                                            {
                                                element.label === "Products" &&
                                                productSubMenu.map((row, index) => {
                                                    return(
                                                        <Box key={index} onClick={() => handleMenuChange(row)} sx={{px : 2, py : 1, cursor : 'pointer'}}>
                                                            {match1200 && row.label}
                                                        </Box>
                                                    )
                                                })
                                            }
                                        </Box>
                                        </AccordionDetails>
                                    </Accordion>
                        )
                    })
                }
                </>
            }
            </List>
            <Box>
                <Divider />

                <Box sx={{display : 'flex', justifyContent : match1200 ? 'space-between' : 'center', mt : 2}}>
                    <Box sx={{display : 'flex'}}>
                        <HelpOutlineIcon sx={{mr : 1}}/>
                        {
                            match1200 &&
                            <Box>
                                Help & getting started
                            </Box>
                        }
                    </Box>
                    {
                        match1200 &&
                        <Box 
                            sx={{
                                width : '24px', height : '24px',
                                display : 'flex', justifyContent : 'center', alignItems : 'center', fontWeight : 'bold',
                                color : '#1A1D1F', background : '#CABDFF', borderRadius : '6px'
                            }}
                        >
                            8
                        </Box>
                    }
                </Box>
                <MenuItem onClick={() => themeModeHandleClick()} sx={{ fontWeight: 'bold', padding: '8px 17px' }}>
                {
                    match1200 && ( <Box> {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Theme</Box>)
                }
                {theme.palette.mode === 'dark' ? (
                    <Brightness4Icon sx={{ ml: 1 }} />
                ) : (
                    <LightModeOutlinedIcon sx={{ ml: 1 }} />
                )}
                </MenuItem>
            </Box>
        </Box>
    );
}

NavBar.propTypes = {
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar) ;