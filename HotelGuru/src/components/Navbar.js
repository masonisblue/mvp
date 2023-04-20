import * as React from 'react';
import { styled, alpha} from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import Link from '../Link';
import theme from '../theme';

export default function Navbar({ theme }) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "primary.contrastText"
            }}
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