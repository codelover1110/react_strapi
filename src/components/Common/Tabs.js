import * as React from 'react';

import { connect } from 'react-redux';
import { ShopComment } from '../../redux/actions/shop';

import ShopProduct from '../../pages/Landing/Shop/ShopProduct';
import Joyce_Image from '../../assets/Home/Joyce.png';
import Avatar1_Image from '../../assets/Home/Avatar.png';
import Message3_Image from '../../assets/Profile/message3.png';
import Message4_Image from '../../assets/Profile/message4.png';
import Message5_Image from '../../assets/Profile/message5.png';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { makeStyles } from "@mui/styles";
import { getItem, setItem } from '../../utils/helper';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import TextEditor from './TextEditor';

const useStyles = makeStyles((theme) => ({
    root : {
        "& .Mui-selected" : {
            color : theme.palette.primary.dark
        }
    },
    tabPanel : {
        display : 'flex',
        justifyContent : 'space-between',
        borderBottom: 1,
        borderColor: 'divider',

        "@media (max-width:700px)" : {
            display : 'grid',
            justifyContent : 'center'
        }
    },
    favorite : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        border : '1px solid lightgrey',
        borderRadius : '12px',
        padding : '15px 22px',
        marginRight : '10px',

        "& .MuiSvgIcon-root" : {
            color : '#FF6A55'
        },
        "@media (max-width:700px)" : {
            padding : '6px 12px',
        }
    },
    downloadDiv : {
        display : 'flex',
        color : 'white',
        fontWeight : 'bold',
        background : '#2A85FF',
        borderRadius : '12px'
    },
    price : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRight : '1px solid #186FE3',
        padding : '12px 20px',

        "@media (max-width:700px)" : {
            padding : '12px 12px',
        }
    },
    download : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        padding : '12px 20px',

        "@media (max-width:700px)" : {
            padding : '12px 12px',
        }
    },
    drawer : {

        "& .MuiDrawer-paper" : {
            background : theme.palette.background.bg
        },
        "& .MuiPaper-root": {
            width: '400px',
            padding : '24px',
            paddingLeft : '40px'
        },
        "& .MuiListItem-root" : {
            padding : '20px',
            paddingLeft : '0px',
            cursor : 'pointer',
        },
        "& .MuiButton-root" : {
            width : '150px',
            height : '48px',
            fontSize : '15px',
            fontWeight : 'bold',
            textTransform : 'unset',
            border : '2px solid #272B30',
            borderRadius : '12px',
            padding : '10px',
        },

        "& svg" : {
            marginRight : '10px'
        }
    },
    commentTip : {
        width : '40px',
        height : '40px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : '#CABDFF',
        color : 'black',
        fontSize : '20px',
        fontWeight : 'bold',
        borderRadius : '8px',
        marginRight : '12px'
    },
    listItem : {
        borderBottom : '1px solid ' + theme.palette.grey.A200,
        paddingBottom : '10px',
        marginTop : '20px',

        "& .MuiSvgIcon-root" : {
            color : '#6F767E'
        },
        "& img" : {
            marginRight : '10px'
        }
    },
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{
                    padding : '24px',
                    "@media (max-width:600px)" : {
                        padding : '0px'
                    } 
                }}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const BasicTabs = (props) => {

    const {
        ShopComment
    } = props;

    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === 1)
            setOpenDrawer(true);
        else
            setOpenDrawer(false);
    };

    const handleDrawerClose = (type) => {
        setOpenDrawer(type);
    }

    React.useEffect(() => {
        if(openDrawer === false)
            setValue(0);
    }, [openDrawer])
    
    const list = () => (
        <Box>
            <Box sx={{display : 'flex', justifyContent : 'space-between', mb : 2}}>
                <Box sx={{display : 'flex', alignItems : 'center'}}>
                    <Box className={classes.commentTip}>
                        4
                    </Box>
                    <Box> Comment </Box>
                </Box>
                <IconButton>
                    <CloseIcon onClick={() => handleDrawerClose(false)}/>
                </IconButton>
            </Box>
            <Box sx={{display : 'flex', alignItems : 'center', mb:2}}>
                <Box>
                    Review this product? <InfoIcon />
                </Box>
                <Box sx={{display : 'flex', border : '1px solid rgba(255, 255, 255, 0.12)', borderRadius : '4px', padding : 1}}>
                    You're product owner
                </Box>
            </Box>

            <TextEditor />

            <Box className={classes.listItem}>
                <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box component={'img'} src={Joyce_Image}/>
                        <Box>
                            Stephon Schumm
                            <Box>
                                @ivawelch
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        2h &nbsp;&nbsp;
                        5.0&nbsp;&nbsp;
                        <StarIcon sx={{color : '#FFC554'}}/>
                    </Box>
                </Box>

                <Box sx={{mt : 2, ml : 8}}>
                    Purchased the pack and loaded it in Adobe xd (installed fonts as well), some text and titles are off in some screens, is that a compatibility problem with the latest version of xd?
                </Box>

                <Box sx={{color : '#6F767E', mt : 2, ml : 8}}>
                    <FavoriteBorderIcon />Like &nbsp;&nbsp;&nbsp;&nbsp;
                    <RestartAltIcon />Reply
                </Box>
            </Box>

            <Box className={classes.listItem} sx={{pl : 8}}>
                <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box component={'img'} src={Avatar1_Image}/>
                        <Box>
                            Chelsie Haley
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        18h &nbsp;&nbsp;
                        4.0&nbsp;&nbsp;
                        <StarIcon sx={{color : '#FFC554'}}/>
                    </Box>
                </Box>

                <Box sx={{mt : 2, ml : 8}}>
                    Hi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, let me check then tell you soon.
                </Box>

                <Box sx={{color : '#6F767E', mt : 2, ml : 8}}>
                    <FavoriteBorderIcon />Like &nbsp;&nbsp;&nbsp;&nbsp;
                    <RestartAltIcon />Reply
                </Box>
            </Box>
            
            <Box className={classes.listItem}>
                <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box component={'img'} src={Message3_Image}/>
                        <Box>
                            Sabryna Mills
                            <Box>
                                @ivawelch
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        15h &nbsp;&nbsp;
                        5.0&nbsp;&nbsp;
                        <StarIcon sx={{color : '#FFC554'}}/>
                    </Box>
                </Box>

                <Box sx={{mt : 2, ml : 8}}>
                    Five stars. I love this product!
                </Box>

                <Box sx={{color : '#6F767E', mt : 2, ml : 8}}>
                    <FavoriteBorderIcon />Like &nbsp;&nbsp;&nbsp;&nbsp;
                    <RestartAltIcon />Reply
                </Box>
            </Box>
            
            <Box className={classes.listItem}>
                <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box component={'img'} src={Message4_Image}/>
                        <Box>
                            Micaela Mayer
                            <Box>
                                @ivawelch
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        1day agp &nbsp;&nbsp;
                        5.0&nbsp;&nbsp;
                        <StarIcon sx={{color : '#FFC554'}}/>
                    </Box>
                </Box>

                <Box sx={{mt : 2, ml : 8}}>
                    Purchased the pack and loaded it in Adobe xd (installed fonts as well), some text and titles are off in some screens, is that a compatibility problem with the latest version of xd?
                </Box>

                <Box sx={{color : '#6F767E', mt : 2, ml : 8}}>
                    <FavoriteBorderIcon />Like &nbsp;&nbsp;&nbsp;&nbsp;
                    <RestartAltIcon />Reply
                </Box>
            </Box>
            
            <Box className={classes.listItem}>
                <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Box component={'img'} src={Message5_Image}/>
                        <Box>
                            Daphne Goodwin
                            <Box>
                                @ivawelch
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        2day agp &nbsp;&nbsp;
                        5.0&nbsp;&nbsp;
                        <StarIcon sx={{color : '#FFC554'}}/>
                    </Box>
                </Box>

                <Box sx={{mt : 2, ml : 8}}>
                    Purchased the pack and loaded it in Adobe xd (installed fonts as well), some text and titles are off in some screens, is that a compatibility problem with the latest version of xd?
                </Box>

                <Box sx={{color : '#6F767E', mt : 2, ml : 8}}>
                    <FavoriteBorderIcon />Like &nbsp;&nbsp;&nbsp;&nbsp;
                    <RestartAltIcon />Reply
                </Box>
            </Box>
        </Box>
    )

    return (
        <Box className={classes.root}>
            <Box className={classes.tabPanel}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Product" {...a11yProps(0)} />
                    <Tab label="Comments" {...a11yProps(1)} />
                </Tabs>
                <Box sx={{display : 'flex', justifyContent : 'center', mt:2}}>
                    <Box className={classes.favorite}>
                        <FavoriteIcon />
                        32
                    </Box>
                    <Box className={classes.downloadDiv}>
                        <Box className={classes.price}>
                            $80
                        </Box>
                        <Box className={classes.download}>
                            Download now
                            <FileDownloadOutlinedIcon sx={{ml:1}}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                <ShopProduct />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ShopProduct />
            </TabPanel>

            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => handleDrawerClose(false)}
                className={classes.drawer}
            >
                {list()}
            </Drawer>
        </Box>
    );
}

const mapStateToProps = state => ({
    comment : state.shop.comment
}) ;
const mapDispatchToProps = {
    ShopComment
} ;
export default connect(mapStateToProps, mapDispatchToProps)(BasicTabs) ;