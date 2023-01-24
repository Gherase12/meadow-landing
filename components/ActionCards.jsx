import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


import { useState } from 'react'
import ApplyModal from "./ApplyModal";


function ActionCards({ inViewVariants, applyRef}) {
  let [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState("IDO")

  const openModal = ()=>{
     
      setIsOpen(true)
  }
  const closeModal = ()=>{
   
      setIsOpen(false)
  }
  
  return (
    <motion.div
    ref={applyRef}
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

        <div>
          <h2 className='text-[30px] font-bold text-[#03326B] mb-[41px]'>
            Apply for IDO
          </h2>
          <p className='  text-[12px] text-[#3E81A2] font-bold mb-[30px]  max-w-[400px]'>
          We are always on the lookout for creative and disruptive projects. Our team of experts will critically vet every submission, handpick the unique ones, and then work with their creators—taking the project to the next level.
          </p>

          <button onClick={(e)=>{openModal(e); setType("IDO")}} className='animate-pulse py-[5px]  bg-white text-black rounded-full font-bold px-[10px]   flex items-center justify-center text-[15px] border-white  mb-[30px] '>
            Apply
          </button>

          <h2 className='text-[30px] font-bold text-[#03326B] mb-[41px]'>
            Apply for KOL
          </h2>
          <p className=' text-[12px] text-[#3E81A2] font-bold mb-[30px]  max-w-[400px]'>
          Are you willing to put your social accounts to work? Do you want to help put meadow out there to drive up our socials? We are working side by side with meadow’s marketing army, and you’re welcome to be a part of it. Join us and be part of the team!
          </p>
          <button onClick={(e)=>{openModal(e); setType("KOL")}} className='animate-pulse py-[5px] bg-white text-black rounded-full font-bold px-[10px]   flex items-center justify-center text-[15px] border-white  mb-[30px] '>
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
          We are always on the lookout for creative and disruptive projects. Our team of experts will critically vet every submission, handpick the unique ones, and then work with their creators—taking the project to the next level.
          </p>
          <button onClick={(e)=>{openModal(e); setType("IDO")}}className=' relative   mb-[91px] learn-more pb-[10px] flex items-center text-[25px] border-white text-white '>
            <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
              </span>
              <span className='button-text'>Apply</span>
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
          <div onClick={(e)=>{openModal(e); setType("KOL")}}   className='flex justify-end w-full '>
            <button className=' relative   mb-[91px] learn-more pb-[10px] flex items-center text-[25px] border-white text-white '>
            <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
              </span>
              <span className='button-text'>Apply</span>
            </button>
          </div>

         
          <h2 className='text-[48px] font-bold text-[#03326B] mb-[41px]'>
            Apply for KOL
          </h2>
          <p className='w-[486px] h-[130px] text-[16px] text-[#3E81A2] font-bold mb-[65px]'>
          Are you willing to put your social accounts to work? Do you want to help put meadow out there to drive up our socials? We are working side by side with meadow’s marketing army, and you’re welcome to be a part of it. Join us and be part of the team!
          </p>
        </div>
      </div>


      <ApplyModal type={type} isOpen={isOpen}  setIsOpen={setIsOpen} closeModal={closeModal} />
      
    </motion.div>
  );
}

export default ActionCards;
