import React, { useState } from "react";

import CustomersGraph from "../../../../components/Common/Chart/CustomersGraph";
import Gladyce_Image from '../../../../assets/Home/Gladyce.png';
import Elbert_Image from '../../../../assets/Home/Elbert.png';
import Joyce_Image from '../../../../assets/Home/Joyce.png';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EastIcon from '@mui/icons-material/East';

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
        "& .MuiButton-root" : {
            width : '150px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            borderRadius : '12px',
            padding : '10px',
        },
    },
    top : {
        width : '100%',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginBottom : '20px',
        "& .MuiFormControl-root" : {
            margin : '0px',
        }
    },
    customerTip : {
        width : '16px',
        height : '32px',
        background : '#C70100',
        borderRadius : '4px',
    },
    tab : {
        width : '100%',
        background : theme.palette.primary.main,
        borderRadius: '20px',
        padding : '15px',
    },
    tabToggle : {
        height : '100%',
        borderRadius : '12px',
        cursor : 'pointer',
        padding : '20px'
    },
    visitor : {
        fontSize : '48px',
        fontWeight : 'bold',
        ['@media (max-width:1200px)'] : {
            fontSize : '40px'
        },
        ['@media (max-width:1200px)'] : {
            fontSize : '40px'
        }
    },
    tip : {
        width : '63px',
        height : '24px',
        background : '#FFE7E4',
        fontWeight : 'bold',
        borderRadius: '8px',
    },
    messageText : {
        display : 'flex',
        justifyContent : 'space-between',
        fontSize : '18px'
    },
    messageContent : {
        display : 'flex',
        justifyContent : 'space-around',
        marginTop : '20px'
    },
    more : {
        width : '70px',
        height : '70px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : '#EFEFEF',
        borderRadius : '50%',
    }
}))

const TotalCustomers = () => {
    const classes = useStyles() ;
    const match1 = useMediaQuery('(min-width : 1200px)')
    const match2 = useMediaQuery('(min-width : 900px)')
    const theme = useTheme();

    const [ type, setType ] = useState(1);
    const [ overViewType, setOverViewType ] = useState('customer');

    const handleChange = (e) => {
        setType(e.target.value)
    }
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.customerTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Total customers </Box>
                    </Box>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={(e) => handleChange(e)}
                        >
                            <MenuItem value={1}> Last 28 days </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{fontSize : '32px', fontWeight  :'bold'}}>
                    1,509 customers
                </Box>
                <Box sx={{display : 'flex', alignItems : 'center'}}>
                    <Box sx={{width : '100px', background : 'rgba(234, 250, 229, 0.25)', color : '#83BF6E', fontWeight : 'bold', borderRadius : '4px', p:1,mr:2}}>
                        <ArrowUpwardIcon /> &nbsp;&nbsp;
                        37.8%
                    </Box>
                    <Box>
                        vs.Sep 8, 2021
                    </Box>
                </Box>

                <CustomersGraph />

                <Box sx={{ mt : 3 }}>
                    <Box className={classes.messageText}>
                        <Box sx={{width : '300px'}}>
                            Welcome <Box component={'span'}> 857 customers </Box> with a personal message 😎
                        </Box>
                        <Button variant='outlined'>
                            Send message
                        </Button>
                    </Box>
                    <Box className={classes.messageContent}>
                        <Box component={'img'} src={Gladyce_Image} />
                        <Box component={'img'} src={Elbert_Image} />
                        <Box component={'img'} src={Joyce_Image} />
                        <Box className={classes.more}>
                            <EastIcon sx={{color : '#6F767E'}}/>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default TotalCustomers;
