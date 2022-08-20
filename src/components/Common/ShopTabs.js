import * as React from 'react';

import { connect } from 'react-redux';

import ShopMarket from '../../pages/Landing/Shop/ShopMarket';
import Followers from '../../pages/Landing/Shop/Followers';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { makeStyles } from "@mui/styles";
import { Button, Checkbox, InputAdornment, InputLabel, ListItem, MenuItem, OutlinedInput, Popover, Select, Slider, TextField, useMediaQuery, useTheme } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root : {
        padding : '50px',
        "& .Mui-selected" : {
            color : theme.palette.common.black,
            background : theme.palette.grey.A200,
            borderRadius : '8px',
            padding : '8px 16px'
        },
        "& .MuiSelect-select" : {
            padding : '9px 14px'
        },
        "& ul" : {
            padding : '10px !important'
        },
        "@media (max-width:900px)" : {
            padding : '20px',
        }
    },
    tabPanel : {
        display : 'flex',
        justifyContent : 'space-between',
        borderBottom: 1,
        borderColor: 'divider',

        "@media (max-width:900px)" : {
            display : 'grid',
            justifyContent : 'center',
        }
    },
    tip : {
        width : '16px',
        height : '32px',
        background : '#FFBC99',
        borderRadius : '4px',
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
                <Box sx={{ p: 3 }}>
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

const ShopTabs = (props) => {

    const {
        setOpen
    } = props;

    const classes = useStyles();
    const theme = useTheme();
    const filterRef = React.useRef();
    const match900 = useMediaQuery('(min-width : 900px)');

    const [value, setValue] = React.useState(0);
    const [openFilter, setOpenFilter] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenFilter = () => {
        setOpenFilter(false);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.tabPanel}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Products" {...a11yProps(0)} />
                    <Tab label="Followers" {...a11yProps(1)} />
                    <Tab label="Following" {...a11yProps(2)} />
                </Tabs>
                <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', mt : !match900 && 2}}>
                    <Select defaultValue={'most'} sx={{mr : 3}}>
                        <MenuItem value={'most'} sx={{paddingLeft : '10px !important'}}> Most recent </MenuItem>
                    </Select>
                    <FilterAltIcon
                        onClick={() => setOpenFilter(true)}
                        ref={filterRef}
                    />
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                <ShopMarket setOpen={setOpen}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Followers setOpen={setOpen}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Followers setOpen={setOpen}/>
            </TabPanel>
            
            <Popover
                open={openFilter}
                anchorEl={filterRef ? filterRef.current : null}
                onClose={handleOpenFilter}
                anchorOrigin={{
                    vertical : 'bottom',
                    horizontal : 'left'
                }}
                PaperProps={{
                    style : { width : '360px'}
                }}
            >
                <Box sx={{p : 3}}>
                    <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', borderBottom : '1px solid lightgrey', pb:2, mb:2}}>
                        <Box sx={{display : 'flex', alignItems : 'center'}}>
                            <Box className={classes.tip} />
                            <Box sx={{fontSize : '18px', ml : 2}}> Showing 9 of 32 products </Box>
                        </Box>
                        <Box>
                            <CloseIcon />
                        </Box>
                    </Box>
                    <Box sx={{borderBottom : '1px solid lightgrey', pb:2, mb:2}}>
                        <OutlinedInput
                            fullWidth
                            placeholder='Search for products'
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            sx={{height : '40px', borderRadius : '12px'}}
                        />
                    </Box>
                    <Box sx={{borderBottom : '1px solid lightgrey', pb:2, mb:2}}>
                        <InputLabel> Sort by </InputLabel>
                        <Select fullWidth defaultValue={'featured'} sx={{height : '40px', borderRadius : '12px'}}>
                            <MenuItem value={'featured'}> Featured </MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{borderBottom : '1px solid lightgrey', pb:2, mb:2}}>
                        Showing
                        <ListItem sx={{justifyContent : 'space-between'}}>
                            All products
                            <Checkbox sx={{"& svg" : { color : '#2A85FF'}}}/>
                        </ListItem>
                        <ListItem sx={{justifyContent : 'space-between'}}>
                            UI Kit
                            <Checkbox sx={{"& svg" : { color : '#2A85FF'}}}/>
                        </ListItem>
                        <ListItem sx={{justifyContent : 'space-between'}}>
                            Illustration
                            <Checkbox sx={{"& svg" : { color : '#2A85FF'}}}/>
                        </ListItem>
                        <ListItem sx={{justifyContent : 'space-between'}}>
                            Wireframe kit
                            <Checkbox sx={{"& svg" : { color : '#2A85FF'}}}/>
                        </ListItem>
                        <ListItem sx={{justifyContent : 'space-between'}}>
                            Icons
                            <Checkbox sx={{"& svg" : { color : '#2A85FF'}}}/>
                        </ListItem>
                    </Box>

                    <Box sx={{borderBottom : '1px solid lightgrey', pb:2, mb:2}}>
                        <Box sx={{mb : 2}}> price </Box>
                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            sx={{color : '#2A85FF'}}
                        />
                    </Box>

                    <Box sx={{mb:2}}>
                        <InputLabel> Sort by </InputLabel>
                        <Select fullWidth defaultValue={'featured'} sx={{height : '40px', borderRadius : '12px'}}>
                            <MenuItem value={'featured'}> <StarBorderIcon /> &nbsp;4.0 and up </MenuItem>
                        </Select>
                    </Box>
                    
                    <Box sx={{display : 'flex', justifyContent : 'flex-end',
                        "& .MuiButton-root" : {
                            height : '48px',
                            color : theme.palette.text.selected,
                            fontSize : '15px',
                            fontWeight : 'bold',
                            textTransform : 'unset',
                            border : '1px solid lightgrey',
                            borderRadius : '12px',
                            padding : '10px',
                        }
                    }}>
                        <Button>
                            Reset
                        </Button>
                        <Button variant='contained'>
                            Apply
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </Box>
    );
}

const mapStateToProps = state => ({
}) ;
const mapDispatchToProps = {
} ;
export default connect(mapStateToProps, mapDispatchToProps)(ShopTabs) ;