"use client";
import React from 'react'
import { trpc } from '../_trpc/trpc';
import { json } from 'stream/consumers';

  function  page() {

    const hello = trpc.hello.useQuery();
    console.log(hello.data)

  return (
    <div>

        {JSON.stringify(hello.data)}

    </div>
  )
}

export default page