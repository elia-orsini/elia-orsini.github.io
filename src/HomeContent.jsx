
import React, { useRef, useEffect } from 'react'
import { BoxArrowUpRight } from 'react-bootstrap-icons';

const LinkIcon = (props) => {

  return (
    <>
      <span className='text-white'> {props.title}</span>
    <a href={props.href} target="_blank">
      <BoxArrowUpRight size={12} className='text-white ml-1 mb-1 inline-block'/>
    </a>
    </>
)}

export default function HomeContent({ ...props }) {
  return (
    <div className='w-full mt-10 sm:mt-44 text-left columns-1 leading-10 tracking-tight'>
      <div>
        <p className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>hiya, I'm Elia</p>
        <p className='text-lg sm:text-xl font-light sm:mt-2 text-gray-400'>but people just call me el</p>
        <p className='text-xl mt-10 sm:text-2xl font-bold'>Please check out my works!</p>
        <p className='text-base font-light text-gray-400'>and send me an email if u like them ;)</p>
        <p className='text-xl mt-10 sm:text-2xl font-bold'>How do I fill my time?</p>
        <p className='text-base font-light text-justify w-[100%] md:w-[80%] text-gray-400'>
          I am currently a junior developer at <LinkIcon title="IMG Arena" href='https://imgarena.com'/> and working on projects
          like <LinkIcon title="Archive.pdf" href='https://www.archivepdf.net/'/>, <LinkIcon title="IN$0MN1A" href='https://insomniaevents.xyz/'/> or
          <LinkIcon title="plantie" href='https://plantie.fly.dev/'/>.
          I sometimes render cool distopic 3D stuff, I read non-fiction books, drink coffee/craft beer/cheap wine or stick and poke my legs.
          I run and journal my days and have a little digital garden.
        </p>
      </div>

      {/* <div>
        <video className='hidden md:block w-60 mt-4 sm:mt-0' width="350" playsInline autoPlay muted loop >
          <source src="/3drender.mp4" type="video/mp4"/>
        </video>
      </div> */}
    </div>
  )
}
