import React from "react";
import { useNavigate } from "react-router-dom";

import Message1_Image from '../../../assets/Profile/message1.png';
import Message2_Image from '../../../assets/Profile/message2.png';
import Message3_Image from '../../../assets/Profile/message3.png';
import Message4_Image from '../../../assets/Profile/message4.png';
import Message5_Image from '../../../assets/Profile/message5.png';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import {
    Box, Button, List, ListItem, Popover
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
        },
        "& .MuiButton-root" : {
            width : '300px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            background : '#2A85FF',
            borderRadius : '12px',
            padding : '10px',
        },
    },
})) ;

const messageList = [
    {
        image : Message1_Image,
        name : 'Jarret Waelchi',
        time : '03:30PM',
    },
    {
        image : Message2_Image,
        name : 'Orval Casper',
        time : '11:59AM',
    },
    {
        image : Message3_Image,
        name : 'Michel Emard',
        time : '09:30AM',
    },
    {
        image : Message4_Image,
        name : 'Reuben Ward',
        time : '08:00AM',
    },
    {
        image : Message5_Image,
        name : 'Evalyn Jekins',
        time : '07:01AM',
    },
]

const MessagePopover = (props) => {

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
                horizontal : 'right'
            }}
            PaperProps={{
                style : { width : '360px'}
            }}
        >
            <Box className={classes.popOver}>
                <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                    Message
                    <MoreHorizIcon />
                </Box>

                <List>
                    {
                        messageList.map((element,index) => {
                            return(
                                <ListItem key={index}>
                                    <Box component={'img'} src={element.image} sx={{mr : 1}}/>
                                    <Box>
                                        <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                                            <Box>
                                                {element.name}
                                            </Box>
                                            <Box sx={{display : 'flex', alignItems : 'center'}}>
                                                {element.time}
                                                <Box sx={{width : '12px', height : '12px', background : '#2A85FF', borderRadius : '50%', ml : 1}} />
                                            </Box>
                                        </Box>
                                        <Box sx={{color : '#6F767E'}}>
                                            When do you release the coded...
                                        </Box>
                                    </Box>
                                </ListItem>
                            )
                        })
                    }
                </List>

                <Box sx={{width : '100%', display : 'flex', justifyContent : 'center'}}>
                    <Button onClick={() => handleChangeNavigate('/message')}>
                        View in message center
                    </Button>
                </Box>
            </Box>
        </Popover>
    )
}

export default MessagePopover;