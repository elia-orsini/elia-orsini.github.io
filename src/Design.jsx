
import React, { useRef, useEffect } from 'react'


export default function Design({ ...props }) {

  function renderDesign() {
    switch(props.designIndex) {
      case 0:
        return (
          <>
            <p className='absolute mt-20 ml-2 z-0 text-[2.2rem]'>SUNSHI</p>
            <span className='absolute mt-[8rem] ml-2 z-0 text-[1rem]'>paradise city</span>
            {/* <span className='absolute w-[calc(9/14*100%)] flex mt-[12rem] text-justify ml-2 z-0'>
            the sun always shines in the city of sunshi. 
            thanks to the latest developments in solar energy, an artificial sun has been installed to light people's lives.
            it regulates the temperature and provides a warm and delicate light. and when it rains, the sky is full of rainbows
            and kids can play in the streets.
            after a difficult decade, people started to leave their screens and go out for long walks. the city is now vibrant with life. every day is a sunny sunday morning.
            people are happier and they walk to work. and after they are
            done, they have their dinner on the roofs of those buildings. they sunbathe while they eat the fruits of that light.
            every corner of the city is tinted by a delicate palette of warm colours. everything worked out in the end.
            </span> */}

            <div className='mx-auto my-auto columns-1 lg:columns-2 gap-2 w-full h-max mt-44 mb-40 xl:pr-4 z-10 bg-black'>
              <div className='relative my-0 border border-[0.02em]'>
                <img src="/design/sunshi/1.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-3 border border-[0.02em]'>
                <img src="/design/sunshi/2.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-3 border border-[0.02em]'>
                <img src="/design/sunshi/3.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-3 border border-[0.02em]'>
                <img src="/design/sunshi/5.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-3 border border-[0.02em]'>
                <img src="/design/sunshi/6.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-3 border border-[0.02em]'>
                <img src="/design/sunshi/4.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>
          </>
        )
      case 1:
        return (
          <>
            <p className='absolute mt-20 ml-2 z-0 text-[2.2rem]'>METAL</p>
            <span className='absolute mt-[8rem] ml-2 z-0 text-[1rem]'>0100101010011</span>
            {/* <span className='absolute w-[calc(9/14*100%)] flex mt-[12rem] text-justify ml-2 z-0'>
            Metallic elements placed in futuristic-dystopic situations represent my visual understanding of the reality around me. 
            Materialism, nihilism and nature intersect to create an utopian 3D world where physical limits, ethical 
            laws and aesthetic standards are all gone and chaos is what remains.
            </span> */}

            <div className='mx-auto my-auto columns-2 xl:columns-4 gap-2 w-full h-max mt-44 mb-40 xl:pr-4 z-10 bg-black'>
              <div className='relative my-0 border border-[0.02em]'>
                <img src="/design/metal/1.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/2.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/3.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/4.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/5.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/6.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/7.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/8.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/9.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/10.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/11.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/12.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/13.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/14.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/15.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/16.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/17.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/18.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/19.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/22.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/25.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/23.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/24.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/26.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/27.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/21.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative my-2 border border-[0.02em]'>
                <img src="/design/metal/20.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <div className='mx-auto my-auto columns-2 xl:columns-4 gap-2 w-full h-max mt-44 mb-40 xl:pr-4 z-10'>
            <div className='relative my-0 border border-[0.02em]'>
              <img src="/design/2d/1.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/2.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/3.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/4.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/10.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/6.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/7.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/9.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/8.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/5.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/13.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/12.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/11.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className='relative my-2 border border-[0.02em]'>
              <img src="/design/2d/14.jpg" layout="fill" objectFit="contain"/>
            </div>
          </div>
        )
    }
  }

  return (
    <div className='flex w-full h-screen overflow-scroll pr-2'>
      {renderDesign()}
    </div>
  )
}
