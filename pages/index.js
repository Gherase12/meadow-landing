import Head from "next/head";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import {
  AiOutlineInstagram,

} from "react-icons/ai";


import Nav from "../components/Nav";
import { motion } from "framer-motion";

import Link from "next/link";
import { useRef, useState } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import ActionCards from "./../components/ActionCards";

import TeamSection from "../components/TeamSection";
import FaqSection from './../components/FaqSection';
import HeroSection from './../components/HeroSection';
import PrivateRoundSection from "../components/PrivateRoundSection";
import BuildToProtectSection from "../components/BuildToProtectSection";

export default function Home() {
  const [loading, setLoading] = useState(false);
  
  // imgs
  const imgs = ["/meadow-card.svg", "/project1.png", "/project2.png"];
  
  // refs
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const teamRef = useRef(null);
  //team info
  
  

  

  // framer motion variants
  const orizontalVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
    transition: { duration: 0.6 },
  };
  const inViewVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 200 },
    transition: { delay: 4, duration: 2 },
  };


  return (
    <div className='lg:p-[20px] overflow-hidden relative'>
      {loading && <LoadingOverlay />}
      <Head>
        <title>Meadow home</title>
        <meta name='description' content='Meadow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='meadow' href='/meadow-sm.svg' />
      </Head>
      <Nav
        homeRef={homeRef}
        projectRef={projectRef}
        teamRef={teamRef}
        setLoading={setLoading}
      />
      {/* header */}
      <HeroSection homeRef={homeRef} orizontalVariants={orizontalVariants} />
     
      
      {/* privete round */}
      <PrivateRoundSection />

      <BuildToProtectSection inViewVariants={inViewVariants} />

      {/* action cards */}
      <ActionCards inViewVariants={inViewVariants} />

      {/* team */}

   <TeamSection teamRef={teamRef} orizontalVariants={orizontalVariants} inViewVariants={inViewVariants}/>
   <FaqSection inViewVariants={inViewVariants} />

      
      {/* join section */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={inViewVariants}
        className='h-[440px]  max-w-[1500px] mx-auto relative flex justify-center items-center  flex-col space-y-[30px]'
      >
        <Image
          src='/join-background.webp'
          className='object-cover lg:rounded-t-[40px] z-10 '
          fill
          alt='join-card'
        />
        <h2 className='text-white lg:text-[60px] text-[40px] z-40 '>
          Join right now
        </h2>
        <p className='px-[10px] text-[16px] leading-[160%] text-white z-40 lg:w-[462px] lg:h-[78px] text-center  '>
          Meadow is ready to launch the most fascinating tier 1 projects on the
          most scalable, safest Layer 1blockchain, with a team of highly
          qualified experts who have trackrecord of success.
        </p>
        <div className='flex z-40 space-x-[20px] scale-[0.7] '>
          <Link
            href='https://app.meadowlaunch.com/'
            onClick={() => setLoading(true)}
          >
            <button className='bg-white text-black w-[187px] h-[56px] rounded-full z-40 '>
              Dashboard
            </button>
          </Link>
          <button className=' border-white   text-white w-[187px] h-[56px] rounded-full z-40 '>
            Apply now
          </button>
        </div>
      </motion.div>
      {/* footer */}
      <div className='max-w-[1500px] mx-auto flex justify-between items-center mt-[30px] '>
        <div className='text-black  space-x-[20px] text-[20px] hidden lg:flex'>
          <p className='text-[14px]   '>Follow us on</p>
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
        <Link href='/'>
          <Image
            src='/meadow-logo-black.svg'
            className='ml-[50px] hidden xl:flex'
            width={186}
            height={58}
            alt='meadow-logo'
          />
        </Link>
        <li className='text-[10px] px-[10px] mb-[10px] lg:mb-0 flex justify-between space-x-[10px] lg:text-[14px] cursor-pointe  w-full xl:w-auto '>
          <ul>Privacy Policy</ul>
          <ul>Teams of use</ul>
          <ul>Disclaimer</ul>
          <ul>Cookie Policy</ul>
        </li>
      </div>
    </div>
  );
}
