import React, { useState } from "react";

import { AssetIcon, BehindIcon, EarlyAccessIcon, ExclusiveIcon, IncomeIcon, LifeIcon } from "../../../components/Common/SvgStatic";
import Gladyce_Image from '../../../assets/Home/Gladyce.png';
import Joyce_Image from '../../../assets/Home/Joyce.png';

import EastIcon from '@mui/icons-material/East';

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
    useMediaQuery,
    Typography,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            padding : '30px',
            marginBottom : '20px',

            "& .MuiFormControl-root" : {
                width : '100px'
            },
            ['@media (max-width:700px)'] : {
                padding : '10px'
            }
        },
        "& img" : {
            width : '25px',
            height : '25px',
            marginRight : '5px'
        },
        "& .MuiGrid-item" : {
            display : 'flex',
            alignItems : 'center'
        },
        "& path" :
        {
            fill : theme.palette.common.black
        }
    },
    top : {
        width : '100%',
        marginBottom : '20px',
    },
    proTip : {
        width : '16px',
        height : '32px',
        background : '#B5E4CA',
        borderRadius : '4px',
    },
    icons : {
        width : '64px',
        height : '64px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : '50%',
        border : '1px solid lightgrey',
        marginRight : '10px'
    }
}))

const ProTip = () => {
    const classes = useStyles() ;
    const match = useMediaQuery('(min-width : 900px)');
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center', mb : 2}}>
                        <Box className={classes.proTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Pro tips </Box>
                    </Box>
                    <Box>
                        Need some ideas for the next product?
                    </Box>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={match ? 6 : 12}>
                            <Box className={classes.icons}>
                                { EarlyAccessIcon }
                            </Box>
                            <Box>
                                <Box sx={{fontWeight : 'bold'}}>
                                    Early access
                                </Box>
                                <Box sx={{display : 'flex', alignItems : 'center'}}>
                                    <Box sx={{background : '#CABDFF', borderRadius : '4px', padding : '4px', mr : 1}}>
                                        New
                                    </Box>
                                    <Box component={'img'} src={Gladyce_Image} />
                                    <Typography sx={{m : 0}}> 3 mins read </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={match ? 6 : 12}>
                            <Box className={classes.icons}>
                                <EastIcon />
                            </Box>
                            <Box>
                                <Box sx={{fontWeight : 'bold'}}>
                                    Asset use guildelines
                                </Box>
                                <Box sx={{display : 'flex', alignItems : 'center'}}>
                                    <Box sx={{background : '#B5E4CA', borderRadius : '4px', padding : '4px', mr : 1}}>
                                        Small label
                                    </Box>
                                    <Box component={'img'} src={Gladyce_Image} />
                                    <Typography sx={{m : 0}}> Time </Typography>
                                    
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={match ? 6 : 12}>
                            <Box className={classes.icons}>
                                { ExclusiveIcon }
                            </Box>
                            <Box>
                                <Box sx={{fontWeight : 'bold'}}>
                                    Exclusive downloads
                                </Box>
                                <Box sx={{display : 'flex', alignItems : 'center'}}>
                                    <Box component={'img'} src={Gladyce_Image} />
                                    <Typography sx={{m : 0}}> 2 mins read </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={match ? 6 : 12}>
                            <Box className={classes.icons}>
                                { BehindIcon }
                            </Box>
                            <Box>
                                <Box sx={{fontWeight : 'bold'}}>
                                    Behind the scenes
                                </Box>
                                <Box sx={{display : 'flex', alignItems : 'center'}}>
                                    <Box sx={{background : '#FFBC99', borderRadius : '4px', padding : '4px', mr : 1}}>
                                        Hot
                                    </Box>
                                    <Box component={'img'} src={Gladyce_Image} />
                                    <Typography sx={{m : 0}}> 3 mins read </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={match ? 6 : 12}>
                            <Box className={classes.icons}>
                                { AssetIcon }
                            </Box>
                            <Box>
                                <Box sx={{fontWeight : 'bold'}}>
                                    Asset use guildelines
                                </Box>
                                <Box sx={{display : 'flex', alignItems : 'center'}}>
                                    <Box sx={{background : '#B5E4CA', borderRadius : '4px', padding : '4px', mr : 1}}>
                                        Popular
                                    </Box>
                                    <Box component={'img'} src={Gladyce_Image} />
                                    <Typography sx={{m : 0}}> Time </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={match ? 6 : 12}>
                            <Box className={classes.icons}>
                                { LifeIcon }
                            </Box>
                            <Box>
                                <Box sx={{fontWeight : 'bold'}}>
                                    Life & work updates
                                </Box>
                                <Box sx={{display : 'flex', alignItems : 'center'}}>
                                    <Box component={'img'} src={Joyce_Image} />
                                    <Typography sx={{m : 0}}> 3mins read </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}

export default ProTip;
