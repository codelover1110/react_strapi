import React from "react";
import { useState } from "react";

import {
    Box, List, ListItem, Paper, IconButton, Grid, FormControl, Select, MenuItem, Checkbox, ListItemAvatar, ListItemText, ListItemButton, Avatar, Button, Radio, FormControlLabel, FormLabel, RadioGroup
} from '@mui/material';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { useStyles } from './StyledDiv/index.styles';

//images
import manAvatar1 from '../../assets/Notification/manAvatar1.png';
import manAvatar2 from '../../assets/Notification/manAvatar2.png';
import manAvatar3 from '../../assets/Notification/manAvatar3.png';
import manAvatar4 from '../../assets/Notification/manAvatar4.png';
import manAvatar5 from '../../assets/Notification/manAvatar5.png';

//icon
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';

const Notification = () => {
    const classes = useStyles();
    const [type, setType] = useState(1);
    const [checked, setChecked] = React.useState([1]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }

    const NotificationList = [
        {
            image_url: manAvatar1,
            symbol: 'comment', // comment, likes, purchased, rate,  
            sender_name: 'Domenica',
            region_name: '@domenica',
            title: 'Comment on Smiles -3D icons',
            description: 'Great work, I just purchased this product',
            hour: '1h',
            state: true,
        },
        {
            image_url: manAvatar2,
            symbol: 'likes  ', // comment, likes, purchased, rate,  
            sender_name: 'Janice',
            region_name: '@ethel',
            title: 'Comment on Smiles -3D icons',
            description: 'Great work, I just purchased this product',
            hour: '2h',
            state: true,
            response: [
                {}
            ]
        },
        {
            image_url: manAvatar3,
            symbol: 'purchased', // comment, likes, purchased, rate,  
            sender_name: 'Janiya',
            region_name: '@ethel',
            title: 'Comment on Smiles -3D icons',
            description: 'Great work, I just purchased this product',
            hour: '4h',
            state: false,
        },
        {
            image_url: manAvatar4,
            symbol: 'rate', // comment, likes, purchased, rate,  
            sender_name: 'Daniel',
            region_name: '@ethel',
            title: 'Comment on Smiles -3D icons',
            description: 'Great work, I just purchased this product',
            hour: '6h',
            state: true,
        },
        {
            image_url: manAvatar5,
            symbol: 'comment', // comment, likes, purchased, rate,  
            sender_name: 'Esmeralda',
            region_name: '@ethel',
            title: 'Comment on Smiles -3D icons',
            description: 'Great work, I just purchased this product',
            hour: '8h',
            state: true,
        },
    ];

    const handleChange = (e) => {
        console.log(e.target.value);
        setType(e.target.value);
    };

    return (
        <Box className={classes.root} >
            <Box className={classes.dashboard}>
                Notification
            </Box>
            <Grid container spacing={1}>
                <Grid item sm={8} xs={12} className={classes.NotificationList}>
                    <Paper>
                        <Box className={classes.Notification}>
                            <Box className={classes.head}>
                                <Box sx={{ display: 'flex', fontSize: '20px', fontWeight: '600', lineHeight: '32px' }}>
                                    <Box sx={{ width: '16px', height: '32px', backgroundColor: '#FFBC99', marginRight: '16px', borderRadius: '4px' }}></Box>
                                    New
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FormControl fullWidth sx={{ minWidth: '100px', marginRight: '10px' }}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={type}
                                            onChange={(e) => handleChange(e)}
                                            sx={{ height: '40px' }}
                                        >
                                            <MenuItem value={1}> Recent </MenuItem>
                                            <MenuItem value={10}> 1h</MenuItem>
                                            <MenuItem value={20}> 2h</MenuItem>
                                            <MenuItem value={30}> 3h</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <IconButton>
                                        <MoreHorizOutlinedIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <List>
                                {
                                    NotificationList.map((Notification, index) => {
                                        let iconcolor;
                                        switch (Notification.symbol) {
                                            case 'comment':
                                                iconcolor = '#2A85FF';
                                                break;
                                            case 'likes':
                                                iconcolor = '#FF6A55';
                                                break;
                                            case 'purchased':
                                                iconcolor = '#83BF6E';
                                                break;
                                            case 'rate':
                                                iconcolor = '#8E59FF';
                                                break;
                                            default:
                                                iconcolor = '#2A85FF';
                                                break;
                                        }
                                        let subIcon;
                                        switch (Notification.symbol) {
                                            case 'comment':
                                                subIcon = <MessageIcon />;
                                                break;
                                            case 'likes':
                                                subIcon = <FavoriteIcon />;
                                                break;
                                            case 'purchased':
                                                subIcon = <ShoppingCartIcon />;
                                                break;
                                            case 'rate':
                                                subIcon = <StarIcon />;
                                                break;
                                            default:
                                                subIcon = <MessageIcon />;
                                                break;
                                        }
                                        return (
                                            <ListItem key={index} sx={{borderBottom: '1px solid #EFEFEF'}}>
                                                <Box sx={{ display: 'flex' }}>
                                                    <Box position="relative" sx={{ marginRight: '20px', minWidth: '48px', height: '48px' }}>
                                                        <img src={Notification.image_url} alt="" style={{ width: '48px', borderRadius: '50%' }} />
                                                        <Box sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            position: 'absolute',
                                                            right: '0px', bottom: '0px', borderRadius: '50%',
                                                            backgroundColor: iconcolor,
                                                            width: '16px',
                                                            height: '16px',
                                                            border: '2px solid white',
                                                            "& .MuiSvgIcon-root": {
                                                                color: 'white',
                                                                width: '10px',
                                                                height: '10px'
                                                            }
                                                        }}>
                                                            {subIcon}
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', }}>
                                                        <Box>
                                                            <Box sx={{ display: 'flex', }}>
                                                                <Box sx={{ fontSize: '15px', fontWeight: '700' }}>{Notification.sender_name}</Box>
                                                                <Box sx={{ fontWeight: '500', paddingLeft: '5px', color: '#9A9FA5' }}>{Notification.region_name}</Box>
                                                            </Box>
                                                            <Box sx={{ overflow: 'hidden' }}>{Notification.title}</Box>
                                                            <Box sx={{ overflow: 'hidden' }}>"{Notification.description}"</Box>
                                                            <Box sx={{display:'flex'}}>
                                                                <Box sx={{ fontSize: '15px', lineHeight: '24px', fontWeight: '700', marginRight: '24px', cursor: 'pointer' }}>Like</Box>
                                                                <Box sx={{ fontSize: '15px', lineHeight: '24px', fontWeight: '700', cursor: 'pointer' }}>Reply</Box>
                                                            </Box>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                                <Box sx={{display:'flex', alignSelf: 'flex-start'}}>
                                                    <Box sx={{marginRight: '10px'}}>{Notification.hour}</Box>
                                                    <Box width="12px" height="12px" sx={{ borderRadius: '50%', marginTop: '5px', alignSelf: 'start' }} backgroundColor={Notification.state ? '#2A85FF' : '#EFEFEF'}></Box>
                                                </Box>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Box>

                    </Paper>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.NotificationFilter}>
                    <Paper>
                        <Box className={classes.Filter}>
                            <Box className={classes.header}>
                                <Box sx={{ width: '16px', height: '32px', backgroundColor: '#CABDFF', borderRadius: '4px' }}></Box>
                                <Box sx={{ paddingLeft: '16px' }}>Filter</Box>
                            </Box>
                            <List className={classes.ListItems} dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem
                                    key={1}
                                    onClick={handleToggle(1)}
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            onChange={handleToggle(1)}
                                            checked={checked.indexOf(1) !== -1}
                                            sx={{
                                                color: 'rgba(111, 118, 126, 0.4)',
                                                '&.Mui-checked': {
                                                    color: '#2A85FF',
                                                },
                                            }}
                                            inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-1` }}
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText id={`checkbox-list-secondary-label-1`} primary={`Comment`} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    key={2}
                                    onClick={handleToggle(2)}
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            sx={{
                                                color: 'rgba(111, 118, 126, 0.4)',
                                                '&.Mui-checked': {
                                                    color: '#2A85FF',
                                                },
                                            }}
                                            onChange={handleToggle(2)}
                                            checked={checked.indexOf(2) !== -1}
                                            inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-2` }}
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText id={`checkbox-list-secondary-label-2`} primary={`Likes`} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    key={3}
                                    onClick={handleToggle(3)}
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            sx={{
                                                color: 'rgba(111, 118, 126, 0.4)',
                                                '&.Mui-checked': {
                                                    color: '#2A85FF',
                                                },
                                            }}
                                            onChange={handleToggle(3)}
                                            checked={checked.indexOf(3) !== -1}
                                            inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-3` }}
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText id={`checkbox-list-secondary-label-3`} primary={`Review`} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    key={4}
                                    onClick={handleToggle(4)}
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            sx={{
                                                color: 'rgba(111, 118, 126, 0.4)',
                                                '&.Mui-checked': {
                                                    color: '#2A85FF',
                                                },
                                            }}
                                            onChange={handleToggle(4)}
                                            checked={checked.indexOf(4) !== -1}
                                            inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-4` }}
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText id={`checkbox-list-secondary-label-4`} primary={`Mentions`} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    key={5}
                                    onClick={handleToggle(5)}
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            sx={{
                                                color: 'rgba(111, 118, 126, 0.4)',
                                                '&.Mui-checked': {
                                                    color: '#2A85FF',
                                                },
                                            }}
                                            onChange={handleToggle(5)}
                                            checked={checked.indexOf(5) !== -1}
                                            inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-5` }}
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText id={`checkbox-list-secondary-label-5`} primary={`Purchases`} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    key={6}
                                    onClick={handleToggle(6)}
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            sx={{
                                                color: 'rgba(111, 118, 126, 0.4)',
                                                '&.Mui-checked': {
                                                    color: '#2A85FF',
                                                },
                                            }}
                                            onChange={handleToggle(6)}
                                            checked={checked.indexOf(6) !== -1}
                                            inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-6` }}
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText id={`checkbox-list-secondary-label-6`} primary={`Message`} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            <Box className={classes.selectBox}>
                                <Button variant="outlined">Select All</Button>
                                <Button variant="outlined">UnSelect All</Button>
                            </Box>
                            <Box classeName={classes.someOne}>
                                <FormControl fullWidth>
                                    <RadioGroup
                                        aria-labelledby="demo-form-control-label-placement"
                                        name="position"
                                        defaultValue="top"
                                    >
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600' }}>
                                                Everyone
                                            </Box>
                                            <FormControlLabel
                                                value="Everyone"
                                                control={
                                                    <Radio sx={{
                                                        color: 'rgba(111, 118, 126, 0.4)',
                                                        '&.Mui-checked': {
                                                            color: '#2A85FF',
                                                        },
                                                    }} />
                                                }
                                                label=""
                                                labelPlacement="start"
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ fontSize: '15px', lineHeight: '24px', fontWeight: '600' }}>
                                                Customers
                                            </Box>
                                            <FormControlLabel
                                                value="Customers"
                                                control={
                                                    <Radio sx={{
                                                        color: 'rgba(111, 118, 126, 0.4)',
                                                        '&.Mui-checked': {
                                                            color: '#2A85FF',
                                                        },
                                                    }} />
                                                }
                                                label=""
                                                labelPlacement="start"
                                            />
                                        </Box>
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    )
};

export default Notification;