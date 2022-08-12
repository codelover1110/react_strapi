
import React from 'react';
import { useState } from 'react';

import { connect } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';

import Avatar_Image from '../../../assets/Home/Avatar.png';
import { HomeIcon, ProductsIcon, CustomersIcon, ShopIcon, SearchADRIcon, LogoLightIcon, LogoDarkIcon } from '../../Common/SvgStatic';
import SearchPopover from './SearchPopover';
import clsx from 'clsx';

import { makeStyles } from '@mui/styles';

import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

import {
    Badge,
    Box, Button, Drawer, IconButton, List, ListItem, TextField, Typography, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, InputAdornment, Popover, popoverClasses, useTheme
} from '@mui/material' ;
import ProfilePopover from './ProfilePopover';
  

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        alignItems : 'center',
        height : '80px',
        padding : '0px 20px',

        "& .MuiFormControl-root" : {
            width : '360px'
        },
        "& .MuiOutlinedInput-root" : {
            "& .MuiButton-root" : {
                padding : '5px 16px'
            }
        },
        "& svg" : {
            width : '25px',
            height : '25px',
            marginLeft : '30px',
            ['@media (max-width:750px)'] : {
                marginLeft : 0
            }
        },
        "& .MuiPaper-root" : {
            width : '360px',
        }
    } ,
    profile : {
        width : '100%',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center',

        "& .MuiButton-root" : {
            width : '120px',
            height : '48px',
            display : 'flex',
            alignItems : 'center',
            background : '#2A85FF',
            fontSize : '15px',
            textTransform : 'unset',
            borderRadius : '12px',
            padding : '10px',
            "& svg" : {
                marginLeft : '0px'
            }
        },
    },
    mobile : {
        // justifyContent : 'space-around',
    },
    drawer: {
        width: '100%',
        zIndex: '999999999999999 !important',
        "& .MuiPaper-root": {
            width: '100%',
        },
        "& .MuiListItem-root" : {
            display : 'flex',
            alignItems : 'center',
            padding : '20px',
            paddingLeft : '0px',
            cursor : 'pointer',
        },

        "& svg" : {
            marginRight : '10px'
        }
    },
    menuBody: {
        zIndex: 9999,
    },
    menuDiv: {
        height: '100%',
        padding : '0px 24px',
        "& a": {
            textDecoration: 'none ',
            color: 'white',
        },
    },
    popOver : {
        padding : '20px',
        fontSize : '16px',
        "& .MuiListItem-root" : {
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center',
            padding : '10px 0px',
        },
        "& .MuiSvgIcon-root" : {
            width : '25px',
            height : '25px',
        }
    },
    filterImg : {
        width : '50px',
        height : '50px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        border: '2px solid #CABDFF',
        borderRadius : '50%',
        marginRight : '10px',
    }
})) ;

const menuList = [
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
        icon : CustomersIcon,
        link : '/income',
    },
    {
        label : 'Promote',
        icon : CustomersIcon,
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

const Header = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const match = useMediaQuery('(min-width : 750px)');
    const theme = useTheme();
    const anchorRefSearch = React.useRef(null) ;
    const anchorRefProfile = React.useRef(null) ;

    const [ searchText, setSearchText ] = useState(null);
    const [ open, setOpen ] = useState(false);
    const [ searchPopOver, setSearchPopOver ] = useState(false);
    const [ profilePopOver, setProfilePopOver ] = useState(false);

    const handleMenuChange = (element) => {
        navigate(element.link)
        setOpen(false);
    }
    
    const handleClose = (state) => {
        setOpen(state);
    }

    const handleOpenSearchPopOver = () => {
        setSearchPopOver(true);
    }

    const handleCloseSearchPopOver = () => {
        setSearchPopOver(false);
    }

    const handleOpenProfilePopover = () => {
        setProfilePopOver(true);
    }

    const handleCloseProfilePopover = () => {
        setProfilePopOver(false);
    }

    const list = () => (
        <Box
            sx={{width : 'auto'}}
            role="presentation"
            className={classes.menuBody}
        >
            <List className={classes.menuDiv} >
                <ListItem sx={{display : 'flex', justifyContent : 'space-between'}}>
                    <IconButton onClick={() => handleClose(false)}>
                        <CloseIcon />
                    </IconButton>
                    
                    { theme.palette.mode === 'light' ? LogoLightIcon : LogoDarkIcon } 
                </ListItem>
                <Box sx={{padding : '0px 10px'}}>
                {
                    menuList.map((element, index) => {
                        return(
                            (element.label === "Home" || element.label === "Shop" || element.label ==="Promote") ?
                            <ListItem key={index} onClick={() => handleMenuChange(element)} sx={{"&:hover" : {background : ' #EFEFEF'}}}>
                                {element.icon}
                                {element.label}
                            </ListItem> :
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{"&:hover" : {background : ' #EFEFEF'}}}
                                >
                                <Box>
                                    {element.icon}
                                    {element.label}
                                </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box>
                                    {
                                        element.label === "Products" &&
                                        productSubMenu.map((row, index) => {
                                            return(
                                                <Box key={index} onClick={() => handleMenuChange(row)} sx={{px : 2, py : 1, cursor : 'pointer', "&:hover" : {background : ' #EFEFEF'}}}>
                                                    {row.label}
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
                </Box>
            </List>
        </Box>
    );

    return (
        <Box className={clsx(classes.root, !match && classes.mobile )}>
            {
                match ?
                <>
                    <Box sx={{display : 'flex', justifyContent : 'flex-start'}}>
                        <TextField
                            id="search-bar"
                            className="text"
                            onInput={(e) => {
                                setSearchText(e.target.value);
                            }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"> <SearchIcon style={{ fill: "#6F767E" }} /> </InputAdornment>,
                                endAdornment: <InputAdornment position="end">
                                        <Button variant='contained' sx={{background : theme.palette.mode === 'dark' ? '#1A1D1F !important' : '#F4F4F4 !important', "& path" : {fill : theme.palette.common.black}}}>
                                            
                                            { SearchADRIcon}
                                        </Button>
                                    </InputAdornment>,
                            }}
                            variant="outlined"
                            placeholder="Search or type a command"
                            size="small"
                            ref={anchorRefSearch}
                            onClick={handleOpenSearchPopOver}
                            sx={{marginBottom : '0px', "& .MuiOutlinedInput-notchedOutline" : {border : 'none'}, "&. Mui-focused" : {border : 'none'}}}
                        />
                    </Box>
                    <Box className={classes.profile}>
                            <Button>
                                <AddIcon sx={{mr : 1}}/>
                                <Typography sx={{fontWeight : 'bold', m : 0}}>
                                    Create
                                </Typography>
                            </Button>
                        <Badge color="error" variant='dot'>
                            <MessageIcon />
                        </Badge>
                        <Badge color="error" variant='dot'>
                            <NotificationsIcon/>
                        </Badge>
                        <Box component={'img'} src={Avatar_Image}
                            onClick={handleOpenProfilePopover}
                            ref={anchorRefProfile}
                            sx={{width : '40px !important', height : '40px !important', marginLeft : '30px', cursor : 'pointer'}}
                        />
                    </Box>
                </> :
                <Box sx={{width : '100%',display : 'flex', justifyContent : 'space-around', alignItems : 'center'}}>
                    <IconButton onClick={() => handleClose(true)}>
                        <MenuIcon />
                    </IconButton>
                    <SearchIcon style={{ fill: "#6F767E" }} />
                    <Badge color="error" variant='dot'>
                        <MessageIcon />
                    </Badge>
                    <Badge color="error" variant='dot'>
                        <NotificationsIcon/>
                    </Badge>
                </Box>
            }
            <Drawer
                anchor='left'
                open={open}
                onClose={() => handleClose(false)}
                className={classes.drawer}
            >
                {list()}
            </Drawer>
            
            <SearchPopover 
                popOver={searchPopOver}
                anchorRef={anchorRefSearch}
                handleClosePopOver={handleCloseSearchPopOver}
            />
            
            <ProfilePopover 
                popOver={profilePopOver}
                anchorRef={anchorRefProfile}
                handleClosePopOver={handleCloseProfilePopover}
            />
        </Box>
    );
}

Header.propTypes = {
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) ;