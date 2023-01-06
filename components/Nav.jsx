import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import Link from "next/link";

function Nav({ homeRef, projectRef, teamRef }) {
  const [open, setOpen] = useState(false);
  const addStyle = ["background-gradient", "pb-[10px]"];
  const removeStyle = ["lg:pt-[40px]"];

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
            onClick={() => scrollToElement(projectRef)}
            className='cursor-pointer'
          >
            Project
          </li>
          <li
            onClick={() => scrollToElement(teamRef)}
            className='cursor-pointer'
          >
            Team
          </li>
          <Link href='https://meadow.gitbook.io/docs/'>
            <li className='cursor-pointer'>Docs</li>
          </Link>
        </ul>
        <Link href='https://app.meadowlaunch.com/'>
          <button className='bg-white text-black w-[187px] h-[56px] rounded-full '>
            Dashboard
          </button>
        </Link>
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

        <ul className='flex flex-col text-black  space-y-[36px]'>
          <li
            onClick={() => scrollToElement(homeRef)}
            className='cursor-pointer'
          >
            Home
          </li>
          <li
            onClick={() => scrollToElement(projectRef)}
            className='cursor-pointer'
          >
            Project
          </li>
          <li
            onClick={() => scrollToElement(teamRef)}
            className='cursor-pointer'
          >
            Team
          </li>
          <Link href='https://meadow.gitbook.io/docs/'>
            <li className='cursor-pointer'>Docs</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
