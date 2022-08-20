
import * as React from 'react';
import { useState } from 'react';
import TabPanel from './TabPanel';
import Trending from './Trending';

//@mui material
import {
    Box,
    Paper,
    Button,
    FormControl,
    Select,
    MenuItem,
    useMediaQuery
} from '@mui/material';
//@mui icon

//customized style
import { useStyles } from './StyledDiv/index.styles';

const ExploreCreator = () => {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const [type, setType] = useState(1);
    const handleSelect = (e) => {
        setType(e.target.value);
    }

    const match768 = useMediaQuery('(min-width): 768px');
    return (
        <Box className={classes.root}>
            <Box className={classes.title}>Explore Creators</Box>
            <Box className={classes.content}>
                <Paper sx={{ padding: '20px' }}>
                    <Box className={classes.contentHeader}>
                        <Box className={classes.tabButton}>
                            <Button size="medium" variant="text" sx={{ marginRight: '10px' }} onClick={() => handleChange(0)}>Popular</Button>
                            <Button size="medium" variant="text" onClick={() => handleChange(1)}>Trending</Button>
                        </Box>
                        {
                            match768 &&
                            <Box className={classes.selectBox}>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demom-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        onChange={(e) => handleSelect(e)}
                                    >
                                        <MenuItem value={1}>BestSeller</MenuItem>
                                        <MenuItem value={2}>WorstSeller</MenuItem>
                                        <MenuItem value={3}>GoodSeller</MenuItem>
                                        <MenuItem value={4}>BadSeller</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        }
                    </Box>
                    <Box className={classes.contentBody}>
                        <TabPanel value={value} index={0} children={<Box>This is popular part</Box>} />
                        <TabPanel value={value} index={1} children={<Trending />} />
                    </Box>
                    <Box className={classes.contentMore}></Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default ExploreCreator;