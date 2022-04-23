
import React, { useRef, useEffect } from 'react'
import R3f from './R3f'
import Typewriter from 'typewriter-effect';

export default function HomeContent({ ...props }) {
  return (
    <>
      <div className="absolute text-[4.5rem] mr-[36rem] mt-[27rem] z-10 font-inter font-bold z-10">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Hiya, I'm El")
            .pauseFor(200)
            .typeString("ig")
            .pauseFor(400)
            .deleteChars(1)
            .typeString("a")
            .pauseFor(700)
            .typeString(".")
            .start()
          }}
          options={{
            autoStart: true,
            deleteSpeed: 0.5,
            delay: 200
          }}
          />
      </div>
      {/* <div className='opacity-100 absolute top-[20rem] w-[50rem] h-[18rem] bg-slate-700 bg-gradient-to-t from-emerald-400'>
      </div> */}
      {/* <R3f  className="z-0"/> */}
    </>
  )
}
