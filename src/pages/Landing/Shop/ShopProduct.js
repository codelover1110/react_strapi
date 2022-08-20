import React, { useState } from "react";

import Avatar_Image from '../../../assets/Home/Avatar.png'
import LightProduct_Image from '../../../assets/Shop/lightproduct.png'
import DarkProduct_Image from '../../../assets/Shop/darkproduct.png'
import Product1_Image from '../../../assets/Shop/product.png';
import Product2_Image from '../../../assets/Explore/explore3.png'
import Product3_Image from '../../../assets/Explore/explore2.png'

import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Grid,
    List,
    ListItem,
    useMediaQuery,
    useTheme,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        padding : '50px',

        "& .MuiListItem-root" : {
            borderBottom : '1px solid lightgrey',

            "& .MuiSvgIcon-root" : {
                color : '#B5E4CA'
            }
        },

        ['@media (max-width:900px)'] : {
            padding : '10px'
        }
    },
    title : {
        fontSize : '32px',
        fontWeight : 'bold',
        marginBottom : '10px',

        "@media (max-width:900px)" : {
            fontSize : '20px',
            marginTop : '20px'
        }
    },
    subTitle : {
        fontSize : '20px',
        fontWeight : 500,
        marginBottom : '16px',

        "@media (max-width:900px)" : {
            fontSize : '16px',
            marginTop : '20px'
        }
    },
    productImage : {
        width : '100%',
        borderRadius : '12px',
        cursor : 'pointer',
        marginBottom : '40px'
    },
    overViewTip : {
        width : '16px',
        height : '32px',
        background : '#FFBC99',
        borderRadius : '4px',
    },
    featureTip : {
        width : '16px',
        height : '32px',
        background : '#CABDFF',
        borderRadius : '4px',
    },
    moreTip : {
        width : '16px',
        height : '32px',
        background : '#B5E4CA',
        borderRadius : '4px',
    },
    cardList : {
        display : 'flex',
        width : '100%',
        overflow : 'auto'
    },
    card : {
        padding : '20px'
    },
    cardImage : {
        minWidth : '300px',
        width : '300px',
        height : '250px',
        borderRadius : '12px'
    },
    price : {
        display : 'flex',
        alignItems : 'center',
        color : 'black',
        background : '#B5E4CA',
        borderRadius : '8px',
        padding : '5px 15px',
        marginLeft : '30px'
    },
    dialog : {
        
        "& .MuiDialog-paper" : {
            maxWidth : '1000px',
            background : theme.palette.common.black,

            "& .MuiDialogTitle-root" : {
                marginTop : '20px',
            },
            "& .MuiDialogContent-root" : {
                padding : '10px 100px',

                "@media (max-width:900px)" : {
                    padding : '10px 20px'
                }
            }
        },
        "& .MuiButton-root" : {
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            border : 'none',
            borderRadius : '12px',
            padding : '10px 20px',
        }
    },
    dialogTop : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
                
        "@media (max-width:900px)" : {
            marginBottom : '30px'
        }
    },
    favorite : {
        border : '1px solid lightgrey',
        borderRadius : '12px',
        padding : '15px 22px',
        marginRight : '20px',

        "& .MuiSvgIcon-root" : {
            color : '#FF6A55'
        }
    },
    downloadDiv : {
        display : 'flex',
        color : 'white',
        fontWeight : 'bold',
        background : '#2A85FF',
        borderRadius : '12px'
    },
    download : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        padding : '12px 20px'
    },
    setBtn : {
        minWidth : '110px',
        marginLeft : '20px',
        "& .MuiButton-root" : {
            minWidth : '21px !important',
            height : 'unset !important',
            borderRadius : '50%',
            padding : '10px 10px',
            marginRight : '10px'
        },
    }
}))

const ShopProduct = () => {
    const classes = useStyles() ;
    const theme = useTheme();
    const match900 = useMediaQuery('(min-width : 900px)');
    
    const [ openDialog, setOpenDialog ] = useState(false);

    const handleOpenDialog = (state) => {
        setOpenDialog(state);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Fleet - Travel shopping UI design kit
                <Box className={classes.subTitle}>
                    Elegant product mockup for your next project
                </Box>
            </Box>

            <Box sx={{display : 'flex', alignItems : 'center', mb : 4}}>
                <Box component={'img'} src={Avatar_Image} sx={{mr:2}}/>
                <Box>
                    by Chesie Haley
                    <StarOutlinedIcon sx={{color : '#FFC554', ml:3}}/>
                    4.8(87)
                </Box>
            </Box>

            <Box component={'img'}
                src={theme.palette.mode === 'light' ? LightProduct_Image : DarkProduct_Image}
                className={classes.productImage}
                onClick={() => handleOpenDialog(true)}
            />

            <Grid container spacing={3}>

                <Grid item xs={match900 ? 8 : 12}>
                    <Box sx={{display : 'flex', alignItems : 'center', mb : 3}}>
                        <Box className={classes.overViewTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Overview </Box>
                    </Box>

                    Meet Node - a crypto NFT marketplace iOS UI design kit for Figma, Sketch, and Adobe XD. The kit includes 126 stylish mobile screens in light and dark mode, a bunch of crypto 3D illustrations, 1 SaaS landing page with full premade breakpoints, and hundreds of components to help you ship your next crypto, NFT product faster.
                    <br/><br/>
                    Types of screens included: onboarding, connect wallet, home feed, profile, upload, menu, search, product detail, notification...
                    <br/><br/>
                    If you have any questions or requests, please feel free to leave them all in the comments section.
                </Grid>

                <Grid item xs={match900 ? 4 : 12}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.featureTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Features </Box>
                    </Box>

                    <List>
                        <ListItem>
                            <CheckOutlinedIcon />
                            128 prebuilt screens
                        </ListItem>
                        <ListItem>
                            <CheckOutlinedIcon />
                            Saas landing page ready
                        </ListItem>
                        <ListItem>
                            <CheckOutlinedIcon />
                            Global styleguide
                        </ListItem>
                        <ListItem sx={{border : 'none !important'}}>
                            <CheckOutlinedIcon />
                            Dark + light more ready
                        </ListItem>
                    </List>
                </Grid>
            </Grid>

            <Divider sx={{mt : 3, mb : 6}}/>

            <Box>
                <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.moreTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> More like this </Box>
                    </Box>
                    <Box>
                    <Button variant="outlined">
                        View all <ArrowForwardOutlinedIcon />
                    </Button>
                    </Box>
                </Box>

                <Box className={classes.cardList}>
                    <Box className={classes.card}>
                        <Box component={'img'} src={Product1_Image} className={classes.cardImage}/>
                        <Box sx={{display : 'flex', justifyContent : 'space-between', mt:2}}>
                            Fleet - Travel shopping UI design kit
                            <Box className={classes.price}>
                                $64
                            </Box>
                        </Box>
                        <Box sx={{mt : 1}}>
                            <StarBorderIcon />
                            No ratings
                        </Box>
                    </Box>
                    <Box className={classes.card}>
                        <Box component={'img'} src={Product2_Image} className={classes.cardImage}/>
                        <Box sx={{display : 'flex', justifyContent : 'space-between', mt:2}}>
                            Fleet - Travel shopping UI design kit
                            <Box className={classes.price}>
                                $64
                            </Box>
                        </Box>
                        <Box sx={{mt : 1}}>
                            <StarBorderIcon />
                            No ratings
                        </Box>
                    </Box>
                    <Box className={classes.card}>
                        <Box component={'img'} src={Product3_Image} className={classes.cardImage}/>
                        <Box sx={{display : 'flex', justifyContent : 'space-between', mt:2}}>
                            Fleet - Travel shopping UI design kit
                            <Box className={classes.price}>
                                $64
                            </Box>
                        </Box>
                        <Box sx={{mt : 1}}>
                            <StarBorderIcon />
                            No ratings
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Dialog
                fullScreen={match900}
                open={openDialog}
                onClose={() => handleOpenDialog(false)}
                className={classes.dialog}
            >
                <DialogTitle>
                    <Box className={classes.dialogTop}>
                        {
                            !match900 &&
                            <Box sx={{display : 'flex'}}>
                                <Button className={classes.favorite}>
                                    <FavoriteIcon />
                                    32
                                </Button>
                                <Box className={classes.downloadDiv}>
                                    <Box className={classes.download}>
                                        Download now
                                        <FileDownloadOutlinedIcon sx={{ml:1}}/>
                                    </Box>
                                </Box>
                            </Box>
                        }
                        <Box sx={{ color : theme.palette.background.bg}}>
                            Fleet - Travel shopping UI design kit
                        </Box>

                        <Box className={classes.setBtn}>
                            <Button>
                                <LinkIcon />
                            </Button>
                            <Button onClick={() => handleOpenDialog(false)}>
                                <CloseIcon />
                            </Button>
                        </Box>
                    </Box>
                    {
                        match900 &&
                        <Box sx={{display : 'flex'}}>
                            <Button className={classes.favorite}>
                                <FavoriteIcon />
                                32
                            </Button>
                            <Box className={classes.downloadDiv}>
                                <Box className={classes.download}>
                                    Download now
                                    <FileDownloadOutlinedIcon sx={{ml:1}}/>
                                </Box>
                            </Box>
                        </Box>
                    }
                </DialogTitle>
                <DialogContent>
                    <Box component={'img'}
                        src={theme.palette.mode === 'light' ? LightProduct_Image : DarkProduct_Image}
                        className={classes.productImage}
                        onClick={() => handleOpenDialog(true)}
                    />
                    <Box sx={{textAlign : 'center', color : theme.palette.background.bg}}>
                        Elegant product mockup for your nect project
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default ShopProduct;