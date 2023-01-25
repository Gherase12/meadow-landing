import React, {useEffect, useState} from 'react'
import { BsArrowUp } from "react-icons/bs";
import { motion } from "framer-motion";
function ScrollTopButton({homeRef}) {
  const [showButton, setShowButton] = useState(false);

  const scrollToElement = (Ref) => {
    
    Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = homeRef.current.clientHeight;
      if (document.documentElement.scrollTop > heroHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [homeRef]);

  return (
    <>
    {showButton && (
    <motion.button
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3}}
    onClick={() => scrollToElement(homeRef)} className="rounded-full bg-white  w-[50px] h-[50px]  md:w-[80px] z-20  md:h-[80px] flex items-center justify-center fixed bottom-[20px] right-[20px] md:bottom-[100px]  md:right-[100px] border-2" >
      <BsArrowUp className="md:text-[30px]" />
    </motion.button>
    )}
    </>
  )
}

export default ScrollTopButton