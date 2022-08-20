import React from 'react';

import { makeStyles } from '@mui/styles';

import {
  Box,
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon
} from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 16
  }
}));

const MorePopOver = (props) => {
  const {
    popOver,
    anchorEl,
    handleClosePopOver
  } = props;

  const classes = useStyles();

  return (
    <Popover
      open={popOver}
      anchorEl={anchorEl}
      onClose={handleClosePopOver}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      sx={{ "& .MuiPaper-root": {borderRadius: '16px'} }}
    >
      <Box className={classes.root}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <Box>
                Mark all as read
              </Box>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton >
              <ListItemIcon>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <Box>
                Go Setting
              </Box>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Popover>
  )
}

export default MorePopOver;