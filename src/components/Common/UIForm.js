import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterIcon from '@mui/icons-material/Filter';
import CloseIcon from '@mui/icons-material/Close';

import { Button, Box, InputAdornment, TextField, useTheme, Popover } from "@mui/material";
import { SearchADRIcon } from './SvgStatic';

export const SearchBar = ({setSearchText, popOver, handleOpenPopOver, handleClosePopOver}) =>{
    
    const theme = useTheme();
    
    const anchorRef = React.useRef(null) ;

    return(
        <>
            <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                    setSearchText(e.target.value);
                }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"> <SearchIcon style={{ fill: "#6F767E" }} /> </InputAdornment>,
                  endAdornment: <InputAdornment position="end">
                        <Button variant='contained' sx={{background : theme.palette.main === 'dark' ? '#1A1D1F !important' : 'red !important'}}>
                            { SearchADRIcon }
                        </Button>
                    </InputAdornment>,
                }}
                variant="outlined"
                placeholder="Search or type a command"
                size="small"
                ref={anchorRef}
                onClick={handleOpenPopOver}
                sx={{marginBottom : '0px',"& .MuiOutlinedInput-notchedOutline" : {border : 'none'}, "&. Mui-focused" : {border : 'none'}}}
            />
            
            <Popover
                id="NewPopOver-popover"
                open={popOver}
                anchorEl={anchorRef ? anchorRef.current : null}
                onClose={handleClosePopOver}
                anchorOrigin={{
                    vertical : 'bottom',
                    horizontal : 'center'
                }}
            >
                Recent search
                <Box>
                    <FilterIcon />
                    <Box>
                        <Box>
                            Small caption
                        </Box>
                        <Box>
                            Put your title here
                        </Box>
                    </Box>
                    <CloseIcon />
                </Box>
            </Popover>
        </>
    )
}