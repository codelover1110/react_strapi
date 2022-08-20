import * as React from 'react';

import { useStyles } from './StyledDiv/index.styles';

import {
    Box,
    Divider
} from '@mui/material';

import HelpIcon from '@mui/icons-material/Help';
import CloseIcon from '@mui/icons-material/Close';

import Avatar1 from '../../../assets/VideoSideBar/Avatar1.png';
import Avatar2 from '../../../assets/VideoSideBar/Avatar2.png';
import Avatar3 from '../../../assets/VideoSideBar/Avatar3.png';
import Avatar4 from '../../../assets/VideoSideBar/Avatar4.png';
import Client1 from '../../../assets/VideoSideBar/Client.png';
import Client2 from '../../../assets/VideoSideBar/Client1.png';
import Client3 from '../../../assets/VideoSideBar/Client3.png';

const videos = [
    {
        img_url: Avatar1,
        title: 'Exclusive downloads',
        newState: true,
        seenstate: {
            avatar: Client1,
            minago: 3
        }
    },
    {
        img_url: Avatar2,
        title: 'Exclusive downloads',
        newState: true,
        seenstate: {
            avatar: Client2,
            minago: 3
        }
    },
    {
        img_url: Avatar3,
        title: 'Exclusive downloads',
        newState: true,
        seenstate: {
            avatar: Client3,
            minago: 3
        }
    },
    {
        img_url: Avatar4,
        title: 'Exclusive downloads',
        newState: false,
        seenstate: {
            avatar: Client1,
            minago: 3
        }
    }
];

const VideoSideBar = (props) => {

    const {
        handleCloseVideoSideBar
    } = props;

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box className={classes.HelpIcon}>
                        <HelpIcon sx={{ width: '20px', height: '20px' }} />
                    </Box>
                    <Box className={classes.title}>Help &amp; getting started</Box>
                </Box>
                <Box className={classes.CloseIcon} onClick={handleCloseVideoSideBar} >
                    <CloseIcon />
                </Box>
            </Box>
            <Divider />
            <Box className={classes.content}>
                {
                    videos.map((video, index) => {
                        return (
                            <Box key={index} className={classes.vCard}>
                                <Box className={classes.vAvatar}>
                                    <img src={video.img_url} alt="" style= {{width:'80px'}} />
                                </Box>
                                <Box className={classes.rightPart}>
                                    <Box className={classes.title}>{video.title}</Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ backgroundColor: '#CABDFF', color: 'black', borderRadius: '4px', padding: '4px 8px', marginRight: '5px' }}>{video.newState ? 'New' : ''}</Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #F4F4F4', borderRadius: '12px', padding: '1px' }}>
                                            <Box sx={{ width: '24px', height: '24px'}}>
                                                <img src={video.seenstate.avatar} alt="" style={{width: '24px', height: '24px' }}/>
                                            </Box>
                                            <Box sx={{ marginLeft: '3px' }}>
                                                {video.seenstate.minago} mins0
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                }
                <Box className={classes.card}></Box>
            </Box>
            <Box className={classes.footer}></Box>
        </Box>
    );
}

export default VideoSideBar;