import * as React from 'react';
import { useState } from 'react';

import { useRef } from 'react';

import { TwitterSvgIcon, FacebookSvgIcon } from "../../../components/Common/SvgStatic";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import {
    Icon,
    Box,
    Grid,
    Paper,
    MenuItem,
    FormControl,
    Select,
    Button,
    useTheme,
    useMediaQuery,
    Typography,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Table,
    IconButton,
    Modal,
    TextField,
    InputLabel,
    Input
} from '@mui/material';

//external style
import { useStyles } from './StyledDiv/index.styles';
//image
import Avatar from '../../../assets/Promote/RecentPost/Avatar.png';
import Avatar1 from '../../../assets/Promote/RecentPost/Avatar1.png';
import Avatar2 from '../../../assets/Promote/RecentPost/Avatar2.png';
import Avatar3 from '../../../assets/Promote/RecentPost/Avatar3.png';
import Avatar4 from '../../../assets/Promote/RecentPost/Avatar4.png';
import img_20220814 from '../../../assets/Promote/RecentPost/img_20220814.png';

const rows = [
    {
        type: 'picture',
        image: Avatar,
        message: {
            description: 'Hurry up! You got 50% off - all items',
            facebook: true,
            twitter: true
        },
        distribution: 1.2,
        linkClicks: 26,
        views: 256,
        engagement: 15,
    },
    {
        type: 'video',
        image: Avatar1,
        message: {
            description: 'Hurry up! You got 50% off - all items',
            facebook: true,
            twitter: true
        },
        distribution: 1.2,
        linkClicks: 26,
        views: 256,
        engagement: 15
    },
    {
        type: 'video',
        image: Avatar2,
        message: {
            description: 'Hurry up! You got 50% off - all items',
            facebook: true,
            twitter: true
        },
        distribution: 1.2,
        linkClicks: 26,
        views: 256,
        engagement: 15
    },
    {
        type: 'video',
        image: Avatar3,
        message: {
            description: 'Hurry up! You got 50% off - all items',
            facebook: true,
            twitter: true
        },
        distribution: 1.2,
        linkClicks: 26,
        views: 256,
        engagement: 15
    },
    {
        type: 'video',
        image: Avatar4,
        message: {
            description: 'Hurry up! You got 50% off - all items',
            facebook: true,
            twitter: true
        },
        distribution: 1.2,
        linkClicks: 26,
        views: 256,
        engagement: 15
    },

];

const Recentpost = () => {

    const classes = useStyles();
    const theme = useTheme();

    const [type, setType] = useState(1);
    const [open, setOpen] = React.useState(false);
    const [selectedVideo, setSelectedVideo] = React.useState({
        preview: "",
        raw: ""
    });
    const [fileType, setFileType] = useState(0);

    const handleChange = (e) => {
        setType(e.target.value)
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedVideo({
            preview: "",
            raw: ""
        });
    }

    const fileInput = useRef();
    const selectFile = (e) => {
        console.log(e);
        let buttonClick = e.target.id;

        if (buttonClick === "video_button") {
            setFileType(0);
        }
        if (buttonClick === "picture_button") {
            setFileType(1);
        }
        fileInput.current.click();
    }

    const handleSelectedVideo = e => {
        /* console.log(e.target.files[0]); */
        // console.log(fileType);
        setSelectedVideo({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        })
    };



    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box className={classes.overViewTip} />
                        <Box sx={{ fontSize: '18px', ml: 2 }}> Recent Post</Box>
                    </Box>
                    <Box>
                        <FormControl fullWidth
                            sx={{
                                width: '100px',
                                height: '40px',
                                "& .MuiSelect-select": {
                                    padding: '10px'
                                },
                                marginRight: '10px'
                            }}
                        >
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                onChange={(e) => handleChange(e)}
                            >
                                <MenuItem value={1}> All time </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Button onClick={handleOpen} variant="contained" sx={{ padding: '5px 16px 5px 16px', radius: '8px', fontSize: '13px', fontWeight: '700', backgroundColor: 'rgb(0, 140, 192)', color: 'white' }}>
                            New Post
                        </Button>
                    </Box>
                </Box>
                <Box className={classes.postList}>
                    <TableContainer component={Paper} sx={{ padding: '0px !important' }}>
                        <Table sx={{
                            minWidth: 650,
                            "& .MuiTableCell-root": {
                                textAlign: 'left'
                            },

                        }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '12px' }}>Post</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }} align="right"></TableCell>
                                    <TableCell sx={{ fontSize: '12px' }} align="right">Distribution</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }} align="right">Link clicks</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }} align="right">Views</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }} align="right">Engagement</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {rows.map((row, index) => (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        key={index}
                                    >
                                        <TableCell sx={{ position: 'relative', paddingLeft: 'inherit' }} width="180px" >
                                            <Box sx={{ height: '150px' }}>
                                                <Box sx={{ position: 'absolute', zIndex: '1', padding: '2px', margin: '2px', borderRadius: '5px', backgroundColor: '#FFF', color: '#6F767E' }}>
                                                    {row.type === 'picture' && <InsertPhotoIcon />}
                                                    {row.type === 'video' && <VideocamIcon />}
                                                </Box>
                                                <img src={row.image} width="175px" height="118px" style={{ borderRadius: '5px' }} />
                                            </Box>
                                        </TableCell>
                                        <TableCell width="180px">
                                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'end', fontSize: '15px', fontWeight: '700' }}>
                                                {row.message.description}
                                            </Box>
                                            <Box sx={{ display: 'flex', marginTop: '20px' }}>
                                                {row.message.facebook === true && <Box sx={{ width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF' }}>{FacebookSvgIcon}</Box>}
                                                {row.message.twitter === true && <Box sx={{ width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF', marginLeft: '12px' }}> {TwitterSvgIcon}</Box>}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{
                                                height: '150px',
                                                paddingTop: '30px'
                                            }}>
                                                <Box sx={{
                                                    padding: '0 7px',
                                                    fontSize: "15px",
                                                    fontWeight: "600",
                                                    backgroundColor: "#B5E4CA",
                                                    display: 'inline-flex',
                                                    borderRadius: '5px',
                                                    marginRight: '8px'
                                                }}>
                                                    {row.distribution >= 0 ? '+' : ''}{row.distribution}x
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ height: '150px', paddingTop: '30px' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                    <Box sx={{
                                                        padding: '0 7px',
                                                        fontSize: "15px",
                                                        lineHeight: '24px',
                                                        fontWeight: "600",
                                                        backgroundColor: "#EFEFEF",
                                                        display: 'inline-flex',
                                                        borderRadius: '5px',
                                                        marginRight: '8px'
                                                    }}>
                                                        {row.linkClicks}
                                                    </Box>
                                                    <Box sx={{
                                                        width: "44px",
                                                        height: "12px",
                                                        backgroundColor: "#FF6A55",
                                                        borderRadius: '2px'
                                                    }}>
                                                    </Box>
                                                </Box>
                                                <Box color="#83BF6E" sx={{ fontSize: '12px', lineHeight: '16px', marginTop: '10px' }}>
                                                    <ArrowUpwardIcon color="#83BF6E" />
                                                    37.8%
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ height: '150px', paddingTop: '30px' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                    <Box sx={{
                                                        padding: '0 7px',
                                                        fontSize: "15px",
                                                        lineHeight: '24px',
                                                        fontWeight: "600",
                                                        backgroundColor: "#EFEFEF",
                                                        display: 'inline-flex',
                                                        borderRadius: '5px',
                                                        marginRight: '8px'
                                                    }}>
                                                        {row.views}
                                                    </Box>
                                                    <Box sx={{
                                                        width: "44px",
                                                        height: "12px",
                                                        backgroundColor: "#83BF6E",
                                                        borderRadius: '2px'
                                                    }}>
                                                    </Box>
                                                </Box>
                                                <Box color="#83BF6E" sx={{ fontSize: '12px', lineHeight: '16px', marginTop: '10px' }}>
                                                    <ArrowUpwardIcon color="#83BF6E" />
                                                    37.8%
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ height: '150px', paddingTop: '30px' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                    <Box sx={{
                                                        padding: '0 7px',
                                                        fontSize: "15px",
                                                        lineHeight: '24px',
                                                        fontWeight: "600",
                                                        backgroundColor: "#83BF6E",
                                                        display: 'inline-flex',
                                                        borderRadius: '5px',
                                                        marginRight: '8px'
                                                    }}>
                                                        {row.engagement}
                                                    </Box>
                                                    <Box sx={{
                                                        width: "44px",
                                                        height: "12px",
                                                        backgroundColor: "#2A85FF",
                                                        borderRadius: '2px'
                                                    }}>
                                                    </Box>
                                                </Box>
                                                <Box color="#83BF6E" sx={{ fontSize: '12px', lineHeight: '16px', marginTop: '10px' }}>
                                                    <ArrowUpwardIcon color="#83BF6E" />
                                                    37.8%
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button startIcon={<RotateLeftIcon />}>Load more</Button>
                    </Box>
                </Box>
            </Paper >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modalContent}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <Box sx={{ display: 'flex', jsutifyContent: 'start', alignItems: 'center' }}>
                            <Box sx={{ width: '16px', height: '32px', backgroundColor: '#B5E4CA', borderRadius: '4px', marginRight: '16px' }}></Box>
                            <Typography sx={{ fontSize: '20px', fontWeight: '600', lignHeight: '32px', margin: '0px' }} color="#1A1D1F">New post</Typography>
                        </Box>
                        <IconButton onClick={handleClose} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EFEFEF' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                        <Box sx={{ marginRight: '20px', position: 'relative' }}>
                            <img src={img_20220814} width="55px" height="55px" style={{ borderRadius: '50%' }} />
                            {/* <FacebookOutlinedIcon sx={{position:'absolute', zIndex:'1' ,right:'0px', bottom:'0px'}}/> */}
                            <Box sx={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1', position: 'absolute', right: '0px', bottom: '0px', width: '25px', height: '25px', borderRadius: '50%', backgroundColor: 'white',
                                "& .MuiSvgIcon-root": {
                                    width: '24px',
                                    height: '24px',
                                    "& path": {
                                        color: "#2A85FF",
                                        width: '20px',
                                        height: '20px'
                                    }
                                }
                            }}>
                                <FacebookOutlinedIcon sx={{ width: '21px', height: '21px', zIndex: '2' }} />
                            </Box>
                        </Box>
                        <Box sx={{ marginRight: '20px', position: 'relative' }}>
                            <img src={img_20220814} width="55px" height="55px" style={{ borderRadius: '50%', opacity: '50%' }} />
                            {/* <FacebookOutlinedIcon sx={{position:'absolute', zIndex:'1' ,right:'0px', bottom:'0px'}}/> */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1', position: 'absolute', right: '0px', bottom: '0px', width: '25px', height: '25px', borderRadius: '50%', backgroundColor: 'white' }}>
                                <Box
                                    sx={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '2', backgroundColor: '#2A85FF',
                                        width: '20px', height: '20px', borderRadius: '50%',
                                        "& .MuiSvgIcon-root": {
                                            color: 'white',
                                            width: '15px',
                                            height: '15px'
                                        }
                                    }
                                    }>
                                    <TwitterIcon />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ minHeight: '200px', borderBottom: '1px solid #EFEFEF', marginBottom: '20px', cursor: 'pointer' }} >
                        <InputLabel
                            disabled
                        >
                            {
                                selectedVideo.preview && <Box sx={{ fontSize: '20px', color: 'rgba(111, 118, 126, 0.4)' }}>What would you like to share ?</Box> ?
                                    fileType === 0 ?
                                        <Box sx={{ borderRadius: '5px' }}>
                                            <video style={{ width: '100%', height: '100%' }} src={selectedVideo.preview} controls />
                                        </Box>
                                        :
                                        <Box sx={{ borderRadius: '5px' }}>
                                            <img src={selectedVideo.preview} />
                                        </Box>
                                    : "Please, Select Video"

                            }

                        </InputLabel>
                        <input
                            id='select_video_ref'
                            type="file"
                            onChange={handleSelectedVideo}
                            style={{ display: "none" }}
                            ref={fileInput}
                        />
                    </Box>
                    <Box sx={{
                        padding: '10px 0', display: 'flex', justifyContent: 'space-between',
                    }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box id="picture_button" onClick={selectFile}
                                sx={{
                                    cursor: 'pointer',
                                    padding: '10px', borderRadius: '50%',
                                    marginRight: '10px',
                                    "&:hover": { backgroundColor: theme.palette.common.white }
                                }}>
                                <InsertPhotoOutlinedIcon />
                            </Box>
                            <Box id="video_button" onClick={selectFile}
                                sx={{
                                    cursor: 'pointer',
                                    padding: '10px', borderRadius: '50%',
                                    "&:hover": { backgroundColor: theme.palette.common.white }
                                }}>
                                <VideocamOutlinedIcon />
                            </Box>
                        </Box>
                        <Box>
                            <Button sx={{ color: 'white', backgroundColor: 'rgb(0, 140, 192)' }}>POST <ArrowForwardOutlinedIcon /></Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box >
    );
}

export default Recentpost;

/* selecte video test */