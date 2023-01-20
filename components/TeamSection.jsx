import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function TeamSection({teamRef, orizontalVariants, inViewVariants}) {
    const teamInfo = [
      "Ken has six years of crypto experience and is the Advisor & Growth specialist at Meadow. He is the Founder of Cryptonewsline, CO-Founder of Celestial Ventures, and Founder of Altbase. He previously worked with the famed boxer Manny Paquio and operated his own enterprises with great success. Ken built a network of over one hundred thousand followers and implemented effective marketing methods that have helped him scale his businesses.",
      "Sami is the Strategic Coordinator and Advisor at Meadow. Additionally, he is the founder and CEO of Celestial Ventures. Sami, who holds a bachelor's degree in business, has over five years of expertise in crypto, having worked on tier 1 deals, raising millions for start-ups, and has consulted numerous projects. With Sami's knowledge, the team will ensure that Meadow launches the best projects on Sui",
        "Navid is the Chief Marketing Officer at Meadow. In addition to being the CEO of the Persian Army, he has served as a consultant for Kommunitas.net and marketing leader zincopad.app. He has over five years of expertise in crypto and ties to the most influential individuals. Exposure and strategic partners are essential, and Navid's experience will expedite Meadow's expansion.",
        "Tommi Karjalainen has joined Meadow as a gaming advisor, an overview of Tommi consists of being a Game Director, Senior Designer Over 14 years of experience in UX, and visual design for digital services and applications. Have been working across a huge range of different brands and companies around the globe. Currently developing a game exclusively for Nintendo with the top talents. A passionate gamer since 1990 and have a wide knowledge of the game industry. Skills obtained include Visual design, Game design, UX, Quality and usability testing, 3D modeling, IOS, Android, Nintendo ecosystem. Currently a CEO, Game Director Designton Game Studios, Finland Senior Designer, Consultant Futurice",
        "Game developer for over 4 years with solid experience in team management and coordination of projects with over 50 million installs. All of the games are published on the Play Store and App Store. Lately he's been working on blockchain integration and development of projects that rely on Web3.",
        "Hamza is part of the legal team for Meadow, with regulations kicking in, it is important to stay within the regulatory framework, Hamza will make sure that Meadow is conducting a smooth KYC/KYB procedure with start-ups and our partners. He has previously worked at Giant Group as a Corporate Legal Advisor and will validate projects through critical inspection.",
        "Rene van Dijk will also be a gaming advisor for Meadow, he is a Blockchain specialist, web3 game manager, six-year experience in blockchain technology along with a long history of helping startups and new projects to grow bigger. Rene's main goal is to change the future of gaming by fixing the gap between web3 and the traditional gaming industry by helping companies to produce high-quality web3 games. Skills which have been obtained include Web3 gaming, Game development management, Blockchain technology, Marketing, Product Launch and strategy, background CEO Designton AG Game Studio, Swiss, CEO of Xdroids, COO Fox Gaming.",
        "Makinde Adeniyi a skilled and experienced content writer. With a background in journalism and a passion for researching and writing, John has honed his skills to become an expert in crafting engaging and informative content for a variety of digital platforms. From crafting compelling blog posts and articles to creating product descriptions that drive sales, Adeniyi is able to create content that resonates with readers and achieves business goals. He is well-versed in SEO best practices and stays up-to-date with the latest trends in digital marketing."
      ]
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
      {[...Array(8)].map((m, i) => (
        <SwiperSlide key={i}  className="relative">
          <div  class='flip-card w-[338px]  h-[351px]   lg:w-[538px] relative '>
            <div class='flip-card-inner '>
              <div class='flip-card-front w-full h-full'>
              <Image
                src={`/team/member-${i + 1}.webp`}
                fill
                className='object-contain lg:shadow-lg lg:rounded-[30px]'
                alt='team member'
              />
              </div>
              <div class='flip-card-back w-[338px] scrollbar-hide h-[200px] top-[70px] lg:top-0 bg-blue-1 lg:h-[345px]   lg:w-[538px] rounded-[20px] lg:rounded-[30px] text-white text-[13px] lg:text-[15px] lg:p-[30px] p-[15px] font-bold overflow-y-scroll'>
                {teamInfo[i]}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
    </div>
  )
}

export default TeamSection