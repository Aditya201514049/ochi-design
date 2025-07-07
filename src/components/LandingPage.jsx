import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-10'>
        <div className='masker'>
          <h1 className="uppercase text-7xl leading-none tracking-tighter font-semibold font-['Test_Founders_Grotesk_X-Condensed']">
            We Create
          </h1>
          <h1 className="uppercase text-7xl leading-none tracking-tighter font-semibold font-['Test_Founders_Grotesk_X-Condensed']">
            Eye - Openings
          </h1>
          <h1 className="uppercase text-7xl leading-none tracking-tighter font-semibold font-['Test_Founders_Grotesk_X-Condensed']">
            Presentations
          </h1>
        </div>
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
        {[
          "For public and private companies", 
          "From the first pitch to IPO"
        ].map((item, index) => (
          <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-4 py-2 border-[2px] uppercase border-zinc-700 font-light text-sm rounded-full'>Start the project</div>
          <div className='w-10 h-10 border-[2px] flex items-center justify-center border-zinc-700 rounded-full'><GoArrowUpRight /></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

