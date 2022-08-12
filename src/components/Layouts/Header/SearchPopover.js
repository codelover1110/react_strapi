import React from "react";
import Popover_Image from '../../../assets/Home/Popover.png';

import FilterIcon from '@mui/icons-material/Filter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

import {
    Box, List, ListItem, Popover
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    popOver : {
        padding : '20px',
        fontSize : '16px',
        "& .MuiListItem-root" : {
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center',
            padding : '10px 0px',
        },
        "& .MuiSvgIcon-root" : {
            width : '25px',
            height : '25px'
        }
    },
    filterImg : {
        width : '50px',
        height : '50px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        border: '2px solid #CABDFF',
        borderRadius : '50%',
        marginRight : '10px',
    }
})) ;

const SearchPopover = (props) => {

    const {
        popOver,
        anchorRef,
        handleClosePopOver,
    } = props;

    const classes = useStyles();

    return(
        
        <Popover
            id="popover"
            open={popOver}
            anchorEl={anchorRef ? anchorRef.current : null}
            onClose={handleClosePopOver}
            anchorOrigin={{
                vertical : 'bottom',
                horizontal : 'left'
            }}
            PaperProps={{
                style : { width : '360px'}
            }}
        >
            <Box className={classes.popOver}>
                Recent search
                <List>
                    <ListItem>
                        <Box sx={{display : 'flex'}}>
                            <Box component={'img'} src={Popover_Image} sx={{borderRadius : '12px', mr : 1}}/>
                            <Box>
                                <Box>
                                    Small caption
                                </Box>
                                <Box sx={{fontSize : '18px', fontWeight : 'bold'}}>
                                    Put your title here
                                </Box>
                            </Box>
                        </Box>
                        <Box onClick={handleClosePopOver}>
                            <CloseIcon sx={{cursor : 'pointer'}}/>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{display : 'flex'}}>
                            <Box component={'img'} src={Popover_Image} sx={{borderRadius : '12px', mr : 1}}/>
                            <Box>
                                <Box>
                                    Small caption
                                </Box>
                                <Box sx={{fontSize : '18px', fontWeight : 'bold'}}>
                                    Put your title here
                                </Box>
                            </Box>
                        </Box>
                        <Box onClick={handleClosePopOver}>
                            <CloseIcon sx={{cursor : 'pointer'}}/>
                        </Box>
                    </ListItem>
                </List>
            </Box>
            
            <Box className={classes.popOver}>
                Suggestions
                <List>
                    <ListItem>
                        <Box sx={{display : 'flex'}}>
                            <Box className={classes.filterImg}>
                                <FilterIcon />
                            </Box>
                            <Box>
                                <Box>
                                    Put your title here
                                </Box>
                                <Box sx={{fontSize : '18px', fontWeight : 'bold'}}>
                                    Small caption
                                </Box>
                            </Box>
                        </Box>
                        <Box onClick={handleClosePopOver}>
                            <ArrowForwardIosIcon sx={{cursor : 'pointer'}}/>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{display : 'flex'}}>
                            <Box className={classes.filterImg}>
                                <FilterIcon />
                            </Box>
                            <Box>
                                <Box>
                                    Put your title here
                                </Box>
                                <Box sx={{fontSize : '18px', fontWeight : 'bold'}}>
                                    Small caption
                                </Box>
                            </Box>
                        </Box>
                        <Box onClick={handleClosePopOver}>
                            <ArrowForwardIosIcon sx={{cursor : 'pointer'}}/>
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </Popover>
    )
}

export default SearchPopover;