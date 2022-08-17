import React, { useState } from "react";

import {
    Icon,
    Box,
    Grid,
    Paper,
    MenuItem,
    FormControl,
    Select,
    Button,
    useMediaQuery,
} from '@mui/material';

import { IncomeIcon } from "../../../components/Common/SvgStatic";
import Gladyce_Image from '../../../assets/Home/Gladyce.png';
import Elbert_Image from '../../../assets/Home/Elbert.png';
import Joyce_Image from '../../../assets/Home/Joyce.png';
import StatisticsGraph from "../../../components/Common/Chart/StatisticsGraph";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EastIcon from '@mui/icons-material/East';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

//SVG ICON
import { TipIcon } from '../../../components/Common/SvgStatic';
//external style
import { useStyles } from './StyledDiv/index.styles';
//Graph
import CustomersGraph from "../../../components/Common/Chart/CustomersGraph";

const Insights = () => {
    const classes = useStyles();
    const match1 = useMediaQuery('(min-width : 1200px)')
    const match2 = useMediaQuery('(min-width : 900px)')
    const match3 = useMediaQuery('(min-width : 767px)')

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
                        <Box sx={{ fontSize: '18px', ml: 2 }}> Insights </Box>
                    </Box>
                    <FormControl fullWidth
                        sx={{
                            width: '100px',
                            height: '40px',
                            "& .MuiSelect-select": {
                                padding: '10px'
                            }
                        }} >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={(e) => handleChange(e)}
                        >
                            <MenuItem value={1}>All time</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Grid container spacing={3} className={classes.customerList}>
                    <Grid item md={3} sm={6} xs={12} className={classes.customerItem} sx={!match3 ? { display: 'flex', justifyContent: 'space-between' } : {}}>
                        {
                            match3 &&
                            <Box className={classes.InsightIcon} sx={{ backgroundColor: '#B5E4CA' }}>
                                <AccountCircleOutlinedIcon sx={{ width: '20px', height: '20px', }} />
                            </Box>
                        }
                        <Box>
                            <Box className={classes.InsightTitle}>
                                People reached
                                <Icon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    {TipIcon}
                                </Icon>
                            </Box>
                            <Box className={classes.InsigtValue}>
                                256k
                            </Box>
                            <Box className={classes.IncDecState}>
                                <Box color="#83BF6E">
                                    <ArrowUpwardOutlinedIcon color="#83BF6E" />
                                    37.8%
                                </Box>
                                <Box sx={{ fontSize: '12px', fontWeight: '700', color: '#555', marginLeft: '5px' }}>this week</Box>
                            </Box>
                        </Box>
                        {
                            !match3 &&
                            <Box className={classes.InsightIcon} sx={{ backgroundColor: '#B5E4CA', position: 'relative', }}>
                                <AccountCircleOutlinedIcon sx={{ width: '20px', height: '20px', }} />
                            </Box>
                        }
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className={classes.customerItem} sx={!match3 ? { display: 'flex', justifyContent: 'space-between' } : {}}>
                        {
                            match3 &&
                            <Box className={classes.InsightIcon} sx={{ backgroundColor: '#CABDFF' }}>
                                <SwapVertOutlinedIcon sx={{ width: '20px', height: '20px' }} />
                            </Box>
                        }
                        <Box>
                            <Box className={classes.InsightTitle}>
                                Engagement
                                <Icon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    {TipIcon}
                                </Icon>
                            </Box>
                            <Box className={classes.InsigtValue}>
                                1.2x
                            </Box>
                            <Box className={classes.IncDecState}>
                                <Box color="#83BF6E">
                                    <ArrowUpwardOutlinedIcon color="#83BF6E" />
                                    37.8%
                                </Box>
                                <Box sx={{ fontSize: '12px', fontWeight: '700', color: '#555', marginLeft: '5px' }}>this week</Box>
                            </Box>
                        </Box>
                        {
                            !match3 &&
                            <Box className={classes.InsightIcon} sx={{ backgroundColor: '#CABDFF', position: 'relative' }}>
                                <SwapVertOutlinedIcon sx={{ width: '20px', height: '20px' }} />
                            </Box>
                        }
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className={classes.customerItem} sx={!match3 ? { display: 'flex', justifyContent: 'space-between' } : {}}>
                        {
                            match3 && <Box className={classes.InsightIcon} sx={{ backgroundColor: '#FFBC99' }}>
                                <QuestionAnswerOutlinedIcon sx={{ width: '20px', height: '20px', }} />
                            </Box>
                        }
                        <Box>
                            <Box className={classes.InsightTitle}>
                                Comments
                                <Icon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    {TipIcon}
                                </Icon>
                            </Box>
                            <Box className={classes.InsigtValue}>
                                128
                            </Box>
                            <Box className={classes.IncDecState}>
                                <Box color="#83BF6E">
                                    <ArrowUpwardOutlinedIcon color="#83BF6E" />
                                    37.8%
                                </Box>
                                <Box sx={{ fontSize: '12px', fontWeight: '700', color: '#555', marginLeft: '5px' }}>this week</Box>
                            </Box>
                        </Box>
                        {
                            !match3 && <Box className={classes.InsightIcon} sx={{ backgroundColor: '#FFBC99' }}>
                                <QuestionAnswerOutlinedIcon sx={{ width: '20px', height: '20px', }} />
                            </Box>
                        }
                    </Grid>
                    <Grid item md={3} sm={3} xs={12} className={classes.customerItem} sx={!match3 ? { display: 'flex', justifyContent: 'space-between' } : {}}>
                        {
                            match3 &&
                            <Box className={classes.InsightIcon} sx={{ backgroundColor: '#B5E4CA' }}>
                                <MouseOutlinedIcon />
                            </Box>
                        }
                        <Box>
                            <Box className={classes.InsightTitle}>
                                Link
                                <Icon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                    {TipIcon}
                                </Icon>
                            </Box>
                            <Box className={classes.InsigtValue}>
                                80
                            </Box>
                            <Box className={classes.IncDecState}>
                                <Box sx={{
                                        "& .MuiSvgIcon-root": {
                                            color: '#83BF6E',
                                        }
                                    }}>
                                    <ArrowUpwardOutlinedIcon  />
                                    37.8%
                                </Box>
                                <Box sx={{ fontSize: '12px', fontWeight: '700', color: '#555', marginLeft: '5px' }}>this week</Box>
                            </Box>
                        </Box>
                        {
                            !match3 &&
                            <Box className={classes.InsightIcon} sx={{ backgroundColor: '#B5E4CA' }}>
                                <MouseOutlinedIcon />
                            </Box>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Insights;
