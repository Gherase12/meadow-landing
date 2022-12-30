import React from 'react'
import Image  from 'next/image';

function Info({name, details, img}) {
  return (
    <div className="flex flex-col lg:flex-row items-center">
        <div className="w-[144px] h-[144px] relative">

        <Image src={img} fill className="object-cover" alt="info-card" />
        </div>
        <div className="flex flex-col h-[94px] ">
        <h3 className="leading-[110%] text-[48px] text-black   ">
          {name}
          </h3>
          <p className="text-[#03326B] opacity-[0.3] text-[24px] leading-[130%]">{details}</p>
        </div>
    </div>
  )
}

export default Info