import React,{useState} from 'react'
import { motion } from 'framer-motion';
import FAQ from './FAQ';

function FaqSection({inViewVariants}) {
    const [isOpen, setIsOpen] = useState(-1);

    const faq = [
        {
          q: "When will the full launch of the project take place?",
          a: "Q2/Early Q3 of 2023 depending on when SUI Mainnet Launches \n (we will launch the same week that SUI launches)",
        },
        {
          q: " What’s the benefit of having Legend role?",
          a: "Legend Roles are very limited but have the absolute best benefits for our community members: \n \n- Automatic whitelist for private round \n- Exclusive private channel \n- Eligble to participate in any contest or giveaways \n- More allocation in the private round \n- Possible automatic whitelist opportunities for other launches \n \nMore details: ",
        },
        {
          q: "Will it support other wallets and chains?",
          a: "Yes, Meadow is a multi-chain launchpad and will be bridging to other chains starting with SUI",
        },
        {
          q: "What are the first projects that are going to launch on Meadow?",
          a: "Gaming projects and AI",
        },
        {
          q: "How many token will  be available for the team?",
          a: " See here on our Gitbook for detailed Tokenomics \n ",
        },
        {
          q: "What insurance claims are set for each level?",
          a: "Diamond: 30% \n Gold 15% \n See for more details: ",
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