import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Box, List, ListItem, Popover, IconButton, Button
} from '@mui/material';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { makeStyles } from '@mui/styles';

//images
import manAvatar1 from '../../../assets/Notification/manAvatar1.png';
import manAvatar2 from '../../../assets/Notification/manAvatar2.png';
import manAvatar3 from '../../../assets/Notification/manAvatar3.png';
import manAvatar4 from '../../../assets/Notification/manAvatar4.png';
import manAvatar5 from '../../../assets/Notification/manAvatar5.png';

//icon
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';


const useStyles = makeStyles((theme) => ({
    popOver: {
        padding: '20px',
        fontSize: '16px',
        "& .MuiListItem-root": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 0px',
        },
    },
    filterImg: {
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #CABDFF',
        borderRadius: '50%',
        marginRight: '10px',
    },
    popOverHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: '600'

    },
    showAll: {
        width: '100%',
        fontSize: '15px',
        fontWeight: '700',
        color: 'white',
        backgroundColor: '#2A85FF'
    }
}));

const NotificationList = [
    {
        image_url: manAvatar1,
        symbol: 'comment', // comment, likes, purchased, rate,  
        sender_name: 'Domenica',
        region_name: '@domenica',
        title: 'Comment on Smiles -3D icons',
        hour: '1h',
        state: true,
    },
    {
        image_url: manAvatar2,
        symbol: 'likes  ', // comment, likes, purchased, rate,  
        sender_name: 'Janice',
        region_name: '@ethel',
        title: 'Comment on Smiles -3D icons',
        hour: '2h',
        state: true,
    },
    {
        image_url: manAvatar3,
        symbol: 'purchased', // comment, likes, purchased, rate,  
        sender_name: 'Janiya',
        region_name: '@ethel',
        title: 'Comment on Smiles -3D icons',
        hour: '4h',
        state: false,
    },
    {
        image_url: manAvatar4,
        symbol: 'rate', // comment, likes, purchased, rate,  
        sender_name: 'Daniel',
        region_name: '@ethel',
        title: 'Comment on Smiles -3D icons',
        hour: '6h',
        state: true,
    },
    {
        image_url: manAvatar5,
        symbol: 'comment', // comment, likes, purchased, rate,  
        sender_name: 'Esmeralda',
        region_name: '@ethel',
        title: 'Comment on Smiles -3D icons',
        hour: '8h',
        state: true,
    },
];

const NotificationPopover = (props) => {

    const {
        popOver,
        anchorRef,
        handleClosePopOver,
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();


    const handleNotificationClick = () => {
        navigate('/notification');
        handleClosePopOver();
    }

    return (
        <Popover
            open={popOver}
            anchorEl={anchorRef ? anchorRef.current : null}
            onClose={handleClosePopOver}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
            PaperProps={{
                style: { width: '400px' }
            }}
        >
            <Box className={classes.popOver}>
                <Box className={classes.popOverHeader}>
                    Notification
                    <IconButton sx={{
                        "&:hover": {
                            backgroundColor: '#EFEEEE'
                        }
                    }}>
                        <MoreHorizOutlinedIcon />
                    </IconButton>
                </Box>
                <List>
                    {
                        NotificationList.map((Notification, index) => {
                            let iconcolor;
                            switch (Notification.symbol) {
                                case 'comment':
                                    iconcolor = '#2A85FF';
                                    break;
                                case 'likes':
                                    iconcolor = '#FF6A55';
                                    break;
                                case 'purchased':
                                    iconcolor = '#83BF6E';
                                    break;
                                case 'rate':
                                    iconcolor = '#8E59FF';
                                    break;
                                default:
                                    iconcolor = '#2A85FF';
                                    break;
                            }
                            let subIcon;
                            switch (Notification.symbol) {
                                case 'comment':
                                    subIcon = <MessageIcon />;
                                    break;
                                case 'likes':
                                    subIcon = <FavoriteIcon />;
                                    break;
                                case 'purchased':
                                    subIcon = <ShoppingCartIcon />;
                                    break;
                                case 'rate':
                                    subIcon = <StarIcon />;
                                    break;
                                default:
                                    subIcon = <MessageIcon />;
                                    break;
                            }
                            return (
                                <ListItem key={index}>
                                    <Box position="relative">
                                        <img src={Notification.image_url} alt="" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'absolute',
                                            right: '0px', bottom: '0px', borderRadius: '50%',
                                            backgroundColor: iconcolor,
                                            width: '16px',
                                            height: '16px',
                                            border: '2px solid white',
                                            "& .MuiSvgIcon-root": {
                                                color: 'white',
                                                width: '10px',
                                                height: '10px'
                                            }
                                        }}>
                                            {subIcon}
                                        </Box>

                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box sx={{ fontSize: '15px', fontWeight: '700' }}>{Notification.sender_name}</Box>
                                                <Box sx={{ fontWeight: '500', paddingLeft: '5px', color: '#9A9FA5' }}>{Notification.region_name}</Box>
                                            </Box>
                                            <Box sx={{ overflow: 'hidden' }}>{Notification.title}</Box>
                                        </Box>
                                        <Box>{Notification.hour}</Box>
                                    </Box>
                                    <Box width="12px" height="12px" sx={{ borderRadius: '50%', marginTop: '5px', alignSelf: 'start' }} backgroundColor={Notification.state ? '#2A85FF' : '#EFEFEF'}></Box>
                                </ListItem>
                            )
                        })
                    }
                </List>
                <Button className={classes.showAll} onClick={() => handleNotificationClick()}>
                    See all notifications
                </Button>
            </Box>
        </Popover>
    )
}

export default NotificationPopover;