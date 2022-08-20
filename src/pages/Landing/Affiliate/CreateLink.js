import React, { useState } from "react";

import CrypterNFT_Image from '../../../assets/Home/CrypterNFT.png'
import BentoMatte_Image from '../../../assets/Home/BentoMatte.png'
import Excellent_Image from '../../../assets/Home/Excellent.png'
import Fleet_Image from '../../../assets/Home/Fleet.png';
import img_20220814 from '../../../assets/Promote/RecentPost/img_20220814.png';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
    Box,
    Paper,
    Button,
    useTheme,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    InputAdornment
} from '@mui/material';
import Select from '@mui/material/Select';

import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '20px',
        fontSize: '15px',
        "& .MuiPaper-root": {
            padding: '24px',

            "& .MuiFormControl-root": {
                width: '100px'
            },
            "@media (max-width:700px)": {
                padding: '16px'
            }
        },

    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    popularTip: {
        width: '16px',
        height: '32px',
        background: '#B1E5FC',
        borderRadius: '4px',
    },
    promoteText: {
        marginBottom: '12px'
    },
    enterLink: {
        marginTop: '24px',
        width: '100%',
        "& .MuiFormControl-root": {
            width: '100%'
        }
    },
    proSelect: {
        width: '100%',
        marginBottom: '12px!important'
    },
    createBtn: {
        borderRadius: '8px',
        backgroundColor: '#2A85FF',
        color: theme.palette.common.white,
        padding: '8px 16px'
    },
    linkPromote: {
        marginTop: '32px'
    }
}))

const CreateLink = () => {
    const classes = useStyles();
    const [product, setProduct] = React.useState('');
    const handleChange = (event) => {
        setProduct(`${event.target.value}`);
    }

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '36px' }}>
                        <Box className={classes.popularTip} />
                        <Box sx={{ fontSize: '20px', ml: 2 }}>Create a link</Box>
                    </Box>
                </Box>
                <Box className={classes.linkProduct}>
                    <Box className={classes.promoteText}>Promote any product with a simple link</Box>
                    <Box className={classes.proSelect}>
                        <FormControl
                            sx={{
                                minWidth: '100%', height: '35px',
                                width: '100%'
                            }}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={product}
                                placeholder="Choose your product"
                                onChange={handleChange}
                            >
                                <MenuItem value={'sweet gem'}>product_1</MenuItem>
                                <MenuItem value={'dress'}>product_2</MenuItem>
                                <MenuItem value={'bag'}>product_3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className={classes.enterLink}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            placeholder="Or enter a product link"
                            size="small"
                            sx={{ width: '100%!important' }}
                        />

                    </Box>
                    <Button size="medium" className={classes.createBtn}>Create</Button>
                </Box>
                <Box className={classes.linkPromote}>
                    <Box sx={{ marginBottom: "12px" }}>
                        Use this link to promote.
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue="https://ui8.net/rel=tmtt"
                            size="small"
                            sx={{ width: '100%!important' }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LinkIcon sx={{
                                            "&:hover": {
                                                cursor: 'pointer'
                                            }
                                        }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <ContentCopyIcon sx={{
                                            "&:hover": {
                                                cursor: 'pointer'
                                            }
                                        }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box className={classes.socialBox}>
                        share to social accounts
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Box sx={{ display: 'flex', margin: '20px 0px' }}>
                                <Box sx={{ marginRight: '20px', position: 'relative' }}>
                                    <img src={img_20220814} alt="Noimage" width="55px" height="55px" style={{ borderRadius: '50%' }} />
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
                                    <img src={img_20220814} alt="Noimage" width="55px" height="55px" style={{ borderRadius: '50%', opacity: '50%' }} />
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
                            <Button size="medium" sx={{height: '35px'}} className={classes.createBtn} endIcon={<ArrowForwardIcon/>}>share</Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default CreateLink;
