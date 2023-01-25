import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { BsLinkedin } from "react-icons/bs";

function TeamSection({ teamRef, orizontalVariants, inViewVariants }) {
  const teamInfo = [
    {
      desc: "Ken has six years of crypto experience and is the Advisor & Growth specialist at Meadow. He is the Founder of Cryptonewsline, CO-Founder of Celestial Ventures, and Founder of Altbase. He previously worked with the famed boxer Manny Pacquiao and operated his own enterprises with great success. Ken built a network of over one hundred thousand followers and implemented effective marketing methods that have helped him scale his businesses.",
      linkedin: "https://www.linkedin.com/in/ken-llamas-2bb162140/",
    },
    {
      desc: "Sami is the Strategic Coordinator and Advisor at Meadow. Additionally, he is the founder and CEO of Celestial Ventures. Sami, who holds a bachelor's degree in business, has over five years of expertise in crypto, having worked on tier 1 deals, raising millions for start-ups, and has consulted numerous projects. With Sami's knowledge, the team will ensure that Meadow launches the best projects on Sui",
      linkedin: "https://www.linkedin.com/in/sami-k-60354a246/",
    },

    {
      desc: "Navid is the Chief Marketing Officer at Meadow. In addition to being the CEO of the Persian Army, he has served as a consultant for Kommunitas.net and marketing leader zincopad.app. He has over five years of expertise in crypto and ties to the most influential individuals. Exposure and strategic partners are essential, and Navid's experience will expedite Meadow's expansion.",
      linkedin: null,
    },
    {
      desc: "Tommi Karjalainen has joined Meadow as a gaming advisor, an overview of Tommi consists of being a Game Director, Senior Designer Over 14 years of experience in UX, and visual design for digital services and applications. Have been working across a huge range of different brands and companies around the globe. Currently developing a game exclusively for Nintendo with the top talents. A passionate gamer since 1990 and have a wide knowledge of the game industry. Skills obtained include Visual design, Game design, UX, Quality and usability testing, 3D modeling, IOS, Android, Nintendo ecosystem. Currently a CEO, Game Director Designton Game Studios, Finland Senior Designer, Consultant Futurice",
      linkedin: "https://www.linkedin.com/in/tommi-karjalainen-56b3b749/",
    },
    {
      desc: "Game developer for over 4 years with solid experience in team management and coordination of projects with over 50 million installs. All of the games are published on the Play Store and App Store. Lately he's been working on blockchain integration and development of projects that rely on Web3.",
      linkedin: "https://www.linkedin.com/in/andrei-edi-7776151a1/",
    },
    {
      desc: "Hamza is part of the legal team for Meadow, with regulations kicking in, it is important to stay within the regulatory framework, Hamza will make sure that Meadow is conducting a smooth KYC/KYB procedure with start-ups and our partners. He has previously worked at Giant Group as a Corporate Legal Advisor and will validate projects through critical inspection.",
      linkedin: null,
    },
    {
      desc: "Rene van Dijk will also be a gaming advisor for Meadow, he is a Blockchain specialist, web3 game manager, six-year experience in blockchain technology along with a long history of helping startups and new projects to grow bigger. Rene's main goal is to change the future of gaming by fixing the gap between web3 and the traditional gaming industry by helping companies to produce high-quality web3 games. Skills which have been obtained include Web3 gaming, Game development management, Blockchain technology, Marketing, Product Launch and strategy, background CEO Designton AG Game Studio, Swiss, CEO of Xdroids, COO Fox Gaming.",
      linkedin: "https://www.linkedin.com/in/rene-van-dijk-288100230/",
    },
    {
      desc: "Makinde Adeniyi a skilled and experienced content writer. With a background in journalism and a passion for researching and writing,  Makinde has honed his skills to become an expert in crafting engaging and informative content for a variety of digital platforms. From crafting compelling blog posts and articles to creating product descriptions that drive sales, Adeniyi is able to create content that resonates with readers and achieves business goals. He is well-versed in SEO best practices and stays up-to-date with the latest trends in digital marketing.",
      linkedin:
        "https://www.linkedin.com/in/adeniyi-makinde-marketing-communications-copywriter/",
    },
  ];
  return (
    <div className='w-full h-full'>
      <motion.h3
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={orizontalVariants}
        ref={teamRef}
        className='leading-[110%] lg:ml-0 mx-auto text-[48px] text-black  lg:text-[60px]   lg:mb-[52px] w-full lg:w-auto  text-center '
      >
        Our Team
      </motion.h3>
      {/* slider */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={inViewVariants}
        className=' max-w-[1500px] mx-auto  mb-[50px] lg:mb-[100px] '
      >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='   flex   space-x-[15px] w-full  '
        >
          {teamInfo.map(({ desc, linkedin }, i) => (
            <SwiperSlide key={i} className='relative'>
              <div className='flip-card w-[338px]  h-[351px]   lg:w-[538px] relative '>
                <div className='flip-card-inner  '>
                  <div className='flip-card-front w-full h-full relative  '>
                    {linkedin && (
                      <Link href={linkedin}>
                        <BsLinkedin className='absolute  z-20   right-[110px] lg:right-[170px] top-[160px] lg:top-[150px]  text-[20px] lg:text-[35px]' />
                      </Link>
                    )}

                    <Image
                      src={`/team/member-${i + 1}.webp`}
                      fill
                      className='object-contain lg:shadow-lg lg:rounded-[30px]'
                      alt='team member'
                    />
                  </div>
                  <div className='flip-card-back w-[338px] scrollbar-hide h-[200px]  top-[70px] lg:top-0 bg-blue-1 lg:h-[345px] team-font  lg:w-[538px] rounded-[20px] lg:rounded-[30px] text-black text-[13px] lg:text-[17px] lg:px-[30px] px-[15px] font-normal overflow-y-scroll'>
                    {linkedin && (
                      <Link target="_blank" rel="noreferrer noopener" href={linkedin}>
                        <BsLinkedin className='text-white text-[20px] lg:text-[35px] mt-[10px]  h-[60px] ' />
                      </Link>
                    )}

                    <p className={!linkedin && "pt-[30px]"}>{desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default TeamSection;
