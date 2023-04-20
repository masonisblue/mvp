import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Paper, Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';

export default function GoogleMap() {

  const coordinates = { lat: 0, lng: 0 };

  return (
    <Box
      sx={{
        backgroundColor: "blue",
        width: "100%",
        height: "100%",
      }}
      >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD8gBnL_Zow0AaKOXIe_sWQ7Rb-CSruCaI" }}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      >

      </GoogleMapReact>
    </Box>
  )

}