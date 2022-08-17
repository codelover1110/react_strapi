import React, { useState } from "react";

import Message1_Image from '../../../assets/Profile/message1.png';
import Message2_Image from '../../../assets/Profile/message2.png';
import Message3_Image from '../../../assets/Profile/message3.png';
import Message4_Image from '../../../assets/Profile/message4.png';
import Message5_Image from '../../../assets/Profile/message5.png';
import Avartar_Image from '../../../assets/Home/Avatar.png';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CloseIcon from '@mui/icons-material/Close';

import {
    Box,
    Button,
    Drawer,
    Grid,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    Paper,
    TextField,
    useMediaQuery,
    useTheme,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        background : theme.palette.primary.main,
        padding : '50px',

        "& .MuiPaper-root" : {
            height : '800px',

            "& .MuiSvgIcon-root" : {
                marginRight : '10px'
            },
        },
        ['@media (max-width:900px)'] : {
            padding : '20px'
        },
        "& .MuiButton-root" : {
            width : '300px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            border : '2px solid #272B30',
            borderRadius : '12px',
            padding : '10px',
        },
        "& .MuiListItem-root" : {
            padding : '20px 10px'
        },
        "& .MuiOutlinedInput-root" : {
            width : 'calc(100% - 32px)'
        }
    },
    dashboard : {
        fontSize : '40px',
        color : theme.palette.common.black,
        fontWeight : 'bold'
    },
    radio : {
        background : theme.palette.common.white,
        borderRadius : '30px',
        padding : '5px'
    },
    orval : {
        position : 'relative',
        border : '1px solid ' + theme.palette.grey.A200,
        borderRadius : '12px',
        padding : '16px',
    },
    topContent : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        fontSize : '20px',
        background : theme.palette.grey.A200,
        borderRadius : '12px 12px 0px 0px',
        padding : '30px',

        ['@media (max-width:900px)'] : {
            padding : '10px'
        }
    },
    moreIcon : {
        minWidth : '40px',
        minHeight : '40px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : theme.palette.background.bg,
        borderRadius : '50%',
        "& .MuiSvgIcon-root" : {
            marginRight : '0px !important',
        }
    },
    drawer: {
        width: '100%',
        zIndex: '1000000 !important',
        "& .MuiPaper-root": {
            width: '100%',
        },
        "& .MuiListItem-root" : {
            alignItems : 'center',
            padding : '20px',
            cursor : 'pointer',
        },
        "& .MuiAccordionSummary-root" : {
            padding : '20px',
        },

        "& svg" : {
            marginRight : '10px'
        },
        "& .MuiButton-root" : {
            width : '300px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            border : '2px solid #272B30',
            borderRadius : '12px',
            padding : '10px',
        },
    },
    menuBody: {
        zIndex : 1000000000
    },
    menuDiv: {
        "& a": {
            textDecoration: 'none ',
            color: 'white',
        },
    },
}))

const messageList = [
    {
        image : Message1_Image,
        name : 'Jarret Waelchi',
        time : '03:30PM',
    },
    {
        image : Message2_Image,
        name : 'Orval Casper',
        time : '11:59AM',
    },
    {
        image : Message3_Image,
        name : 'Michel Emard',
        time : '09:30AM',
    },
    {
        image : Message4_Image,
        name : 'Reuben Ward',
        time : '08:00AM',
    },
    {
        image : Message5_Image,
        name : 'Evalyn Jekins',
        time : '07:01AM',
    },
]

const Message = () => {
    const classes = useStyles() ;
    const theme = useTheme();
    const match900 = useMediaQuery('(min-width : 900px)');
    
    const [ selectedItem, setSelectedItem ] = useState('customers');
    const [ changeChat, setChangeChat ] = useState(false);

    const handleSelectedItem = (type) => {
        setSelectedItem(type);
    }

    const handleChangeChat = (type) => {
        setChangeChat(type);
    }

    const list = () => (

        <Box 
            sx={{width : 'auto'}}
            role="presentation"
            className={classes.menuBody}
        >
            
            <Box className={classes.orval}>
                <Box className={classes.topContent}>
                    <Box>
                        Orval Casper
                    </Box>
                    <Box sx={{display : 'flex'}}>
                        <Box className={classes.moreIcon}>
                            <MoreHorizRoundedIcon />
                        </Box>
                        <IconButton onClick={() => handleChangeChat(false)}>
                            <CloseIcon/>
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{display : 'flex', justifyContent : 'center', p : 3}}>
                    <Button variant="outlined">
                        Load conversation
                    </Button>
                </Box>

                <List>
                    {
                        messageList.map((element,index) => {
                            return(
                                index === 1 && <ListItem key={index}>
                                    <Box component={'img'} src={element.image} sx={{mr : 1}}/>
                                    <Box sx={{width : '100%'}}>
                                        <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                                            <Box>
                                                {element.name}
                                            </Box>
                                            <Box sx={{display : 'flex', alignItems : 'center'}}>
                                                {element.time}
                                                <Box sx={{width : '12px', height : '12px', background : '#2A85FF', borderRadius : '50%', ml : 1}} />
                                            </Box>
                                        </Box>
                                        <Box sx={{color : '#6F767E'}}>
                                            When do you release the coded for the Fleet - Travel kit?
                                        </Box>
                                        <Box>
                                            https://ui8.net/product-link
                                        </Box>
                                    </Box>
                                </ListItem>
                            )
                        })
                    }
                </List>

                <ListItem>
                    <Box component={'img'} src={Avartar_Image} sx={{width : '58px', height : '58px', mr : 2}}/>
                    <Box>
                        <Box>
                            Britney Beer
                            <Box component={'span'}> 11:59AM </Box>
                        </Box>
                        <Box>
                            Hi @orval, thanks for contacting.
                            Yes, I'm working on it. It would be released next 2 weeks. You could check the progress here: https://ui8.net/progress
                            <br/><br/>
                            Thanks for your patience and understanding. 🙌
                            Regards,
                            <br/><br/>
                            Br
                        </Box>
                    </Box>
                </ListItem>

                    <TextField 
                        InputProps={{
                            endAdornment: <InputAdornment position="end"> <SearchIcon style={{ fill: "#6F767E" }} /> </InputAdornment>
                        }}
                        variant="outlined"
                        placeholder="Search or type a command"
                        size="small"
                        sx={{"& .MuiOutlinedInput-notchedOutline" : {border : 'none'}, "&. Mui-focused" : {border : 'none'}}}
                    />
            </Box>
        </Box>
    )

    return (
        <Box className={classes.root}>
            <Box className={classes.dashboard}>
                Message center
            </Box>
            <Paper>
                <Grid container sx={{height : '100%',}}>
                    <Grid item xs={match900 ? 4 : 12} sx={{position : 'relative', p : 2}}>
                        <Grid container sx={{display : 'flex', background : theme.palette.primary.main, borderRadius : '30px', padding : '5px', marginBottom : '30px'}}>
                            <Grid item xs={6}
                                onClick={() => handleSelectedItem('customers')}
                                className={selectedItem === 'customers' ? classes.radio : ''}
                                sx={{ display : 'flex', justifyContent : 'center', alignItems : 'center', cursor : 'pointer'}}
                            >
                                <AccountCircleIcon />
                                Customers
                            </Grid>
                            <Grid item xs={6}
                                onClick={() => handleSelectedItem('everyone')}
                                className={selectedItem === 'everyone' ? classes.radio : ''}
                                sx={{ display : 'flex', justifyContent : 'center', alignItems : 'center', cursor : 'pointer'}}
                            >
                                <Box>
                                    <BoltIcon />
                                    Everyone
                                </Box>
                            </Grid>
                        </Grid>

                        <List>
                            {
                                messageList.map((element,index) => {
                                    return(
                                        <ListItem key={index} onClick={() => handleChangeChat(true)}>
                                            <Box component={'img'} src={element.image} sx={{mr : 1}}/>
                                            <Box sx={{width : '100%'}}>
                                                <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                                                    <Box>
                                                        {element.name}
                                                    </Box>
                                                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                                                        {element.time}
                                                        <Box sx={{width : '12px', height : '12px', background : '#2A85FF', borderRadius : '50%', ml : 1}} />
                                                    </Box>
                                                </Box>
                                                <Box sx={{color : '#6F767E'}}>
                                                    When do you release the coded...
                                                </Box>
                                            </Box>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>

                        <TextField
                            InputProps={{
                                startAdornment: <InputAdornment position="start"> <SearchIcon style={{ fill: "#6F767E" }} /> </InputAdornment>
                            }}
                            variant="outlined"
                            placeholder="Search or type a command"
                            size="small"
                            sx={{position : 'absolute', bottom : 0, "& .MuiOutlinedInput-notchedOutline" : {border : 'none'}, "&. Mui-focused" : {border : 'none'}}}
                        />
                    </Grid>
                    {
                        match900 &&
                        <Grid item xs={8} className={classes.orval}>
                            <Box className={classes.topContent}>
                                <Box>
                                    Orval Casper
                                    <Box sx={{fontSize : '14px'}}>
                                        Customer since: Sep 2021 | Purchased: 21 items | Lifetime: $1235.00
                                    </Box>
                                </Box>
                                <Box className={classes.moreIcon}>
                                    <MoreHorizRoundedIcon />
                                </Box>
                            </Box>
    
                            <Box sx={{display : 'flex', justifyContent : 'center', p : 3}}>
                                <Button variant="outlined">
                                    Load conversation
                                </Button>
                            </Box>
    
                            <List>
                                {
                                    messageList.map((element,index) => {
                                        return(
                                            index === 1 && <ListItem key={index}>
                                                <Box component={'img'} src={element.image} sx={{mr : 1}}/>
                                                <Box sx={{width : '100%'}}>
                                                    <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                                                        <Box>
                                                            {element.name}
                                                        </Box>
                                                        <Box sx={{display : 'flex', alignItems : 'center'}}>
                                                            {element.time}
                                                            <Box sx={{width : '12px', height : '12px', background : '#2A85FF', borderRadius : '50%', ml : 1}} />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{color : '#6F767E'}}>
                                                        When do you release the coded for the Fleet - Travel kit?
                                                    </Box>
                                                    <Box>
                                                        https://ui8.net/product-link
                                                    </Box>
                                                </Box>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
    
                            <ListItem>
                                <Box component={'img'} src={Avartar_Image} sx={{width : '58px', height : '58px', mr : 2}}/>
                                <Box>
                                    <Box>
                                        Britney Beer
                                        <Box component={'span'}> 11:59AM </Box>
                                    </Box>
                                    <Box>
                                        Hi @orval, thanks for contacting.
                                        Yes, I'm working on it. It would be released next 2 weeks. You could check the progress here: https://ui8.net/progress
                                        <br/><br/>
                                        Thanks for your patience and understanding. 🙌
                                        Regards,
                                        <br/><br/>
                                        Br
                                    </Box>
                                </Box>
                            </ListItem>
    
                                <TextField 
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"> <SearchIcon style={{ fill: "#6F767E" }} /> </InputAdornment>
                                    }}
                                    variant="outlined"
                                    placeholder="Search or type a command"
                                    size="small"
                                    sx={{position : 'absolute', bottom : 0, "& .MuiOutlinedInput-notchedOutline" : {border : 'none'}, "&. Mui-focused" : {border : 'none'}}}
                                />
                        </Grid>
                    }
                </Grid>
            </Paper>

            <Drawer
                anchor='left'
                open={changeChat}
                onClose={() => handleChangeChat(false)}
                className={classes.drawer}
            >
                {list()}
            </Drawer>
        </Box>
    );
}

export default Message;