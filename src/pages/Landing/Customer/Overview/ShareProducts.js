import React, { useState } from "react";

import Image1 from '../../../../assets/Explore/explore1.png';
import Image2 from '../../../../assets/Explore/explore4.png';

import { FacebookSvgIcon, TwitterSvgIcon } from "../../../../components/Common/SvgStatic";

import InstagramIcon from '@mui/icons-material/Instagram';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

import {
    Box,
    Grid,
    Paper,
    MenuItem,
    FormControl,
    Select,
    Button,
    useTheme,
    useMediaQuery,
    Divider,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            padding : '30px',
            marginBottom : '20px',

            "& .MuiFormControl-root" : {
                width : '150px'
            },
            ['@media (max-width:700px)'] : {
                padding : '10px'
            }
        },
        "& .MuiButtonBase-root" : {
            width : '200px',
            fontSize : '15px',
            textTransform : 'unset',
            border : '2px solid #EFEFEF',
        },
        "& .MuiGrid-item" : {
            display : 'flex',
            justifyContent : 'center',
        },
    },
    shareTip : {
        width : '16px',
        height : '32px',
        background : '#B1E5FC',
        borderRadius : '4px',
    },
    top : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
        marginBottom : '20px',
        "& .MuiFormControl-root" : {
            margin : '0px',
        }
    },
    card : {
        width : '300px',
        height : '300px',
        borderRadius : '18px',
        overflow : 'hidden',
        cursor : 'pointer',

        "& .MuiSvgIcon-root" : {
            marginRight : '10px'
        },
        ['@media (max-width:500px)'] : {
            width : '400px',
            height : '300px',
        },
    },
    cardImage : {
        position : 'relative',
        fontSize : '16px',
        
        "& img" : {
            width : '300px',
            height : '200px',

            ['@media (max-width:500px)'] : {
                width : '100%',
            },
        },
    },
    name : {
        color : theme.palette.text.selected
    },
    price : {
        color : 'black',
        fontWeight : 'bold',
        background : '#B5E4CA',
        borderRadius : '4px',
        padding : '5px 10px',
        marginLeft : '10px'
    },
    bottomDiv : {
        padding : '20px 50px',
        "@media (max-width:1600px)" : {
            padding : '20px 0px'
        },
    },
    buttonGroup : {
        display : 'flex',
        justifyContent : 'space-between',
        padding : '20px 0px',
        
        "& svg" : {
            color : '#6F767E',
            width : '20px',
            height : '20px',
            marginRight : '10px',
        },
    }
}))

const ShareProducts = () => {
    const classes = useStyles() ;
    const theme = useTheme();
    const match900 = useMediaQuery('(min-width : 900px)');

    const [ type, setType ] = useState(1);

    const handleChange = (e) => {
        setType(e.target.value)
    }
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.shareTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Share your products </Box>
                    </Box>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={(e) => handleChange(e)}
                        >
                            <MenuItem value={1}> Go to promote </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Box className={classes.card}>
                            <Box className={classes.cardImage}>
                                <Box component={'img'} src={Image1}/>
                            </Box>
                            <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', p : 2}}>
                                <Box className={classes.name}>
                                    Fleet - Travel shopping UI design kit
                                </Box>
                                <Box className={classes.price}>
                                    $64
                                </Box>
                            </Box>
                            <Box sx={{padding : '0px 16px'}}>
                                <WatchLaterOutlinedIcon />
                                Apr 9, 2021 at 3:55 PM
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.card}>
                            <Box className={classes.cardImage}>
                                <Box component={'img'} src={Image2}/>
                            </Box>
                            <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', p : 2}}>
                                <Box className={classes.name}>
                                    Fleet - Travel shopping UI design kit
                                </Box>
                                <Box className={classes.price}>
                                    $64
                                </Box>
                            </Box>
                            <Box sx={{padding : '0px 16px'}}>
                                <WatchLaterOutlinedIcon />
                                Apr 9, 2021 at 3:55 PM
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box className={classes.bottomDiv}>
                    <Divider sx={{mb : 2}} />

                    <Box>
                        50% of new customers explore products because the author sharing the work on the social media network. Gain your earnings right now! 🔥
                    </Box>

                    <Box className={classes.buttonGroup}>
                        <Button variant="contained" sx={{background : '#2A85FF', "& path" : {fill : 'white'}}}>
                            {FacebookSvgIcon}
                            {
                                match900 && "Facebook"
                            }
                        </Button>
                        <Button variant="outlined">
                            {TwitterSvgIcon}
                            {
                                match900 && "Twitter"
                            }
                        </Button>
                        <Button variant="outlined">
                            <InstagramIcon />
                            {
                                match900 && "Instagram"
                            }
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default ShareProducts;

                                