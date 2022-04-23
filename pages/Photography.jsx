
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Photography(props) {

  function renderPhotos() {
    switch(props.photosIndex) {
      case 0:
        return (
          <>
            {/* <span className='absolute mt-20 ml-2 z-0'>light shines in the darkeness of the night;</span> */}

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/1.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/2.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/3.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/4.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/5.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/6.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll mb-16 bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/7.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/8.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/nightlife/9.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>
          </>
        )
      case 1:
        return (
          <>
            {/* <span className='absolute mt-20 ml-2 z-0'>light shines in the darkeness of the night;</span> */}

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/1.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/2.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/3.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/4.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/5.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/6.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll mb-16 bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/7.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/8.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/cinematic/9.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            {/* <span className='absolute mt-20 ml-2 z-0'>light shines in the darkeness of the night;</span> */}

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/1.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/2.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/3.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/4.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/5.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/6.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll mb-16 bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/7.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/13.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/9.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>

            <div className='mx-auto my-auto flex flex-col gap-1 w-full h-full mt-40 pt-2 px-2 overflow-scroll mb-16 bg-black z-10'>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/10.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/11.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative h-[100rem]'>
                <Image src="/photography/portraits/12.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div className='flex w-full h-screen overflow-scroll pr-2'>
      {renderPhotos()}
    </div>
  )
}
