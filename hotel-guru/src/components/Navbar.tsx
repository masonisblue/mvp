import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1}}
            >
            HotelGuru
          </Typography>
          <SearchBar searchBy={"hotel"}/>
          <SearchBar searchBy={"location"}/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}