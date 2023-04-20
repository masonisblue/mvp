import React from 'react';
import Navbar from './Navbar';


export default function Layout({ children }) {

  console.log('layout function called');

  return (
    <>
    <Navbar />
    <main>{children}</main>
    </>
  )

};