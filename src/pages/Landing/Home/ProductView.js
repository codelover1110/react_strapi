import React, { useState } from "react";

import EarningGraph from '../../../components/Common/Chart/EarningGraph'

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
    productTip : {
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

const ProductView = () => {
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
                        <Box className={classes.productTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Product views </Box>
                    </Box>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={(e) => handleChange(e)}
                        >
                            <MenuItem value={1}> All time </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <EarningGraph />
                </Box>
            </Paper>
        </Box>
    );
}

export default ProductView;
