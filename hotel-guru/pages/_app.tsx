import * as React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>HotelGuru</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <CssBaseline />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
