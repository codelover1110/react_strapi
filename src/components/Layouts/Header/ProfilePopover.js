import React from "react";

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
                        Upgrate to Pro
                    </ListItem>
                    <ListItem sx={{mt : '20px'}}>
                        Account settings
                    </ListItem>
                    <ListItem>
                        Log out
                    </ListItem>
                </List>
            </Box>
        </Popover>
    )
}

export default ProfilePopover;