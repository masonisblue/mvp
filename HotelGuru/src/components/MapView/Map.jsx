import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Paper, Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';

export default function GoogleMap({ setCoordinates, setBounds, coordinates }) {

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
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={''}
      >

      </GoogleMapReact>
    </Box>
  )

}