import React, { useEffect , useRef, useState  } from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import Routing from './Routes';

import {
    Box, Grid, useMediaQuery
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import Header from './Layouts/Header';
import NavBar from './Layouts/NavBar';


const useStyles = makeStyles((theme) => ({
    root : {
        height: '100vh',
        overflowX: 'auto', 
        overflowY: 'scroll',
        color : theme.palette.text.disabled,
        // "& svg" : {

        //     "& path" : {
        //         fill : theme.palette.common.black
        //       }
        // }
    }
}))

const Main = (props) => {

    const classes = useStyles() ;
    const match1200  = useMediaQuery('(min-width : 1200px)');
    const match  = useMediaQuery('(min-width : 900px)');

    const scrollTop = useRef({                
        current : {
            innerText : "efefef"
        }
    }) ;

    return (
        <Box className={classes.root} ref={scrollTop}>
            <Grid container>
                <Grid item xs={match1200 ? 2.5 : match ? 1 : 0}>
                    {
                        match &&
                        <NavBar />
                    }
                </Grid>
                <Grid item xs={match1200 ? 9.5 : match ? 11 : 12}>
                    <Header />
                    <Routing />
                </Grid>
            </Grid>
        </Box>
    )
}

Main.propTypes = {
}
const mapStateToProps = state => ({
}) ;
const mapDispatchToProps = {
} ;
export default connect(mapStateToProps, mapDispatchToProps)(Main) ;