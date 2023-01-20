import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function BuildToProtectSection({ inViewVariants }) {
  return (
    <div className='max-w-[1300px] mx-auto mb-[100px] lg:mb-[195px] '>
      <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={inViewVariants}
      className='bg-gray-100 xl:h-[355px] border-2 border-white items-center p-[10px] pt-[50px]  rounded-[30px] xl:pl-[112px] xl:pt-[76px] flex flex-col xl:flex-row relative'>
        <div className=''>
          <h2 className='font-bold text-[40px] text-center xl:text-start  xl:text-[80px] leading-[110%] mb-[19px]'>
            Built to protect
          </h2>
          <p className=' text-[15px] px-[20px] xl:px-0  xl:text-[20px] max-w-[620px]  leading-[160%] text-center '>
            Investors come first, see how you can benefit from our insurance
            pool, uniquely designed to drive the price of our token up and most
            importantly protect our users.
          </p>
        </div>

        <Image
          src={"/ETH-Coin.webp"}
          width={500}
          height={540}
          className=' hidden xl:flex absolute right-0 -bottom-[80px]'
        />
        <Image
          src={"/ETH-Coin.webp"}
          width={200}
          height={240}
          className='mt-[50px] xl:hidden '
        />
      </motion.div>
      <div className='pt-[72px] flex flex-col lg:flex-row xl:justify-between px-[20px]  lg:px-[112px]'>
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{ once: true }}
         variants={inViewVariants}
        className='flex  flex-col items-center xl:items-start mb-[100px] xl:mb-0'>
          <div className='relative w-[150px]  h-[189px]   '>
            <Image src='/coin-1.png' fill className='object-cover' />
          </div>
          <h3 className='text-[48px] font-bold leading-[110%] mb-[15px] '>
            Stake
          </h3>
          <p className='text-[20px] leading-[160%] max-w-[455px] text-center xl:text-start '>
            To foster transparency in the meadow ecosystem, take a look at how
            Meadow plans on keeping its ecosystem’s economics functional and
            beneficial for both the host and builders
          </p>
        </motion.div>

        <motion.div 
         initial='hidden'
         whileInView='visible'
         viewport={{ once: true }}
         variants={inViewVariants}
        className='flex  flex-col items-center xl:items-start'>
          <div className='relative w-[150px]  h-[189px]   '>
            <Image src='/coin-2.png' fill className='object-cover' />
          </div>
          <h3 className='text-[48px] font-bold leading-[110%] mb-[15px] '>
          Sustainability 
          </h3>
          <p className='text-[20px] leading-[160%] max-w-[455px] text-center xl:text-start '>
          To foster transparency in the meadow ecosystem, take a look at how Meadow plans on keeping its ecosystem’s economics functional and beneficial for both the host and builders
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default BuildToProtectSection;
