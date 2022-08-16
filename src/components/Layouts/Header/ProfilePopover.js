import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Box, List, ListItem, Popover
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import { AffiliateIcon, AnalyticsIcon, ExploreIcon, UpgradeIcon } from "../../Common/SvgStatic";

const useStyles = makeStyles((theme) => ({
    popOver : {
        padding : '20px',
        fontSize : '16px',
        "& .MuiListItem-root" : {
            display : 'flex',
            alignItems : 'center',
            padding : '10px 0px',
            cursor : 'pointer'
        },
        "& svg" : {
            marginRight : '20px'
        }
    },
})) ;

const ProfilePopover = (props) => {

    const {
        popOver,
        anchorRef,
        handleClosePopOver,
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const handleChangeNavigate = (url) => {
        navigate(url);
        handleClosePopOver();
    }

    return(
        
        <Popover
            id="popover"
            open={popOver}
            anchorEl={anchorRef ? anchorRef.current : null}
            onClose={handleClosePopOver}
            anchorOrigin={{
                vertical : 'bottom',
                horizontal : 'left'
            }}
            PaperProps={{
                style : { width : '360px'}
            }}
        >
            <Box className={classes.popOver}>
                <List>
                    <ListItem onClick={() => handleChangeNavigate('/profile')}>
                        Profile
                    </ListItem>
                    <ListItem onClick={() => handleChangeNavigate('/editprofile')}>
                        Edit profile
                    </ListItem>
                    <ListItem onClick={() => handleChangeNavigate('/analytics')} sx={{fontWeight : 'bold', mt : '20px'}}>
                        { AnalyticsIcon }
                        Analytics
                    </ListItem>
                    <ListItem onClick={() => handleChangeNavigate('/affiliate')}>
                        { AffiliateIcon }
                        Affiliate center
                    </ListItem>
                    <ListItem onClick={() => handleChangeNavigate('/explore')}>
                        { ExploreIcon }
                        Explore authors
                    </ListItem>
                    <ListItem onClick={() => handleChangeNavigate('/upgrade')} sx={{color : '#8E59FF', mt : '20px'}}>
                        { UpgradeIcon }
                        Upgrade to Pro
                    </ListItem>
                    <ListItem onClick={() => handleChangeNavigate('/settings')} sx={{mt : '20px'}}>
                        Account settings
                    </ListItem>
                    <ListItem onClick={() => handleChangeNavigate('/logout')}>
                        Log out
                    </ListItem>
                </List>
            </Box>
        </Popover>
    )
}

export default ProfilePopover;