import * as React from 'react';

import { useStyles } from './StyledDiv/index.styles';

import { Box, Modal, Typography } from '@mui/material';
import JuanRecord from '../../../assets/Video/2022-08-15_Juan_Record.mp4';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkIcon from '@mui/icons-material/Link';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const video = [
    {
        title: 'Hello world',
        url: JuanRecord
    }
];


const VideoModal = (props) => {
    const classes = useStyles();
    const {
        open,
        handleCloseModal
    } = props;

    React.useEffect(() => {
        console.log("This is video modal");
    }, []);

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
        >
            <Box className={classes.modalContent}>
                <Box className={classes.ContentH}>
                    <Box className={classes.Favorite}>
                        <FavoriteIcon sx={{ color: '#FF6A55', marginRight: '5px' }} />
                        <Typography sx={{ margin: 0 }}>30</Typography>
                    </Box>
                    <Box className={classes.title}>User guidelines</Box>
                    <Box className={classes.action}>
                        <Box className={classes.chainIcon}><LinkIcon /></Box>
                        <Box className={classes.closeIcon} onClick={handleCloseModal}><CancelRoundedIcon sx={{width:'40px', height: '40px'}}/></Box>
                    </Box>
                </Box>
                <Box className={classes.ContentB} >
                    <Box className={classes.videoBox}>
                        <video src={JuanRecord} style={{ width: '960px', height: '500px'}} controls />
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default VideoModal;