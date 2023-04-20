import * as React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import Link from '../src/Link';
import Navbar from '../src/components/Navbar';
import List from '../src/components/MapView/List.jsx';
import GoogleMap from '../src/components/MapView/Map.jsx';

export default function Index() {
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{
        height: "100vh",
        marginTop: "0",
        backgroundColor: "#ADD8E6",
        // automatic padding here might be an issue
        // '& .MuiContainer-root': {
        //   maxWidth: false,
        //   padding: 0,
        }}>
        <Grid item xs={4}>
          <List />
        </Grid>
        <Grid item xs={8}>
          <GoogleMap />
        </Grid>
      </Grid>
    </>
  );
}
