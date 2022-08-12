import React from "react";


import { Box } from "@mui/material";

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
    },
    status : {
        width : '20px',
        height : '6px',
        background : props => {
            return props.colorType
        },
        borderRadius : '1px',
        marginRight : '5px'
    }
}))

const Status = (props) => {

    const {
        count,
        color,
    } = props;

    const classes = useStyles({colorType : color});

    const result = () => {
        let rows = [];
        for( let i = 0 ; i < count ; i++) {
            rows.push(
                <Box key={i} className={classes.status}/>
            )
        }
        return rows;
    }
    return(
        <Box sx={{display : 'flex', }}>
            { result() }
        </Box>
    )
}

export default Status;