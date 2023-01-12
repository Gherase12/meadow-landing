import React from 'react'
import Image  from 'next/image';

function LoadingOverlay() {
  return (
    <div className="fixed z-[60] w-screen h-screen inset-0 bg-[#BEEFFF] flex items-center justify-center " >

        <Image src="/gif/spinner.gif" width={50} height={50} alt="spinner" />
    </div>
  )
}

export default LoadingOverlay