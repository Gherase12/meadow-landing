import React from 'react'
import Image from "next/image";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import {  useState } from 'react'
import Link from "next/link";

function Nav() {
    const [open, setOpen] = useState(false);
  return (
    <nav className='flex w-full text-[18px] font-medium  justify-between lg:px-[41px] px-[20px]   '>
          <Image src='/meadow-sm.svg' width={40} height={40} className="  lg:hidden" />
          <Image src='/meadow-lg.svg' width={189} height={60} className=" hidden lg:flex" />
          <div className='lg:flex space-x-[36px] hidden'>
            <ul className='flex  text-white items-center space-x-[36px]'>
              <li>Home</li>
              <li>Project</li>
              <li>Team</li>
              <li>Docs</li>
            </ul>
            <Link href="https://meadow-delta.vercel.app/"> 
            <button className='bg-white text-black w-[187px] h-[56px] rounded-full '>
              Dashboard
            </button>
            </Link>
          </div>
          <GiHamburgerMenu onClick={()=>setOpen(true)} className="text-[40px] text-white lg:hidden" />

          <div
        className={`${
          !open
            ? "fixed right-[100%]"
            : " text-black fixed top-0 pb-[70px] left-0 h-screen w-[100%] px-[29px] items-center justify-center overflow-y-scroll  flex  flex-col    bg-white    duration-500 ease-in-out z-50 lg:hidden"
        }  `}
      >
        <RiCloseFill onClick={()=>setOpen(false)} className="absolute right-[20px] top-[20px] text-[40px] text-black " />

        <ul className='flex flex-col text-black  space-y-[36px]'>
              <li>Home</li>
              <li>Project</li>
              <li>Team</li>
              <li>Docs</li>
            </ul>
        </div>
        </nav>
  )
}

export default Nav