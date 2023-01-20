import React from 'react'
import Image  from 'next/image';
import { motion } from 'framer-motion';
import Link  from 'next/link';
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import DashboardBtn from './btn/DashboardBtn';
import {
    AiOutlineInstagram,
    
  } from "react-icons/ai";

function HeroSection({homeRef, orizontalVariants, setLoading}) {
  return (
    <div
    ref={homeRef}
    className='mb-[150px] lg:mb-[271px] lg:rounded-t-[40px] wwe lg:rounded-b-[70px]  relative background-gradient   w-full h-[600px] lg:h-[800px] lg:p-[40px] z-10 pt-[30px]  '
  >
    {/* images */}

    <div className='absolute w-[150px] h-[150px] bottom-[60px] right-0  lg:w-[822px] lg:h-[822px] lg:right-[280px] lg:top-[270px] lg:scale-[1.2] z-30 '>
      <Image src={"/object-1.webp"} fill alt='object-1' />
    </div>

    <div className='absolute lg:w-[261px] w-[100px] h-[100px]  top-0  right-[100px]  lg:scale-[1.6] lg:h-[261px] lg:right-[365px] lg:top-[101px]  z-30 '>
      <Image src={"/object-2.webp"} fill alt='object-2' />
    </div>
    <div className='absolute w-[120px] h-[120px] -right-[20px] top-[180px]   lg:w-[432px]  lg:h-[432px] lg:-right-[100px] lg:top-[142px]  z-30 '>
      <Image
        src={"/object-3.webp"}
        fill
        alt='object-3'
        className='object-contain'
      />
    </div>
    {/* nav */}

    {/* h1 */}
    <motion.h1
      initial='hidden'
      animate='visible'
      variants={orizontalVariants}
      className='absolute  z-40 text-white leading-[110%] top-[90px]  lg:top-[154px] left-[30px] lg:left-[152px] w-[80vw]  lg:w-[785px] lg:h-[243px] text-[30px] md:text-[50px] lg:text-[74px] font-bold '
    >
      The Next Generation Web 3.0 Multichain Launchpad
    </motion.h1>
    {/* h2 */}
    <motion.h2
      initial='hidden'
      animate='visible'
      variants={orizontalVariants}
      className='absolute text-white top-[275px]  h-[210px] text-ellipsis overflow-hidden lg:top-[432px] lg:left-[152px] text-[12px] lg:text-[16px] leading-[160%] w-[70vw]  lg:w-[702px] font-normal left-[30px] z-40'
    >
      Built for the next generation of users, Meadow will Incubate and
      launch the most anticipated projects on the Sui Network. Meadow&apos;s
      team consists of veterans and partners who bring years of qualified
      experience in the incubation space which puts us far ahead of our
      competition.
    </motion.h2>
    {/* buttons */}
    <div className='flex absolute bottom-[30px] scale-[0.6] lg:scale-[1]  lg:bottom-[100px] -left-[30px] lg:left-[152px] space-x-[20px] z-40'>
    <DashboardBtn setLoading={setLoading} />
      <div className='text-white text-[40px] space-x-[10px] flex items-center'>
        <Link href='https://twitter.com/meadowlaunch'>
          <BsTwitter />
        </Link>
        <Link href='https://t.co/FLNKZU3ujp'>
          <FaDiscord />
        </Link>
        <Link href='https://www.instagram.com/meadow_launch/?hl=ro'>
          <AiOutlineInstagram />
        </Link>
      </div>
    </div>
  </div>
  )
}

export default HeroSection