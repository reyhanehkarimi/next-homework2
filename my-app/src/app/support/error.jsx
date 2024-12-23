"use client"
import React from 'react'

export default function SupportErrorPage({ error, reset }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-red-100'>
        <h1 className='text-3xl font-bold text-red-500'>Something went wrong!</h1>
        <p className='mt-4 text-lg'>{error.message || "An unexpected error occurred"}</p>
        <button onClick={() => reset()} className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500'>Try Again</button>
    </div>
  )
}
