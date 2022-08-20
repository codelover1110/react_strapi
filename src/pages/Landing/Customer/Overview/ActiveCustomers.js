import React, { useState } from "react";

import ActiveCustomerGraph from "../../../../components/Common/Chart/ActiveCustomerGraph";

import {
    Box,
    Paper,
    MenuItem,
    FormControl,
    Select,
    useTheme,
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
        }
    },
    trafficTip : {
        width : '16px',
        height : '32px',
        background : '#CABDFF',
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

const ActiveCustomers = () => {
    const classes = useStyles() ;
    const theme = useTheme();

    const [ type, setType ] = useState(1);

    const handleChange = (e) => {
        setType(e.target.value)
    }
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.trafficTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Active customers </Box>
                    </Box>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={(e) => handleChange(e)}
                        >
                            <MenuItem value={1}> Last 30 days </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <ActiveCustomerGraph />
                </Box>
            </Paper>
        </Box>
    );
}

export default ActiveCustomers;
