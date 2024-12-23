'use client'
import React from 'react'
import { notFound } from 'next/navigation';

export default function ProductDetails({ params }) {
  const { productId } = params;
  const products = ["1","2","3"]
  if (!products.includes(productId)) {
    notFound()
  }
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold'>Product Details</h1>
      <p className='mt-4 text-lg'>Product ID: {productId}</p>
    </div>
  )
}

















































