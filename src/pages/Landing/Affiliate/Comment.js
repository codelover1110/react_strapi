import React from "react";

import Gladyce_Image from '../../../assets/Home/Gladyce.png';
import Elbert_Image from '../../../assets/Home/Elbert.png';
import Joyce_Image from '../../../assets/Home/Joyce.png';

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';

import {
    Box,
    Paper,
    Button,
    Divider,
    List,
    ListItem,
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
            "@media (max-width:700px)" : {
                padding : '10px'
            }
        },
        "& .MuiButton-root" : {
            width : '50px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            borderRadius : '12px',
            padding : '10px',
        },
        "& .MuiListItem-root" : {
            padding : '20px 10px'
        }
    },
    top : {
        display : 'flex',
        justifyContent : 'space-between',
        width : '100%'
    },
    commentTip : {
        width : '16px',
        height : '32px',
        background : '#FFD88D',
        borderRadius : '4px',
    },
    allProduct : {
        minWidth : '100%', 
        height : '48px', 
        border : '2px solid #EFEFEF', 
    }
}))

const Comment = () => {
    const classes = useStyles() ;
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.top}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box className={classes.commentTip} />
                        <Box sx={{fontSize : '18px', ml : 2}}> Comments </Box>
                    </Box>
                </Box>
                
                <List>
                    <ListItem sx={{alignItems : 'flex-start'}}>
                        <Box component={'img'} src={Gladyce_Image} sx={{mr : 1}}/>
                        <Box sx={{width : '100%', height : '100%'}}>
                            <Box sx={{display : 'flex', justifyContent : 'space-between', mb : 2}}>
                                <Box sx={{fontWeight : 'bold', lineHeight : '25px'}}>
                                    Ethel <Box component={'span'}> @ethel </Box>
                                    <Box> On <Box component={'span'}> Smiles - 3D icons </Box> </Box>
                                    Great work 😊
                                </Box>
                                <Box> 1h </Box>
                            </Box>
                            <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                                <ChatOutlinedIcon />
                                <FavoriteBorderOutlinedIcon />
                                <InsertLinkOutlinedIcon />
                            </Box>
                        </Box>
                    </ListItem>

                    <Divider />
                    
                    <ListItem sx={{alignItems : 'flex-start'}}>
                        <Box component={'img'} src={Joyce_Image} sx={{mr : 1}}/>
                        <Box sx={{width : '100%', height : '100%'}}>
                            <Box sx={{display : 'flex', justifyContent : 'space-between', mb : 2}}>
                                <Box sx={{fontWeight : 'bold', lineHeight : '25px'}}>
                                    Jazmyn <Box component={'span'}> @jaz.designer </Box>
                                    <Box> On <Box component={'span'}> Fleet-Travel shopping </Box> </Box>
                                    I need react version asap!
                                </Box>
                                <Box> 8h </Box>
                            </Box>
                            <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                                <ChatOutlinedIcon />
                                <FavoriteBorderOutlinedIcon />
                                <InsertLinkOutlinedIcon />
                            </Box>
                        </Box>
                    </ListItem>
                    
                    <Divider />
                    
                    <ListItem sx={{alignItems : 'flex-start'}}>
                        <Box component={'img'} src={Elbert_Image} sx={{mr : 1}}/>
                        <Box sx={{width : '100%', height : '100%'}}>
                            <Box sx={{display : 'flex', justifyContent : 'space-between', mb : 2}}>
                                <Box sx={{fontWeight : 'bold', lineHeight : '25px'}}>
                                    Ethel <Box component={'span'}> @ethel </Box>
                                    <Box> On <Box component={'span'}> Smiles - 3D icons </Box> </Box>
                                    How can I buy only the design?
                                </Box>
                                <Box> 1h </Box>
                            </Box>
                            <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                                <ChatOutlinedIcon />
                                <FavoriteBorderOutlinedIcon />
                                <InsertLinkOutlinedIcon />
                            </Box>
                        </Box>
                    </ListItem>

                    <Divider />

                </List>
                 
                <Box sx={{width : '100%', mt : 2}}>
                    <Button variant="outlined" className={classes.allProduct}>
                        View all
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default Comment;
