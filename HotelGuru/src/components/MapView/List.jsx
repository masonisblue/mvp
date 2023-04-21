import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';

import * as hotelsSearch from '/Users/masonisblue/Hackreactor/rfp2302-mvp/BookingAPI-data/V2/hotels-search';
// for searching for hotels, use Booking api, search locations first to get location id then use v2 hotel search

import HotelCard from './Hotel-Card.jsx';

export default function List() {

  // const hotelsResults = [
  //   { name: 'Hyatt hotel' },
  //   { name: 'Marriott hotel' },
  //   { name: 'Hilton hotel' },
  // ]

  const hotelsResults = hotelsSearch.results

  return (
    <Box
      sx={{
        backgroundColor: "pink",
        height: "100vh",
        overflow: "scroll"
      }}
      >
      <Typography
        variant="h4">
        Hotels
      </Typography>
      <Grid container spacing={3}>
        {hotelsResults.map(hotel => {
          return (
            <Grid item xs={12}>
              <HotelCard hotel={hotel}/>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )

}