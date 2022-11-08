import Image from '../utils/Image'

export default function Nightlife() {
    return (
        <>
          {/* <span className='absolute mt-20 ml-2 z-0'>light shines in the darkeness of the night;</span> */}

          <div className='mx-auto my-auto columns-1 lg:columns-2 xl:columns-3 gap-1 w-full h-max mt-10 sm:mt-44 mb-0 sm:mb-40 xl:pr-4 z-10 bg-black'>
            <div className='relative mt-0'>
              <Image src="/photography/nightlife/1.jpg" thumb="/photography/nightlife_blur/1.jpg" />
            </div>
            <div className='relative mt-5'>
              <Image src="/photography/nightlife/2.jpg" thumb="/photography/nightlife_blur/2.jpg" />
            </div>
            <div className='relative mt-5'>
              <Image src="/photography/nightlife/3.jpg" thumb="/photography/nightlife_blur/3.jpg" />
            </div>
            <div className='relative mt-5'>
              <Image src="/photography/nightlife/4.jpg" thumb="/photography/nightlife_blur/4.jpg" />
            </div>
            <div className='relative mt-5'>
              <Image src="/photography/nightlife/5.jpg" thumb="/photography/nightlife_blur/5.jpg" />
            </div>
            <div className='relative mt-5'>
              <Image src="/photography/nightlife/6.jpg" thumb="/photography/nightlife_blur/5.jpg" />
            </div>
            <div className='relative mt-5'>
              <Image src="/photography/nightlife/7.jpg" thumb="/photography/nightlife_blur/7.jpg" />
            </div>
            <div className='relative mt-5'>
              <Image src="/photography/nightlife/8.jpg" thumb="/photography/nightlife_blur/8.jpg" />
            </div>
            <div className='relative mt-5'>
              <Image src="/photography/nightlife/9.jpg" thumb="/photography/nightlife_blur/9.jpg" />
            </div>
          </div>
        </>
    )
 }