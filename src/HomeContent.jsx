
import React, { useRef, useEffect } from 'react'
import Typewriter from 'typewriter-effect';

export default function HomeContent({ ...props }) {
  return (
    <>
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

      <video width="350" playsInline autoPlay muted loop >
        <source src="/3drender.mp4" type="video/mp4"/>
      </video>
    </>
  )
}
