import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlinePlusCircle,
  AiOutlineArrowRight,
  AiOutlineMinusCircle,
} from "react-icons/ai";

function FAQ({ a, q,id, isOpen, setIsOpen}) {
    const dropdownVariants = {
        closed: { height: 0, opacity: 0 },
        open: { height: "auto", opacity: 0.4 }
    };
  return (
    <div className=' min-h-[88px] justify-center flex border-t-[1px] first:border-t-0   flex-col'>
      <h3 className=' text-[15px] lg:text-[24px] font-medium w-full lg:w-[768px] relative pr-[30px] mt-[20px] '>
        {isOpen ? (
          <AiOutlineMinusCircle
            onClick={() => setIsOpen(!isOpen)}
            className='absolute right-0 top-[5px] cursor-pointer '
          />
        ) : (
          <AiOutlinePlusCircle
            onClick={() => setIsOpen(id)}
            className='absolute right-0 top-[5px] cursor-pointer '
          />
        )}

        {q}
      </h3>
      <motion.p 
       initial="closed"
       animate={isOpen ? "open" : "closed"}
       variants={dropdownVariants}
      transition={{ duration: 0.3 }}
      className="leading-[160%] font-[16px] opacity-[0.4] lg:whitespace-pre mb-[20px] " >{isOpen  && a}</motion.p>
      {/* <p>{a}</p> */}
    </div>
  );
}

export default FAQ;
