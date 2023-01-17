import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlinePlusCircle,
  AiOutlineArrowRight,
  AiOutlineMinusCircle,
} from "react-icons/ai";

function ActionCards({ inViewVariants }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={inViewVariants}
    >
      {/* mobile design */}
      <div className='w-full relative lg:hidden bg-action-card-1 mb-[50px] p-[30px]  '>
      <Image
            src={"/action/object-1.webp"}
            className='absolute  bottom-0 right-0'
            alt='action-card'
            width={200}
            height={200}
          />
          <Image
            src={"/action/object-3.webp"}
            className='absolute right-0 top-[250px] '
            alt='action-card'
            width={107}
            height={108}
          />
          <Image
            src={"/action/object-2.webp"}
            className='absolute -right-[20px] top-0'
            alt='action-card'
            width={150}
            height={150}
          />

        <div  >

        <h2 className='text-[30px] font-bold text-[#03326B] mb-[41px]'>
          Apply for IDO
        </h2>
        <p className='  text-[12px] text-[#3E81A2] font-bold mb-[30px]  max-w-[400px]'>
          Meadow is always looking for the most creative game changing projects,
          feel free to apply for an IDO on Meadow. Your project will be
          critically vetted by our team of experts and if you are succesful we
          will work with you to take your project to another level.
        </p>
        
        <button className='animate-pulse py-[5px]  bg-white text-black rounded-full font-bold px-[10px]   flex items-center justify-center text-[15px] border-white  mb-[30px] '>
          Apply
        </button>
        

        <h2 className='text-[30px] font-bold text-[#03326B] mb-[41px]'>
          Apply for KOL
        </h2>
        <p className=' text-[12px] text-[#3E81A2] font-bold mb-[30px]  max-w-[400px]'>
          We create a Meadow marketing army. You can be part of our marketing if
          you’re willing to put your social accounts to work. If you feel you
          want to be part of the team and add value, we’d for sure love to
          welcome you to the Meadow.
        </p>
        <button className='animate-pulse py-[5px] bg-white text-black rounded-full font-bold px-[10px]   flex items-center justify-center text-[15px] border-white  mb-[30px] '>
          Apply
        </button>
        
        </div>
      </div>

      {/* desktop design */}
      <div className=' hidden lg:flex  flex-col   lg:justify-center overflow-hidden  lg:flex-row  lg:space-x-[10px] pl-[20px]  z-10 mb-[60px] lg:mb-[152px]  '>
        <div
          className={`  py-[50px]  px-[60px]   relative flex-shrink-0   rounded-[55px] w-[650px] h-[463px] bg-action-card-1 `}
        >
          <h2 className='text-[48px] font-bold text-[#03326B] mb-[41px]'>
            Apply for IDO
          </h2>
          <p className='w-[496px] h-[130px] text-[16px] text-[#3E81A2] font-bold mb-[65px]'>
            Meadow is always looking for the most creative game changing
            projects, feel free to apply for an IDO on Meadow. Your project will
            be critically vetted by our team of experts and if you are succesful
            we will work with you to take your project to another level.
          </p>
          <button className='border-[1px] rounded-full w-[64px] h-[64px] flex items-center justify-center text-[25px] border-white text-white '>
            <AiOutlineArrowRight />
          </button>
          <Image
            src={"/action/object-1.webp"}
            className='absolute left-[206px] bottom-0'
            alt='action-card'
            width={355}
            height={354}
          />
        </div>

        <div
          className={`py-[50px]  px-[60px]   relative flex-shrink-0   rounded-[55px] w-[650px] h-[463px] bg-action-card-1  `}
        >
          <Image
            src={"/action/object-2.webp"}
            className='absolute left-[60px] top-0'
            alt='action-card'
            width={369}
            height={369}
          />
          <Image
            src={"/action/object-3.webp"}
            className='absolute right-0 top-[100px] '
            alt='action-card'
            width={207}
            height={208}
          />
          <div className='flex justify-end w-full '>
            <button className='border-[1px] rounded-full w-[64px] mb-[91px] h-[64px] flex items-center justify-center text-[25px] border-white text-white '>
              <AiOutlineArrowRight />
            </button>
          </div>
          <h2 className='text-[48px] font-bold text-[#03326B] mb-[41px]'>
            Apply for KOL
          </h2>
          <p className='w-[486px] h-[130px] text-[16px] text-[#3E81A2] font-bold mb-[65px]'>
            We create a Meadow marketing army. You can be part of our marketing
            if you’re willing to put your social accounts to work. If you feel
            you want to be part of the team and add value, we’d for sure love to
            welcome you to the Meadow.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ActionCards;
