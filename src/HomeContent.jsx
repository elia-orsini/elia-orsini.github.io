
import React, { useRef, useEffect } from 'react'
import R3f from './R3f'
import Typewriter from 'typewriter-effect';

export default function HomeContent({ ...props }) {
  return (
    <>
      {/* <div className=''>
        <span className='absolute top-[20rem] text-left md:top-[20rem] font-inter ml-0 font-bold text-[2.5rem] md:text-[4rem] z-10 xl:opacity-0 opacity-100 leading-none'>Hiya, i'm Elia.</span>
      </div> */}
      <div className="absolute text-10 xl:text-[4.5rem] mr-[30rem] mt-[27rem] z-10 font-inter font-bold z-10 xl:opacity-100 opacity-0">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Hiya, i'm Elia")
            .start()
          }}
          options={{
            autoStart: true,
            deleteSpeed: 0.5,
            delay: 140
          }}
          />
      </div>
      {/* <div className='w-[20rem] text-left text-[4rem] opacity-0 mt-[20rem] sm:opacity-100 md:opacity-0 font-inter ml-6 font-bold z-10 xl:opacity-0 opacity-100 leading-none'>
          hiya,<br /> i'm elia.
      </div> */}
      {/* <R3f className="z-0"/> */}
      <video width="350" playsInline autoPlay muted loop >
        <source src="/3drender.mp4" type="video/mp4"/>
      </video>
    </>
  )
}
