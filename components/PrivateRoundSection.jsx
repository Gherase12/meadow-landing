import React from 'react'
import { motion } from 'framer-motion';
import Info from './Info';

function PrivateRoundSection({inViewVariants}) {
    // imfo
  const info = [
    {
      name: "1.4M tokens",
      details: "Initial circulating supply",
      img: "/object-4.webp",
    },
    {
      name: "$0,10",
      details: "Private Price",
      img: "/object-5.webp",
    },
    {
      name: "$155,000",
      details: "Initial Marketcap",
      img: "/object-6.webp",
    },
  ];
  return (
    <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={inViewVariants}
        className='flex   justify-center lg:space-x-[76px] mb-[50px] lg:mb-[152px] flex-col lg:flex-row space-y-[100px] lg:space-y-0'
      >
        <div className=''>
          <h3 className='leading-[110%] lg:text-[48px] text-black mb-[30px]  text-[30px] lg:ml-0 ml-[20px] w-[300px] lg:w-[426px] h-[106px]'>
            Private Round & Token Information
          </h3>
          <p className=' h-[130px] leading-[160%] text-[16px] lg:ml-0 ml-[20px]  max-w-[426px]   font-normal'>
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
  )
}

export default PrivateRoundSection