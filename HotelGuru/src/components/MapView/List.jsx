import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

// import * as hotelsSearch from '/Users/masonisblue/Hackreactor/rfp2302-mvp/BookingAPI-data/V2/hotels-search';
// for searching for hotels, use Booking api, search locations first to get location id then use v2 hotel search

import HotelCard from './Hotel-Card.jsx';

export default function List() {

  const hotelsResults = [
    { name: 'Hyatt hotel' },
    { name: 'Marriott hotel' },
    { name: 'Hilton hotel' },
  ]

  return (
    <Box
      sx={{
        backgroundColor: "pink",
        height: "100%",
      }}
      >
      {hotelsResults.map(hotel => {
        <HotelCard hotel={hotel}/>
      })}
    </Box>
  )

}