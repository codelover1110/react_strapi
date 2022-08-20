import React, { useState } from "react";

import CrypterNFT_Image from '../../../assets/Home/CrypterNFT.png'
import BentoMatte_Image from '../../../assets/Home/BentoMatte.png'
import Excellent_Image from '../../../assets/Home/Excellent.png'
import Fleet_Image from '../../../assets/Home/Fleet.png'
import VideoModal from "../../../components/Common/VideoModal";

import {
    Box,
    Grid,
    Paper,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Button,
    useTheme,
    Divider,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '20px',

        "& .MuiPaper-root": {
            padding: '30px',

            "& .MuiFormControl-root": {
                width: '100px'
            },
            "@media (max-width:700px)": {
                padding: '10px'
            }
        },
        "& .MuiButton-root": {
            width: '50px',
            height: '24px',
            fontSize: '12px',
            fontWeight: 'bold',
            textTransform: 'unset',
            borderRadius: '4px',
            padding: '10px',
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
    allProduct: {
        minWidth: '100%',
        height: '48px !important',
        border: '2px solid #EFEFEF',
        borderRadius: '12px !important',
        fontSize: '15px !important',
    }
}))

const PopularProduct = () => {
    const classes = useStyles();

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () =>{
        setOpenModal(true);
    }
    const handleCloseModal = ()=>{
        setOpenModal(false);
    }

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box className={classes.popularTip} />
                        <Box sx={{ fontSize: '18px', ml: 2 }}> Popular products </Box>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
                    <Box>
                        Products
                    </Box>
                    <Box>
                        Earning
                    </Box>
                </Box>

                <Divider />

                <Box onClick={handleOpenModal} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component={'img'} src={CrypterNFT_Image} sx={{ mr: 1 }} />
                        <Box sx={{ fontWeight: 'bold' }}>
                            Crypter-NFT <br /> UI kit
                        </Box>
                    </Box>
                    <Box>
                        <Box> $2,453.80 </Box>
                        <Button variant="contained" sx={{ background: '#EAFAE5', color: '#83BF6E' }}>
                            Active
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }} >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component={'img'} src={BentoMatte_Image} sx={{ mr: 1 }} />
                        <Box sx={{ fontWeight: 'bold' }}>
                            Bento Matte 3D <br /> illustration 1.0
                        </Box>
                    </Box>
                    <Box>
                        <Box> $105.60 </Box>
                        <Button variant="contained" sx={{ background: '#FFE7E4', color: '#FF6A55' }}>
                            Deactive
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component={'img'} src={Excellent_Image} sx={{ mr: 1 }} />
                        <Box sx={{ fontWeight: 'bold' }}>
                            Excellent material 3D chair
                        </Box>
                    </Box>
                    <Box>
                        <Box> $648.60 </Box>
                        <Button variant="contained" sx={{ background: '#EAFAE5', color: '#83BF6E' }}>
                            Active
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component={'img'} src={Fleet_Image} sx={{ mr: 1 }} />
                        <Box sx={{ fontWeight: 'bold' }}>
                            Fleet-trabel <br /> shopping kit
                        </Box>
                    </Box>
                    <Box>
                        <Box> $648.60 </Box>
                        <Button variant="contained" sx={{ background: '#EAFAE5', color: '#83BF6E' }}>
                            Active
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Button variant="outlined" className={classes.allProduct}>
                        All products
                    </Button>
                </Box>
            </Paper>
            <VideoModal open={openModal} handleCloseModal={handleCloseModal}/>
        </Box>
    );
}

export default PopularProduct;
