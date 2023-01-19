import React from 'react'
import Image  from 'next/image';

function LoadingOverlay() {
  return (
    <div className="fixed z-[60] w-screen h-screen inset-0 bg-[#BEEFFF] flex items-center justify-center " >

<div class="loader">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
    </div>
  )
}

export default LoadingOverlay