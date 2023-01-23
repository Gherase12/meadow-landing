import React from 'react'
import Link  from 'next/link';

function DashboardBtn({setLoading}) {
  return (
    <Link href='https://app.meadowlaunch.com/' onClick={()=>setLoading(true)}>
          <button className='bg-white text-black w-[187px] h-[56px] rounded-full btn  '>
            App
          </button>
        </Link>
  )
}

export default DashboardBtn