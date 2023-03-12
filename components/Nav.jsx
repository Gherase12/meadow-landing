import React from "react";
import Image from "next/image";
import { GiHamburgerMenu, GiBookmark } from "react-icons/gi";

import { TfiWrite } from "react-icons/tfi";
import { AiOutlineTeam,AiFillHome, AiOutlineClose, AiOutlineInstagram,AiOutlineTwitter, } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import DashboardBtn from "./btn/DashboardBtn";

function Nav({ homeRef, applyRef, teamRef, setLoading }) {
  const [open, setOpen] = useState(false);
  const addStyle = ["background-gradient", "pb-[10px]"];
  const removeStyle = ["lg:pt-[40px]"];

  const navItems = [
    {
      name: "Home",
      ref: homeRef,
      Icon: AiFillHome,
    },
    {
      name: "Apply",
      ref: applyRef,
      Icon: TfiWrite,
    },
    {
      name: "Team",
      ref: teamRef,
      Icon: AiOutlineTeam,
    },
  ];

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

  const socialMedia = [
    {
      name: "twitter",
      Icon: AiOutlineTwitter,
      link: "https://twitter.com/meadowlaunch",
    },
    { name: "discord", Icon: FaDiscord, link: "https://t.co/FLNKZU3ujp" },
    {
      name: "instagram",
      Icon: AiOutlineInstagram,
      link: "https://www.instagram.com/meadow_launch/",
    },
  ];

  return (
    <nav className='navbar z-50 top-0 fixed left-0 right-0 pt-[20px]  lg:pt-[40px] flex   text-[18px] font-medium  justify-between items-center lg:px-[61px] px-[20px]   '>
      <Image
        src='/meadow-sm.svg'
        width={40}
        height={40}
        className='lg:hidden'
        alt='meadow logo'
      />
      <Image
        src='/meadow-lg.svg'
        width={189}
        height={60}
        className=' hidden lg:flex'
        alt='meadow logo'
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
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://meadow.gitbook.io/docs/'
          >
            <li className='cursor-pointer'>Docs</li>
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
            : " text-white fixed top-0 pt-[200px] background-gradient   left-0 h-screen  w-[100%] px-[29px] nav-container  overflow-y-scroll  flex  flex-col    bg-blue-2    duration-500 ease-in-out z-[100] xl:hidden"
        }  `}
      >
        <AiOutlineClose
          onClick={() => setOpen(false)}
          className=' absolute top-[20px] right-[20px] text-white text-[25px]'
        />
        <div className='     '>
          <div className=' pb-[60px]   flex flex-col space-y-[30px]  border-b border-gray-4/50   '>
            {navItems.map(({ Icon, name, ref }, i) => (
              <button
                key={i}
                onClick={() => scrollToElement(ref)}
                className={`w-[246px]   flex items-center rounded-[12px] `}
              >
                <Icon className='mr-[16px] text-[30px] ' />
                <div className='text-[20px] nav-font font-normal   '>
                  {name}
                </div>
              </button>
            ))}
          </div>

          <div className='py-[30px] text-[16px] nav-font flex flex-row items-between  justify-around'>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              href='https://meadow.gitbook.io/docs/'
              className='h-[42px] py-[12px]  '
            >
              Docs
            </Link>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              href='https://drive.google.com/drive/folders/1r0gJEzF07XEQ4fGNcLycJUu-BK6uRl-a?usp=share_link'
              className='h-[42px] py-[12px]  '
            >
              Brand Kit
            </Link>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              href='https://meadow.gitbook.io/docs/socials-and-links/team'
              className='h-[42px] py-[12px]  '
            >
              Team
            </Link>
          </div>
        </div>

        {/* social buttons*/}
        <div className=' flex flex-col items-center w-full    '>
          {/* butoane */}
          <div className='w-[165px] flex justify-around h-[40px] mb-[35px] '>
            {socialMedia.map(({ name, Icon, link }, i) => (
              <Link
                target='_blank'
                rel='noreferrer noopener'
                href={link}
                key={i}
                className='rounded-full w-[40px] h-[40px] flex items-center justify-center bg-black '
              >
                <Icon />
              </Link>
            ))}
          </div>

          {/* buttons */}
          <div className='   flex justify-center w-full   '>
          
            <DashboardBtn />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
