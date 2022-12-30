import Head from "next/head";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import IdoCard from "../components/IdoCard";
import Info from "./../components/Info";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Nav from "../components/Nav";
import { motion } from "framer-motion"

import Link from "next/link";
import { useRef} from 'react'

export default function Home() {
  // imgs
  const imgs = ["/meadow-card.svg", "/project1.png", "/project2.png"];
  const actionCards = ["/action-card-1.png", "/action-card-2.png"];
  // refs
  const homeRef = useRef(null)
  const projectRef = useRef(null)
  const teamRef = useRef(null)
  // imfo
  const info = [
    {
      name: "3M tokens",
      details: "Initial circulating supply",
      img: "/object-4.svg",
    },
    {
      name: "$0,10",
      details: "Private Price",
      img: "/object-5.svg",
    },
    {
      name: "$600,000",
      details: "Initial Marketcap",
      img: "/object-6.svg",
    },
  ];
  // framer motion variants
  const orizontalVariants = {
    visible: { opacity: 1, x:0 },
    hidden: { opacity: 0 , x:100},
    transition:{duration:0.6}
  }
  const inViewVariants = {
    visible: { opacity: 1, y:0 },
    hidden: { opacity: 0 , y:200},
    transition:{delay: 4, duration:2}
  }

  return (
    <div className='lg:p-[20px] overflow-hidden relative'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Meadow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='meadow' href='/meadow-sm.svg' />
      </Head>
      <Nav homeRef={homeRef} projectRef={projectRef} teamRef={teamRef} />
      {/* header */}
      <div ref={homeRef}  className='mb-[150px] lg:rounded-t-[40px] lg:rounded-b-[70px]  relative background-gradient   w-full h-[600px] lg:h-[800px] lg:p-[40px] z-10 pt-[30px]  '>
        {/* images */}

        <div className='absolute hidden lg:flex w-[822px] h-[822px] right-[280px] top-[270px] scale-[1.4] z-30 '>
          <Image src={"/object-1.svg"} fill alt='object-1' />
        </div>

        <div className='absolute w-[261px] hidden lg:flex scale-[1.6] h-[261px] right-[365px] top-[101px]  z-30 '>
          <Image src={"/object-2.svg"} fill alt='object-2' />
        </div>
        <div className='absolute w-[432px] hidden lg:flex h-[432px] right-0 top-[142px]  z-30 '>
          <Image src={"/object-3.svg"} fill alt='object-3'  />
        </div>
        {/* nav */}

    

        {/* h1 */}
        <motion.h1 
        
        initial="hidden"
        animate="visible"
        variants={orizontalVariants}
        className='absolute  z-40 text-white leading-[110%] top-[90px]  lg:top-[154px] left-[30px] lg:left-[152px] w-[80vw]  lg:w-[785px] lg:h-[243px] text-[30px] md:text-[50px] lg:text-[74px] font-bold '>
          The Next Generation Web 3.0 Multichain Launchpad
        </motion.h1>
        {/* h2 */}
        <motion.h2 
        initial="hidden"
        animate="visible"
        variants={orizontalVariants}
        className='absolute text-white top-[275px]  h-[210px] text-ellipsis overflow-hidden lg:top-[432px] lg:left-[152px] text-[12px] lg:text-[16px] leading-[160%] w-[70vw]  lg:w-[702px] font-normal left-[30px] z-40'>
          Meadow is a decentralized launchpad that will launch projects on the
          Sui Network. The Sui Network will be one of the most unique Layer 1
          networks. Meadow has been in the works for a number of months, and it
          is at this point poised to cause a ruckus in the industry. The
          experience that the Meadow teams bring to the table includes working
          with various prominent incubators as well as top-tier businesses.
          Before launching, all projects on Meadow will go through a rigorous
          process of due diligence to ensure their legitimacy.
        </motion.h2>
        {/* buttons */}
        <div className='flex absolute bottom-[30px] scale-[0.6] lg:scale-[1]  lg:bottom-[100px] -left-[30px] lg:left-[152px] space-x-[20px] z-40'>
          <Link href="https://meadow-delta.vercel.app/"> 
          <button  className='bg-white text-[18px]  shadow-lg text-black w-[187px] h-[56px] rounded-full '>
            Dashboard{" "}
          </button>
          </Link>
          <div className='text-white text-[40px] space-x-[10px] flex items-center'>
            <Link href="https://twitter.com/meadowlaunch">
            <BsTwitter />
            </Link>
            <Link href="https://t.co/FLNKZU3ujp" >
            <FaDiscord />
            </Link>
            <Link href="https://www.instagram.com/meadow_launch/?hl=ro">            
            <AiOutlineInstagram />
            </Link>
            
          </div>
        </div>
      </div>
      {/* IDO's */}

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={inViewVariants}
      ref={projectRef} className=' mb-[50px] lg:mb-[198px] '>
        <h3 className='leading-[110%] lg:ml-0 text-[48px] text-black ml-[20px]  lg:pl-[180px] mb-0 lg:mb-[52px] '>
          Upcoming IDOs
        </h3>
        <div className='hidden  lg:flex h-[543px]   items-center justify-center space-x-[40px] '>
          {imgs.map((i) => (
            <IdoCard img={i} key={i} />
          ))}
        </div>
      </motion.div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='  lg:hidden  flex'
      >
        {imgs.map((i) => (
          <SwiperSlide key={i}>
            <IdoCard img={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Upcoming Game IDOs */}
      <motion.div 
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
       variants={inViewVariants}
      className='mb-[50px] lg:mb-[198px]'>
        <h3 className='leading-[110%] text-[48px] lg:ml-0 text-black lg:pl-[180px] mb-[52px] ml-[20px]'>
          Upcoming Game IDOs
        </h3>
        <div className=' flex flex-col lg:flex-row  justify-center lg:space-x-[60px]  '>
          {[1, 2].map((n, i) => (
            <div className='relative w-full h-[250px] lg:w-[650px] lg:h-[406px]   ' key={i} >
              <Image
                src={`/game-card-${i + 1}.svg`}
                fill
                calssName='object-cover'
                alt="game-card"
              />
            </div>
          ))}
        </div>
      </motion.div>
      {/* privete round */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={inViewVariants}
      className='flex   justify-center lg:space-x-[76px] mb-[50px] lg:mb-[152px] flex-col lg:flex-row space-y-[100px] lg:space-y-0'>
        <div className=''>
          <h3 className='leading-[110%] lg:text-[48px] text-black mb-[30px]  text-[30px] lg:ml-0 ml-[20px] w-[300px] lg:w-[426px] h-[106px]'>
            Private Round & Token Information
          </h3>
          <p className='lg:w-[426px] h-[130px] leading-[160%] text-[16px] lg:ml-0 ml-[20px]   font-normal'>
            The Private Round will be priced at $0.10 and the Public Round will
            be priced at $0.20. The private round will be open for participants
            but there will be a set of requirements that must be completed in
            order to get whitelisted for it, check out the docs for more
            information.
          </p>
        </div>
        
        
        <div className='  flex flex-col space-y-[60px] '>
          {info.map(({ name, details, img }, i) => (
            <Info name={name} details={details} img={img} key={i} />
          ))}
        </div>
      </motion.div>


      {/* action cards */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={inViewVariants}
      className='flex    lg:justify-center lg:overflow-hidden flex-row space-x-[10px] lg:space-x-[10px] pl-[20px]  z-10 mb-[60px] lg:mb-[152px] overflow-x-scroll '>

        {actionCards.map((c,i) => (
          <div className=' relative flex-shrink-0  w-[300px] h-[200px] lg:w-[650px] lg:h-[463px]  ' key={i}>
            <Image src={c} fill className='object-cover rounded-[20px]  lg:rounded-[55px] ' alt="action-card" />
          </div>
        ))}

      </motion.div>
      


      {/* team */}

      <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={orizontalVariants}
      ref={teamRef} className='leading-[110%] lg:ml-0 mx-auto text-[48px] text-black  lg:text-[60px] mb-[52px] w-full lg:w-auto  text-center '>
        Our Team
      </motion.h3>
      {/* slider */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={inViewVariants}
      className=' max-w-[1500px] mx-auto mb-[100px] '>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='   flex   space-x-[15px] w-full  '
        >
          {[...Array(8)].map((m, i) => (
            <SwiperSlide key={i}>
              <div className=' w-[338px]  h-[351px] relative  lg:w-[538px] lg:h-[351px]'>
                <Image
                  src={`/team/member-${i + 1}.svg`}
                  fill
                  className='object-contain shadow-lg rounded-[30px]'
                  alt="team member"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* join section */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={inViewVariants}
      className='h-[440px]  max-w-[1500px] mx-auto relative flex justify-center items-center  flex-col space-y-[30px]'>
        <Image
          src='/join-background.svg'
          className='object-cover lg:rounded-t-[40px] z-10 '
          fill
          alt="join-card"
        />
        <h2 className='text-white lg:text-[60px] text-[40px] z-40 '>Join right now</h2>
        <p className='px-[10px] text-[16px] leading-[160%] text-white z-40 lg:w-[462px] lg:h-[78px] text-center  '>
          Meadow is ready to launch the most fascinating tier 1 projects on the
          most scalable, safest Layer 1blockchain, with a team of highly
          qualified experts who have trackrecord of success.
        </p>
        <div className='flex z-40 space-x-[20px] scale-[0.7] '>
        <Link href="https://meadow-delta.vercel.app/"> 
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
          <Link href="https://twitter.com/meadowlaunch">
            <BsTwitter />
            </Link>
            <Link href="https://t.co/FLNKZU3ujp" >
            <FaDiscord />
            </Link>
            <Link href="https://www.instagram.com/meadow_launch/?hl=ro">            
            <AiOutlineInstagram />
            </Link>
        </div>
        <Link href="/">
        
        <Image
          src='/meadow-logo-black.svg'
          className='ml-[50px] hidden xl:flex'
          width={186}
          height={58}
          alt="meadow-logo"
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
