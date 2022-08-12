import React, { useState } from "react";

import Status from "../../../../components/Common/Status";
import SourceIcon from "../../../../components/Common/SourceIcon";

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import {
    Box,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useTheme,
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
        }
    },
    salesTip : {
        width : '16px',
        height : '32px',
        background : '#FFBC99',
        borderRadius : '4px',
    },
    top : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
        marginBottom : '20px',
        "& .MuiFormControl-root" : {
            margin : '0px',
        }
    },
}))

const mockHeader = ["SOURCE", "TOTAL", "TODAY", "STATUS", "PERCENT", "DYNAMICS"];

const mockBody = [
    {
        source : 'Subscriptions',
        total : '597989',
        today : '120430',
        status : 5,
        percent : '70%',
        dynamics : '90%',
        color : '#3CFF2B'
    },
    {
        source : 'Pay-Per-View',
        total : '467320',
        today : '3210',
        status : 1,
        percent : '7%',
        dynamics : '10%',
        color : '#FF2A2A'
    },
    {
        source : 'Tips',
        total : '543409',
        today : '120',
        status : 4,
        percent : '23%',
        dynamics : '13%',
        color : '#2A99FF'
    },
]

const Sources = () => {
    const classes = useStyles() ;
    const theme = useTheme();
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.salesTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Sources </Box>
                    </Box>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    mockHeader.map((element, index) => {
                                        return(
                                            <TableCell key={index} sx={{minWidth : '100px'}}> {element} </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                {
                                    mockBody.map((element, index) => {
                                        return(
                                            <TableRow key={index}>
                                                <TableCell sx={{minWidth : '100px'}}>
                                                    <Box sx={{ display : 'flex', alignItems : 'center'}}>
                                                    <SourceIcon color={element.color}/>
                                                    {element.source}
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{minWidth : '100px'}}> {element.total} </TableCell>
                                                <TableCell sx={{minWidth : '100px'}}> {element.today} </TableCell>
                                                <TableCell sx={{minWidth : '100px'}}>
                                                    <Status count={element.status} color={element.color}/>
                                                </TableCell>
                                                <TableCell sx={{minWidth : '100px'}}> {element.percent} </TableCell>
                                                <TableCell sx={{minWidth : '100px', color : '#5EFF5A'}}>
                                                    <ArrowDropUpIcon/>
                                                    {element.dynamics}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default Sources;
