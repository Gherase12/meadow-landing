import React from "react";
import Image from "next/image";

function IdoCard({ img }) {
  return (
    <div className=' card-background shadow-blue-500 drop-shadow-xl w-[427px] h-[543px] border-2 rounded-[50px] flex flex-col justify-around items-center scale-[0.7] -ml-[50px] -mt-[50px] lg:transform-none  lg:ml-0 lg:mt-0 '>
      <div className='relative h-[371px] w-[347px] '>
        <Image src={img} fill alt="ido-card"/>
      </div>
      <button className='bg-black text-white flex items-center justify-center w-[271px]  h-[64px] rounded-full '>
        Participate
      </button>
    </div>
  );
}

export default IdoCard;
