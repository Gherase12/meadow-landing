import React from "react";
import Image from "next/image";
import { GiHamburgerMenu, GiBookmark } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineTeam } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";
import DashboardBtn from "./btn/DashboardBtn";

function Nav({ homeRef, applyRef, teamRef, setLoading }) {
  const [open, setOpen] = useState(false);
  const addStyle = ["background-gradient", "pb-[10px]"];
  const removeStyle = ["lg:pt-[40px]"];

  const navItems= [
    {
      name:"Home",
      ref: homeRef,
      Icon:GrHomeRounded
    },
    {
      name:"Apply",
      ref: applyRef,
      Icon:TfiWrite,
    },
    {
      name:"Team",
      ref:teamRef,
      Icon:AiOutlineTeam
    }
   

  ]

  const scrollToElement = (Ref) => {
    setOpen(false);
    Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    function handleScroll() {
      const navbar = document.querySelector(".navbar");
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > navbar.offsetHeight) {
        navbar.classList.add(...addStyle);
        navbar.classList.remove(...removeStyle);
   
      } else {
        navbar.classList.remove(...addStyle);
        navbar.classList.add(...removeStyle);
      }
    }
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className='navbar z-50 top-0 fixed left-0 right-0 pt-[20px]  lg:pt-[40px] flex   text-[18px] font-medium  justify-between items-center lg:px-[61px] px-[20px]   '>
      <Image
        src='/meadow-sm.svg'
        width={40}
        height={40}
        className='lg:hidden'
        alt="meadow logo"
      />
      <Image
        src='/meadow-lg.svg'
        width={189}
        height={60}
        className=' hidden lg:flex'
        alt="meadow logo"
      />
      <div className='lg:flex space-x-[36px] hidden '>
        <ul className='flex   text-white items-center space-x-[36px]'>
          <li
            onClick={() => scrollToElement(homeRef)}
            className='cursor-pointer'
          >
            Home
          </li>
          <li
            onClick={() => scrollToElement(applyRef)}
            className='cursor-pointer'
          >
            Apply
          </li>
          <li
            onClick={() => scrollToElement(teamRef)}
            className='cursor-pointer'
          >
            Team
          </li>
          <Link  target="_blank" rel="noreferrer noopener" href='https://meadow.gitbook.io/docs/'>
            
            <li className='cursor-pointer'>
            
              Docs</li>
          </Link>
        </ul>
        <DashboardBtn setLoading={setLoading} />
      </div>
      <GiHamburgerMenu
        onClick={() => setOpen(true)}
        className='text-[40px] text-white lg:hidden'
      />

      <div
        className={`${
          !open
            ? "fixed right-[100%]"
            : "  fixed top-0 pb-[70px] left-0 text-[30px] h-screen w-[100%] px-[29px] items-center justify-center overflow-y-scroll  flex  flex-col    background-gradient text-white    duration-500 ease-in-out z-50 lg:hidden"
        }  `}
      >
        <RiCloseFill
          onClick={() => setOpen(false)}
          className='absolute right-[20px] top-[20px] text-[40px] text-black '
        />

        <div className='absolute w-[150px] h-[150px]  bottom-[60px] right-0  2xl:w-[822px] 2xl:h-[822px]  lg:top-[500px]  lg:right-[280px] 2xl:top-[270px] lg:scale-[1.2] z-30 '>
      <Image src={"/object-1.webp"} fill alt='object-1' />
    </div>

    <div className='absolute  w-[100px] h-[100px]  top-0  right-[100px]    z-30 '>
      <Image src={"/object-2.webp"} fill alt='object-2' />
    </div>
    <div className='absolute w-[120px] h-[120px] -right-[20px] top-[180px]    z-30 '>
      <Image
        src={"/object-3.webp"}
        fill
        alt='object-3'
        className='object-contain'
      />
    </div>

        <ul className='flex flex-col text-black  w-full  space-y-[36px] '>
          {
            navItems.map(({name, ref, Icon},i)=>(
              <li
              key={i}
              onClick={() => scrollToElement(ref)}
              className='cursor-pointer  flex items-center space-x-[20px] '
            >
              <Icon />
               <p>
               {name}
                </p>
            </li>
            ))
          }
         
          <div className="border-2 w-full border-black" />
          <Link target="_blank" rel="noreferrer noopener" href='https://meadow.gitbook.io/docs/'>
            <li className='cursor-pointer flex items-center space-x-[20px]   '>
            <GiBookmark />
            <p>

              Docs
            </p>
              </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
