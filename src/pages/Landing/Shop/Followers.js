import React, { useState, useEffect } from 'react' ;

import Joyce_Image from '../../../assets/Home/Joyce.png';
import Avatar1_Image from '../../../assets/Home/Avatar.png';
import Message3_Image from '../../../assets/Profile/message3.png';
import Message4_Image from '../../../assets/Profile/message4.png';
import Message5_Image from '../../../assets/Profile/message5.png';
import Product1_Image from '../../../assets/Explore/explore5.png';
import Product2_Image from '../../../assets/Explore/explore8.png';
import Product3_Image from '../../../assets/Explore/explore1.png';
import Product4_Image from '../../../assets/Shop/shop1.png';
import Product5_Image from '../../../assets/Shop/shop2.png';
import Product6_Image from '../../../assets/Shop/shop3.png';
import Product7_Image from '../../../assets/Explore/explore2.png';
import Product8_Image from '../../../assets/Promote//RecentPost/Avatar2.png';
import Product9_Image from '../../../assets/Shop/product.png';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EastIcon from '@mui/icons-material/East';

import {
    Box, Button, Grid, useMediaQuery ,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {

        "& .MuiGrid-item" : {
            display : 'flex',
            justifyContent : 'center',
        },
        "& .MuiButton-root" : {
            height : '48px',
            color : theme.palette.text.selected,
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            borderRadius : '12px',
            padding : '10px',
        },
    },
    cardList : {
        padding : '50px 0px'
    },
    card : {
        width : '300px',
        height : '300px',
        borderRadius : '18px',
        overflow : 'hidden',
        cursor : 'pointer',

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
    backdropFilter : {
        position : 'absolute',
        top : 0,
        left : 0,
        width : '100%',
        height : '200px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        opacity : 0,
        "&:hover" : {
            opacity : 1,
            backdropFilter: 'brightness(40%)',
        }
    },
    editBtn : {
        width : '50px',
        height : '50px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : 'white',
        borderRadius : '50%',
        margin : '5px',
        "& .MuiSvgIcon-root" : {
            color : 'black'
        }
    },
    name : {
        color : theme.palette.text.selected
    },
    price : {
        background : '#B5E4CA',
        borderRadius : '4px',
        padding : '5px 10px'
    }
}))

const collection = [
    {
        image : Product1_Image,
    },
    {
        image : Product2_Image,
    },
    {
        image : Product3_Image,
    },
    {
        image : Product4_Image,
    },
    {
        image : Product5_Image,
    },
    {
        image : Product6_Image,
    },
    {
        image : Product7_Image,
    },
    {
        image : Product8_Image,
    },
    {
        image : Product9_Image,
    },
]

const followersData = [
    {
        image : Joyce_Image,
        message : false,
    },
    {
        image : Avatar1_Image,
        message : false,
    },
    {
        image : Message3_Image,
        message : true,
    },
    {
        image : Message4_Image,
        message : false,
    },
    {
        image : Message5_Image,
        message : true,
    },
]

const Followers = (props) => {

    const {
        setOpen
    } = props;

    const classes = useStyles() ;
    const match1400 = useMediaQuery('(min-width : 1400px)');
    const match900 = useMediaQuery('(min-width : 900px)');

    return (
        <Box className = {classes.root}>
            <Grid container>
                <Grid item xs={match900 ? 5 : 12} sx={{justifyContent : 'flex-start !important'}}>
                    <Box>
                        {
                            followersData.map((element, index) => {
                                return(
                                    <Box key={index} sx={{display : 'flex', alignItems : 'center', mb : 4}}>
                                        <Box component={'img'} src={element.image} sx={{width : '60px', height : '60px', mr:1}}/>
                                        <Box>
                                            <Box sx={{fontSize : '20px', fontWeight : 'bold'}}>
                                                Reed Parker
                                            </Box>
                                            <Box sx={{mb : 1}}>
                                                16 products | 3,568 followers
                                            </Box>
                                            <Box>
                                                <Button variant='outlined' sx={{mr : 2}}>
                                                    Following
                                                </Button>
                                                {
                                                    element.message &&
                                                    <Button variant='contained' sx={{background : '#2A85FF'}}>
                                                        Message
                                                    </Button>
                                                }
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Grid>
                {
                    match900 &&
                    <Grid item xs={7}>
                        <Box className={classes.cardList}>
                            <Grid container spacing={5}>
                                {
                                    collection.map((element, index) => {
                                        return(
                                            <Grid key={index} item xs={match1400 ? 4 : match900 ? 6 : 12}>
                                                <Box className={classes.card}>
                                                    <Box className={classes.cardImage}>
                                                        <Box className={classes.backdropFilter}>
                                                            <Box className={classes.editBtn} onClick={() => setOpen(true)}>
                                                                <EditIcon />
                                                            </Box>
                                                            <Box className={classes.editBtn}>
                                                                <DeleteIcon />
                                                            </Box>
                                                            <Box className={classes.editBtn}>
                                                                <EastIcon />
                                                            </Box>
                                                        </Box>
                                                        <Box component={'img'} src={element.image}/>
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
                                                        <StarBorderIcon /> &nbsp; No ratings
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>
                }
            </Grid>
            
            <Box sx={{display : 'flex', justifyContent : 'center'}}>
                <Button>
                    Load more
                </Button>
            </Box>
        </Box>
    )
}
export default Followers ;