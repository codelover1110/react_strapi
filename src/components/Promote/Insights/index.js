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
    useTheme,
    useMediaQuery,
    Typography,
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
    const match3 = useMediaQuery('(min-width : 768px)')
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
                <Grid container spacing={3} className={classes.dashPanel}>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box sx={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#B5E4CA', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                            <AccountCircleOutlinedIcon sx={{ width: '20px', height: '20px', }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                            People reached
                            <Icon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                {TipIcon}
                            </Icon>
                        </Box>
                        <Box sx={{ marginBottom: '8px', fontSize: '48px', fontWeight: '600' }}>
                            256k
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box color="#83BF6E">
                                <ArrowUpwardOutlinedIcon color="#83BF6E" />
                                37.8%
                            </Box>
                            <Box sx={{ fontSize: '12px', fontWeight: '700', color: '#555', marginLeft: '5px' }}>this week</Box>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={match3? { borderLeft: '1px solid #EFEFEF', borderRadius:'1px'}: {}}>
                        <Box sx={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#CABDFF', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                            <SwapVertOutlinedIcon sx={{ width: '20px', height: '20px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                            Engagement
                            <Icon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                {TipIcon}
                            </Icon>
                        </Box>
                        <Box sx={{ marginBottom: '8px', fontSize: '48px', fontWeight: '600' }}>
                            1.2x
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box color="#83BF6E">
                                <ArrowUpwardOutlinedIcon color="#83BF6E" />
                                37.8%
                            </Box>
                            <Box sx={{ fontSize: '12px', fontWeight: '700', color: '#555', marginLeft: '5px' }}>this week</Box>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={match2?{ borderLeft: '1px solid #EFEFEF', borderRadius: '1px'}:{}}>
                        <Box sx={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFBC99', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                            <QuestionAnswerOutlinedIcon sx={{ width: '20px', height: '20px', }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                            Comments
                            <Icon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                {TipIcon}
                            </Icon>
                        </Box>
                        <Box sx={{ marginBottom: '8px', fontSize: '48px', fontWeight: '600' }}>
                            128
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box color="#83BF6E">
                                <ArrowUpwardOutlinedIcon color="#83BF6E" />
                                37.8%
                            </Box>
                            <Box sx={{ fontSize: '12px', fontWeight: '700', color: '#555', marginLeft: '5px' }}>this week</Box>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={3} xs={12} sx={match3?{ borderLeft: '1px solid #EFEFEF', borderRadius: '1px' }:{}}>
                        <Box sx={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#B1E5FC', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                            <MouseOutlinedIcon sx={{ width: '20px', height: '20px', }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                            Link
                            <Icon sx={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                                {TipIcon}
                            </Icon>
                        </Box>
                        <Box sx={{ marginBottom: '8px', fontSize: '48px', fontWeight: '600' }}>
                            80
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box color="#83BF6E">
                                <ArrowUpwardOutlinedIcon color="#83BF6E" />
                                37.8%
                            </Box>
                            <Box sx={{ fontSize: '12px', fontWeight: '700', color: '#555', marginLeft: '5px' }}>this week</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Insights;
