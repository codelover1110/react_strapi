
import React, { useContext, useRef } from 'react';
import { useState } from 'react';

import { connect } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';

import { ColorModeContext } from '../../../utils/theme';
import { getItem, setItem } from '../../../utils/helper';
import Avatar_Image from '../../../assets/Home/Avatar.png';
import { HomeIcon, ProductsIcon, CustomersIcon, ShopIcon, SearchADRIcon, LogoLightIcon, LogoDarkIcon, AffiliateIcon, AnalyticsIcon, ExploreIcon, UpgradeIcon } from '../../Common/SvgStatic';
import SearchPopover from './SearchPopover';
import ProfilePopover from './ProfilePopover';
import NotificationPopover from './NotificationPopover';
import clsx from 'clsx';

import { makeStyles } from '@mui/styles';

import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import {
    Badge,
    Box, Button, Drawer, IconButton, List, ListItem, TextField, Typography, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, InputAdornment, Popover, popoverClasses, useTheme
} from '@mui/material' ;
import MessagePopover from './MessagePopover';
  

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
        "& svg" : {
            width : '25px',
            height : '25px',
            marginLeft : '30px',
            "@media (max-width:750px)" : {
                marginLeft : 0
            }
        },
    },
    mobile : {
        // justifyContent : 'space-around',
    },
    drawer: {
        width: '100%',
        zIndex: '1000 !important',
        "& .MuiPaper-root": {
            width: '100%',
        },
        "& .MuiListItem-root" : {
            display : 'flex',
            alignItems : 'center',
            padding : '20px',
            cursor : 'pointer',
        },
        "& .MuiAccordionSummary-root" : {
            padding : '20px',
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
    },
    paletteMode : {
        fontWeight: 'bold',
        padding: '8px 17px',
        cursor : 'pointer',
        "&:hover" : {
            boxShadow: '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
            borderRadius: '32px',
        }
    }
})) ;

const menuList = [
    {
        label : 'Home',
        icon : HomeIcon,
        link : '/home',
    },
    // {
    //     label : 'Products',
    //     icon : ProductsIcon,
    //     link : '/product',
    // },
    // {
    //     label : 'Customers',
    //     icon : CustomersIcon,
    //     link : '/customer',
    // },
    {
        label : 'Shop',
        icon : ShopIcon,
        link : '/shop',
    },
    // {
    //     label : 'Income',
    //     icon : CustomersIcon,
    //     link : '/income',
    // },
    {
        label : 'Promote',
        icon : CustomersIcon,
        link : '/promote',
    },
]

const homeSubMenu = [
    {
        label : 'OnlyFans Home',
        link : '/home/onlyfan'
    },
    {
        label : 'OnlyFans Client View',
        link : '/home/onlyfan/client'
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
    const colorMode = useContext(ColorModeContext);
    const anchorRefSearch = useRef(null) ;
    const anchorRefProfile = useRef(null) ;
    const anchorRefMessage = useRef(null);
    const anchorRefNotification = useRef(null);

    const [ searchText, setSearchText ] = useState(null);
    const [ open, setOpen ] = useState(false);
    const [ searchPopOver, setSearchPopOver ] = useState(false);
    const [ profilePopOver, setProfilePopOver ] = useState(false);
    const [ messagePopOver, setMessagePopOver ] = useState(false);
    const [ notificationPopOver, setNotificationPopOver ] = useState(false);

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

    const handleOpenMessagePopOver = () => {
        setMessagePopOver(true);
    }

    const handleCloseMessagePopOver = () => {
        setMessagePopOver(false);
    }

    const handleOpenNotificationPopover = () => {
        setNotificationPopOver(true);
    }

    const handleCloseNotificationPopover = () => {
        setNotificationPopOver(false)
    }

    const themeModeHandleClick = (mode) => {
        const themeMode = getItem('userThemeMode');
        console.log(mode, getItem('userThemeMode'));
        if(mode !== themeMode){
            colorMode.toggleColorMode();
        }
        setItem('userThemeMode', mode);
        console.log(mode, getItem('userThemeMode'));
    };

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
                <Box sx={{padding : '0px 10px', mb : 10}}>
                {
                    menuList.map((element, index) => {
                        return(
                            (element.label === "Shop" || element.label ==="Promote") ?
                            <ListItem key={index} onClick={() => handleMenuChange(element)} sx={{"&:hover" : {background : theme.palette.grey.A200}}}>
                                {element.icon}
                                {element.label}
                            </ListItem> :
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{"&:hover" : {background : theme.palette.grey.A200}}}
                                >
                                <Box>
                                    {element.icon}
                                    {element.label}
                                </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box>
                                    {
                                        element.label === "Home" &&
                                        homeSubMenu.map((row, index) => {
                                            return(
                                                <Box key={index} onClick={() => handleMenuChange(row)} sx={{px : 2, py : 1, cursor : 'pointer', "&:hover" : {background : theme.palette.grey.A200}}}>
                                                    {row.label}
                                                </Box>
                                            )
                                        })
                                    }
                                    {
                                        element.label === "Products" &&
                                        productSubMenu.map((row, index) => {
                                            return(
                                                <Box key={index} onClick={() => handleMenuChange(row)} sx={{px : 2, py : 1, cursor : 'pointer', "&:hover" : {background : theme.palette.grey.A200}}}>
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

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{"&:hover" : {background : theme.palette.grey.A200}}}
                    >
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box component={'img'} src={Avatar_Image} sx={{mr : 2}}/>
                        <Box>
                            <Box>
                                Tran Mau Tri Tam
                            </Box>
                            <Box>
                                Visual Designer
                            </Box>
                        </Box>
                    </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                Profile
                            </ListItem>
                            <ListItem>
                                Edit profile
                            </ListItem>
                            <ListItem sx={{fontWeight : 'bold', mt : '20px'}}>
                                { AnalyticsIcon }
                                Analytics
                            </ListItem>
                            <ListItem>
                                { AffiliateIcon }
                                Affiliate center
                            </ListItem>
                            <ListItem>
                                { ExploreIcon }
                                Explore authors
                            </ListItem>
                            <ListItem sx={{color : '#8E59FF', mt : '20px'}}>
                                { UpgradeIcon }
                                Upgrade to Pro
                            </ListItem>
                            <ListItem sx={{mt : '20px'}}>
                                Account settings
                            </ListItem>
                            <ListItem>
                                Log out
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                
                <Box sx={{display : 'flex', justifyContent : 'space-between',padding : '10px 30px', mt : 2}}>
                    <Box sx={{display : 'flex', mb : 2}}>
                        <HelpOutlineIcon sx={{mr : 1}}/>
                            <Box>
                                Help & getting started
                            </Box>
                    </Box>
                    <Box 
                        sx={{
                            width : '24px', height : '24px',
                            display : 'flex', justifyContent : 'center', alignItems : 'center', fontWeight : 'bold',
                            color : '#1A1D1F', background : '#CABDFF', borderRadius : '6px'
                        }}
                    >
                        8
                    </Box>
                </Box>
                
                <Box sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box onClick={() => themeModeHandleClick('dark')} className={classes.paletteMode}>
                        <LightModeIcon sx={{ ml: 1 }} />
                        Light
                    </Box>
                    <Box onClick={() => themeModeHandleClick('light')} className={classes.paletteMode}>
                        <DarkModeOutlinedIcon sx={{ ml: 1 }} />
                        Dark
                    </Box>
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
                                        <Button variant='contained' sx={{background : theme.palette.common.white, "& path" : {fill : theme.palette.common.black}}}>
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
                            <MessageIcon 
                                ref={anchorRefMessage}
                                onClick={handleOpenMessagePopOver}
                                sx={{cursor : 'pointer'}}
                            />
                        </Badge>
                        <Badge color="error" variant='dot'>
                            <NotificationsIcon
                                onClick={handleOpenNotificationPopover}
                                ref={anchorRefNotification}
                            />
                        </Badge>
                        <Box component={'img'} src={Avatar_Image}
                            onClick={handleOpenProfilePopover}
                            ref={anchorRefProfile}
                            sx={{width : '40px !important', height : '40px !important', marginLeft : '30px', cursor : 'pointer'}}
                        />
                    </Box>
                </> :
                <Box sx={{width : '100%',display : 'flex', justifyContent : 'space-around', alignItems : 'center'}}>
                    {!searchPopOver ?
                        <>
                            <IconButton onClick={() => handleClose(true)}>
                                <MenuIcon />
                            </IconButton>
                            <SearchIcon
                                ref={anchorRefSearch}
                                onClick={handleOpenSearchPopOver}
                                style={{ fill: "#6F767E" }}
                            />
                            <Badge color="error" variant='dot'>
                                <MessageIcon 
                                    ref={anchorRefMessage}
                                    onClick={handleOpenMessagePopOver}
                                />
                            </Badge>
                            <Badge color="error" variant='dot'>
                                <NotificationsIcon
                                    onClick={handleOpenNotificationPopover}
                                    ref={anchorRefNotification}
                                />
                            </Badge>
                        </> :
                        <TextField
                            id="search-bar"
                            className="text"
                            onInput={(e) => {
                                setSearchText(e.target.value);
                            }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"> <SearchIcon style={{ fill: "#6F767E" }} /> </InputAdornment>,
                                endAdornment: <InputAdornment position="end">
                                        <Button variant='contained' sx={{background : theme.palette.common.white, "& path" : {fill : theme.palette.common.black}}}>
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
                    }
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
            
            <MessagePopover 
                popOver={messagePopOver}
                anchorRef={anchorRefMessage}
                handleClosePopOver={handleCloseMessagePopOver}
            />
            
            <NotificationPopover
                popOver={notificationPopOver}
                anchorRef={anchorRefNotification}
                handleClosePopOver={handleCloseNotificationPopover}
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