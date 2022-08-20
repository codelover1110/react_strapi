import React, { useState } from "react";

import ProductView from './ProductView';
import { IncomeIcon } from "../../../components/Common/SvgStatic";
import Gladyce_Image from '../../../assets/Home/Gladyce.png';
import Elbert_Image from '../../../assets/Home/Elbert.png';
import Joyce_Image from '../../../assets/Home/Joyce.png';
// import StatisticsGraph from "../../../components/Common/Chart/StatisticsGraph";

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
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
    InputLabel
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import CustomersGraph from "../../../components/Common/Chart/CustomersGraph";
import PerformanceGraph from "../../../components/Common/Chart/PerformanceGraph";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            padding: '30px',
            marginBottom: '20px',

            "& .MuiFormControl-root": {
                width: '100px'
            },
            "@media (max-width:700px)": {
                padding: '10px'
            }
        },
        "& .MuiButton-root": {
            width: '150px',
            height: '48px',
            fontSize: '15px',
            fontWeight: 'bold',
            textTransform: 'unset',
            borderRadius: '12px',
            padding: '10px',
        },
    },
    top: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        "& .MuiFormControl-root": {
            margin: '0px',
            "& .MuiOutlinedInput-root": {
            }
        }
    },
    overViewTip: {
        width: '16px',
        height: '32px',
        background: '#FFBC99',
        borderRadius: '4px',
    },
    tab: {
        width: '100%',
        background: theme.palette.primary.main,
        borderRadius: '20px',
        padding: '15px',
    },
    tabToggle: {
        height: '100%',
        borderRadius: '12px',
        cursor: 'pointer',
        padding: '20px'
    },
    visitor: {
        fontSize: '48px',
        fontWeight: 'bold',
        "@media (max-width:1200px)": {
            fontSize: '40px'
        },
    },
    tip: {
        width: '63px',
        height: '24px',
        background: '#FFE7E4',
        fontWeight: 'bold',
        borderRadius: '8px',
    },
    messageText: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '18px'
    },
    messageContent: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px'
    },
    more: {
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#EFEFEF',
        borderRadius: '50%',
    }
}))

const OverView = () => {
    const classes = useStyles();
    const match1 = useMediaQuery('(min-width : 1200px)')
    const match2 = useMediaQuery('(min-width : 900px)')
    const theme = useTheme();

    const [type, setType] = useState(1);
    const [overViewType, setOverViewType] = useState('customer');

    const handleChange = (e) => {
        setType(e.target.value)
    }

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box className={classes.overViewTip} />
                        <Box sx={{ fontSize: '18px', ml: 2 }}> Snapshot </Box>
                    </Box>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Product list"
                            onChange={(e) => handleChange(e)}
                        >
                            <MenuItem value={1}> All time </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.tab}>
                    <Grid container>
                        <Grid item xs={6} className={classes.tabToggle} sx={{ boxShadow: (overViewType === 'customer') ? '0px 4px 8px -2px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)' : 'none', background: overViewType === 'customer' ? theme.palette.common.white : '' }} onClick={() => { setOverViewType('customer') }}>
                            <Grid container>
                                <Grid item xs={match1 ? 9 : 12} sx={{ display: 'flex' }}>
                                    {
                                        match2 &&
                                        <Box sx={{ width: '30px', height: '30px', borderRadius: '50px', background: '#B1E5FC', display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1 }}>
                                            <WorkOutlineIcon sx={{ color: 'black' }} />
                                        </Box>
                                    }
                                    <Box>
                                        Customers
                                        {
                                            match2 && <ErrorIcon sx={{ ml: 1 }} />
                                        }
                                        <Box className={classes.visitor}>
                                            411
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={match1 ? 3 : 12}>
                                    <Box className={classes.tip} sx={{ color: '#FF6A55', }}>
                                        <ArrowDownwardIcon />
                                        37.8%
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} className={classes.tabToggle} sx={{ boxShadow: (overViewType === 'income') ? '8px 8px 8px -2px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)' : 'none', background: overViewType === 'income' ? theme.palette.common.white : '' }} onClick={() => { setOverViewType('income') }}>
                            <Grid container>
                                <Grid item xs={match1 ? 9 : 12} sx={{ display: 'flex' }}>
                                    {
                                        match2 &&
                                        <Box sx={{ width: '30px', height: '30px', borderRadius: '50px', background: '#CABDFF', display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1 }}>
                                            {IncomeIcon}
                                        </Box>
                                    }
                                    <Box>
                                        Income
                                        {
                                            match2 && <ErrorIcon sx={{ ml: 1 }} />
                                        }
                                        <Box className={classes.visitor}>
                                            $89
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={match1 ? 3 : 12}>
                                    <Box className={classes.tip} sx={{ color: '#83BF6E' }}>
                                        <ArrowDownwardIcon />
                                        37.8%
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {
                    overViewType === 'customer' ?
                        <PerformanceGraph />
                        :
                        <CustomersGraph />
                }
            </Paper>
        </Box>
    );
}

export default OverView;
