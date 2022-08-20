import React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
    Table,
    TableBody,
    TableCell, tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    useMediaQuery
} from '@mui/material';

//icon
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
        fontWeight: 600,
        "&>.MuiBox-root": {
            display: 'flex',
            alignItems: 'center'
        },
        "&>.MuiBox-root:first-child": {
            justifyContent: 'start',
            alignItems: 'center',
            "& .MuiBox-root:first-child": {
                marginRight: '5px'
            }
        }
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    //hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    },
    '& td:first-child': {
        color: theme.palette.grey[700]
    },
}));

const useStyles = makeStyles((theme) => ({
    percentage: {
        fontSize: 12,
        color: '#83BF6E'
    }
}));
const TableData = [
    {
        Date: 'Oct 19, 2021',
        Impression: {
            value: 263,
            color: '#2A85FF',
            percentage: 37.8
        },
        Clicks: {
            value: 72,
            color: '#8E59FF',
            percentage: 37.8
        },
        Total_Earnings: 0.00,
        EPC: 0.00
    },
    {
        Date: 'Oct 19, 2021',
        Impression: {
            value: 263,
            color: '#2A85FF',
            percentage: 37.8
        },
        Clicks: {
            value: 72,
            color: '#8E59FF',
            percentage: 37.8
        },
        Total_Earnings: 0.00,
        EPC: 0.00
    },
    {
        Date: 'Oct 19, 2021',
        Impression: {
            value: 263,
            color: '#2A85FF',
            percentage: 37.8
        },
        Clicks: {
            value: 72,
            color: '#8E59FF',
            percentage: 37.8
        },
        Total_Earnings: 0.00,
        EPC: 0.00
    },
    {
        Date: 'Oct 19, 2021',
        Impression: {
            value: 263,
            color: '#2A85FF',
            percentage: 37.8
        },
        Clicks: {
            value: 72,
            color: '#8E59FF',
            percentage: 37.8
        },
        Total_Earnings: 0.00,
        EPC: 0.00
    },
    {
        Date: 'Oct 19, 2021',
        Impression: {
            value: 263,
            color: '#2A85FF',
            percentage: 37.8
        },
        Clicks: {
            value: 72,
            color: '#8E59FF',
            percentage: 37.8
        },
        Total_Earnings: 0.00,
        EPC: 0.00
    },
    {
        Date: 'Oct 19, 2021',
        Impression: {
            value: 263,
            color: '#2A85FF',
            percentage: 37.8
        },
        Clicks: {
            value: 72,
            color: '#8E59FF',
            percentage: 37.8
        },
        Total_Earnings: 0.00,
        EPC: 0.00
    }
];

export const AffliateTable = () => {
    const classes = useStyles();
    const match768 = useMediaQuery('(min-width: 768px)');

    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Impressions</StyledTableCell>
                        <StyledTableCell>Clicks</StyledTableCell>
                        {
                            match768 &&
                            <>
                                <StyledTableCell>Total earnings</StyledTableCell>
                                <StyledTableCell>EPC</StyledTableCell>
                            </>
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        TableData.map((row) => {
                            return (
                                <StyledTableRow>
                                    <StyledTableCell>
                                        {row.Date}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Box sx={{ display: 'flex' }}>
                                            <Box>{row.Impression.value}</Box>
                                            <Box sx={{
                                                backgroundColor: `${row.Clicks.color}`,
                                                width: '24px', 'height': '12px'
                                            }}></Box>
                                        </Box>
                                        <Box className={classes.percentage}>{row.Impression.percentage > 0 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}{row.Impression.percentage}</Box>

                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Box sx={{ display: 'flex' }}>
                                            <Box>{row.Clicks.value}</Box>
                                            <Box sx={{
                                                backgroundColor: `${row.Clicks.color}`,
                                                width: '24px', 'height': '12px'
                                            }}></Box>
                                        </Box>
                                        <Box className={classes.percentage}>{row.Clicks.percentage > 0 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}{row.Clicks.percentage}</Box>
                                    </StyledTableCell>
                                    {
                                        match768&&
                                        <>
                                            <StyledTableCell>
                                                $ {row.Total_Earnings}
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                $ {row.EPC}
                                            </StyledTableCell>
                                        </>
                                    }
                                </StyledTableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}