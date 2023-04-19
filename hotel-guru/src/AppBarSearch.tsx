import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import SearchBar from '/Users/masonisblue/Hackreactor/rfp2302-mvp/hotel-guru/src/SearchBar.tsx';

export default function AppBarSearch() {
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