import React from 'react';

import { useStyles } from './StyledDiv/Trending.styles';
//mockup
import { ProductTrending } from './ProductTrending';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
    Box,
    Button,
    useMediaQuery,
    Icon
} from '@mui/material';


const Trending = () => {
    const classes = useStyles();
    const match900 = useMediaQuery('(min-width: 900px)');
    const match768 = useMediaQuery('(min-width: 768px)');
    return (
        <Box className={classes.root}>
            {
                ProductTrending.map((each, index) => {
                    return (
                        <Box className={classes.eachPost} key={index}>
                            <Box className={classes.top}>
                                <Box className={classes.info}>
                                    <Box className={classes.img_box}><img src={each.poster_img} alt="" width="80px" height="80px" style={{ borderRadius: '50%' }} /></Box>
                                    <Box>
                                        <Box className={classes.posterName}>
                                            {each.poster_name}
                                            <Box sx={{ marginLeft: '6px', background: '#B5E4CA', fontSize: '15px', fontWeight: '700', padding: '8px 8px', lineHeight: '24px', borderRadius: '6px' }}>#{each.rank}</Box>
                                        </Box>
                                        <Box className={classes.num_state}>
                                            <Box className={classes.productNum}>
                                                {each.product_num} <tr style={{ width: '2px' }} />productors
                                            </Box>
                                            <Box sx={{ width: 2, height: 8, backgroundColor: '#EFEFEF', margin: '0 5px' }}></Box>
                                            <Box className={classes.followNum}>
                                                {each.followers}
                                                <tr style={{ width: '2px' }} />followers
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>
                                {
                                    match768 &&
                                    <Box className={classes.postBtn}>
                                        {
                                            match900 &&
                                            <Button variant="outlined" sx={{ marginRight: '8px' }} size="medium">Following</Button>

                                        }
                                        <Button variant="contained" sx={{ backgroundColor: '#2A85FF' }} size="medium">Shop now</Button>
                                    </Box>
                                }
                            </Box>
                            <Box className={classes.postContent}>
                                {
                                    each.products.map((eachProduct) => {
                                        return (
                                            <Box className={classes.productImg}>
                                                <img src={eachProduct.src} alt="" width="218px" style={{ borderRadius: '5px' }} />
                                                <Box className={classes.overlay}>
                                                    <Box sx={{
                                                        backgroundColor: 'white', borderRadius: '50%', padding: '5px', 
                                                        "& .MuiSvgIcon-root": {
                                                            color: '#424242'
                                                        },
                                                        cursor: 'pointer'
                                                    }}>
                                                        <ArrowForwardIcon />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default Trending;