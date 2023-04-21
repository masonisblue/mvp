import * as React from 'react';
import { useRouter } from 'next/router';

export default function Hotel() {

  const router = useRouter();
  const { id } = router.query;


  return  <div>Hotel {id} Page</div>
}