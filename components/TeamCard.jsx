import React, { useEffect, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";


function TeamCard({ name, linkedin, desc, index }) {

  const descRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const desc = descRef.current;
    const arrow = arrowRef.current;
    console.log(arrowRef.current);
    function handleScroll() {
        if (!arrow) return;
      if (desc.scrollHeight - desc.scrollTop === desc.clientHeight) {
        arrow.classList.add("hidden");
      } else {
        arrow.classList.remove("hidden");
      }
    }

    desc.addEventListener("scroll", handleScroll);

    return () => {
      desc.removeEventListener("scroll", handleScroll);
    };
  }, [descRef, arrowRef]);

  return (
    <div className='flip-card w-[338px]   h-[351px] min-[350px]:first:ml-[20px] min-[350px]:last:mr-[20px] md:first:ml-0 md:last:mr-0  lg:w-[538px] relative '>
      <div className='flip-card-inner  '>
        <div className='flip-card-front w-full h-full relative  '>
          <Image
            src={`/team/member-${index + 1}.webp`}
            fill
            className='object-contain lg:shadow-lg lg:rounded-[30px]'
            alt='team member'
          />
        </div>
        <div className='flip-card-back w-full 	 scrollbar-hide h-[200px]  top-[70px] lg:top-0 bg-blue-1 lg:h-[345px] team-font  lg:w-[538px] rounded-[20px] lg:rounded-[30px] text-black text-[13px] lg:text-[17px] lg:px-[30px] px-[15px] font-normal overflow-y-scroll'>
          <div
            ref={arrowRef}
            className='absolute bottom-[5px] orizontal-center animate-bounce '
          >
          <BiDownArrow
          className="lg:hidden"
          />
          <BiDownArrow
          className={`${desc.length < 549 ? "hidden": "lg:flex"} hidden  `}
          />
          </div>
          <div className='  h-[50px]  lg:h-[90px] w-full flex items-center space-x-[20px] '>
            <h3 className=' text-[20px] lg:text-[30px] font-bold '>{name}</h3>
            {linkedin && (
              <Link target='_blank' rel='noreferrer noopener' href={linkedin}>
                <BsLinkedin className='text-white cursor-pointer text-[20px] lg:text-[35px]  ' />
              </Link>
            )}
          </div>

          <p
            ref={descRef}
            className=' h-[115px] lg:h-[230px] overflow-scroll scrollbar-hide '
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
