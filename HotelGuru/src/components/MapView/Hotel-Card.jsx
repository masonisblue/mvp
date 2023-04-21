import * as React from 'react';
import Image from 'next/image';
import { styled, alpha } from '@mui/material/styles';
import { Box, Card, CardActionArea, CardMedia, CardContent, Grid, Rating, Toolbar, Typography } from '@mui/material';
import { AspectRatio } from '@mui/joy';
import Link from '../../Link';

//each hotel has id, name, photoMainURL, location, price, propertyclass

export default function HotelCard({ hotel }) {

  const id = hotel.id;
  const hotelLink = `/hotel/${id}`

  return (
    <>
      <Card variant="outlined" orientation="horizontal" elevation={6}>
        {/* <CardMedia
          component="img"
          height="350"
          image={hotel.photoMainUrl}
          alt={hotel.name}>
        </CardMedia>
        need to work on resizing hotel images, can use aspectratio from joy but need to set up integration*/}
          <CardContent
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            {/* <AspectRatio variant="outlined" ratio="1" sx={{ width: 200 }}> */}
            <Image
              src={hotel.photoMainUrl}
              width={200}
              height={200}
              alt={hotel.name}
              // style={{
              //   objectFit: "cover"
              // }}
              />
            {/* </AspectRatio> */}
            <Box>
              <Typography
                variant="h6"
                component={Link}
                href={hotelLink}
                sx={{
                  textDecoration: "none",
                  color: "common.black"
                }}
                >
                  <div>{hotel.name}</div>
              </Typography>
              <Rating
                  value={hotel.accuratePropertyClass}
                  readOnly
                  max={hotel.accuratePropertyClass}
                  // sx={{
                  //   '& .MuiRating-iconFilled': {
                  //   color: '#FFD700',
                  // }}}
              />
            </Box>
          </CardContent>
      </Card>
    </>
  )

}