import React, { useEffect, useState } from "react";

import EditProduct from "./EditProduct";
import ShopTabs from "../../../components/Common/ShopTabs";
import Background_Image from "../../../assets/Shop/bg.png";
import Avatar_Image from '../../../assets/Home/Avatar.png';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
    Box,
    Button,
    Grid,
    Paper,
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import { StrokeIcon } from "../../../components/Common/SvgStatic";

const useStyles = makeStyles((theme) => ({
    root : {
        background : theme.palette.primary.main,

        "& .MuiPaper-root" : {
            padding : '30px',
            margin : '30px',
            "@media (max-width:600px)" : {
                padding : '10px',
                margin : '10px',
            }
        }
    },
    top : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        "& img" : {
            width : '80px',
            height : '80px',
            marginRight : '20px'
        },
        "& .MuiSvgIcon-root" : {
            marginRight : '30px'
        },
        "& .MuiButton-root" : {
            width : '100px',
            height : '48px',
            color : 'white',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            background : '#2A85FF',
            borderRadius : '12px',
            marginLeft : '30px'
        },
        "@media (max-width:900px)" : {
            display : 'grid',
            justifyContent : 'center'
        }
    }
}))

const Shop = () => {
    const classes = useStyles() ;
    const match900 = useMediaQuery('(min-width : 900px)');
    
    const [ open, setOpen ] = useState(false);

    const handleChangeDrawer = (type) => {
        setOpen(type)
    }

    return (
        <Box className={classes.root}>
            <Box component={'img'} src={Background_Image} sx={{width : '100%', height : '300px'}}/>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center', mb : 2}}>
                        <Box component={'img'} src={Avatar_Image} />
                        <Box>
                            {
                                match900 &&
                                <Box sx={{fontSize : '32px'}}>
                                    Chelsie Haley
                                </Box>
                            }
                            <Box sx={{fontSize : '20px'}}>
                                Dream big. Think different. Do great!
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                        <TwitterIcon />
                        <InstagramIcon />
                        {StrokeIcon}
                        <Button>
                            Follow
                        </Button>
                    </Box>
                </Box>

                <ShopTabs setOpen={setOpen}/>
                <EditProduct 
                    open={open}
                    onClose={() => handleChangeDrawer(false)}
                />
            
            </Paper>
        </Box>
    );
}

export default Shop;