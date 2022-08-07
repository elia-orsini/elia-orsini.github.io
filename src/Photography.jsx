
import React, { useRef, useEffect } from 'react'

export default function Photography(props) {
  function renderPhotos() {
    switch(props.photosIndex) {
      case 0:
        return (
          <>
            {/* <span className='absolute mt-20 ml-2 z-0'>light shines in the darkeness of the night;</span> */}

            <div className='mx-auto my-auto columns-1 lg:columns-2 xl:columns-3 gap-1 w-full h-max mt-44 mb-40 xl:pr-4 z-10 bg-black'>
              <div className='relative mt-0 border border-[0.02em]'>
                <img src="/photography/nightlife/1.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/nightlife/2.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/nightlife/3.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/nightlife/4.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/nightlife/5.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/nightlife/6.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/nightlife/7.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/nightlife/8.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/nightlife/9.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>
          </>
        )
      case 1:
        return (
          <>
            {/* <span className='absolute mt-20 ml-2 z-0'>light shines in the darkeness of the night;</span> */}

            <div className='mx-auto my-auto columns-1 lg:columns-2 xl:columns-3 gap-3 w-full h-max mt-44 mb-40 xl:pr-4 z-10 bg-black'>
              <div className='relative mt-0 border border-[0.02em]'>
                <img src="/photography/cinematic/1.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/cinematic/2.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/cinematic/3.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/cinematic/4.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/cinematic/5.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/cinematic/6.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/cinematic/7.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/cinematic/8.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative mt-5 border border-[0.02em]'>
                <img src="/photography/cinematic/9.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>

          </>
        )
      case 2:
        return (
            <div className='mx-auto my-auto columns-1 lg:columns-2 xl:columns-3 gap-3 w-full h-max mt-44 mb-40 xl:pr-4 z-10 bg-black'>
              <div className='relative border border-[0.02em] mt-0'>
                <img src="/photography/portraits2/1.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/2.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/3.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/4.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/13.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/6.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/7.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/5.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/9.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/10.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/11.jpg" layout="fill" objectFit="contain"/>
              </div>
              <div className='relative border border-[0.02em] mt-4'>
                <img src="/photography/portraits2/12.jpg" layout="fill" objectFit="contain"/>
              </div>
            </div>
        )
    }
  }

  return (
    <div className='flex w-full h-screen overflow-scroll pr-2'>
      {renderPhotos()}
    </div>
  )
}
