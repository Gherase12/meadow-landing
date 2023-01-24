import React,{useState} from 'react'
import { motion } from 'framer-motion';
import FAQ from './FAQ';

function FaqSection({inViewVariants}) {
    const [isOpen, setIsOpen] = useState(-1);

    const faq = [
        {
          q: "What is the benefit of having OG role?",
          a: "OG role comes with many different benefits including automatically whitelisted for the private round, early info on Meadow, private channel with OGS, you can find out more in our docs.",
        },
        {
          q: " What is the inital marketcap of Meadow?",
          a: "The initial marketcap will be $115,000.",
        },
        {
          q: "Will Meadow support other chains?",
          a: "Yes, we are looking forward to going multichain as we believe innovating is a key instrument when it comes to long term sustainability.",
        },
       
        {
          q: "When will Meadow launch?",
          a: "Meadow will time the launch with the market, likely in Q2 - Q3.",
        },
        
        {
          q: "When will the private round open?",
          a: " The private round will be open in Q2, in order to participate you will need to work your way up using the Crew3 platform. You will be rewarded with roles depending on what level you are. More info in docs  ",
        },
        {
          q: "What kind of projects will Meadow launch?",
          a: "Meadow focuses on quality, we will launch projects from all grounds including Gaming, Ai, as long as the project showcases that they are unique and bring great value to the ecosystem, we will incubate them. ",
        },
      ];
  return (
    <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={inViewVariants}
        className='flex   flex-col lg:flex-row justify-center  lg:mb-[150px]  px-[20px]'
      >
        <div className='lg:w-[438px] '>
          <h3 className='text-[48px] mb-[27px]'>FAQ</h3>
          <p className='w-[274px] text-[16px] font-bold '>
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className='pt-[40px]'>
          {faq.map(({ q, a }, i) => (
            <FAQ
              a={a}
              q={q}
              id={i}
              setIsOpen={setIsOpen}
              isOpen={isOpen === i}
              key={i}
            />
          ))}
        </div>
      </motion.div>
  )
}

export default FaqSection