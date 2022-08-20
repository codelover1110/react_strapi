import * as React from 'react';
import PropTypes from 'prop-types';

//@mui material
import {
    Box,
} from '@mui/material';

const TabPanel = (Props) => {
    const { children, value, index, ...other } = Props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </Box>
    )
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}

export default TabPanel;