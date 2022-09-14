import Image from '../utils/Image'

export default function Cinematic() {
    return (
          <div className='mx-auto my-auto columns-1 lg:columns-2 xl:columns-3 gap-3 w-full h-max mt-2 sm:mt-44 mb-0 sm:mb-40 xl:pr-4 z-10 bg-black'>
              <div className='relative mt-0'>
                <Image src="/photography/cinematic/1.jpg" thumb="/photography/cinematic_blur/1.jpg" />
              </div>
              <div className='relative mt-5'>
                <Image src="/photography/cinematic/2.jpg" thumb="/photography/cinematic_blur/2.jpg" />
              </div>
              <div className='relative mt-5'>
                <Image src="/photography/cinematic/3.jpg" thumb="/photography/cinematic_blur/3.jpg" />
              </div>
              <div className='relative mt-5'>
                <Image src="/photography/cinematic/4.jpg" thumb="/photography/cinematic_blur/4.jpg" />
              </div>
              <div className='relative mt-5'>
                <Image src="/photography/cinematic/5.jpg" thumb="/photography/cinematic_blur/5.jpg" />
              </div>
              <div className='relative mt-5'>
                <Image src="/photography/cinematic/6.jpg" thumb="/photography/cinematic_blur/6.jpg" />
              </div>
              <div className='relative mt-5'>
                <Image src="/photography/cinematic/7.jpg" thumb="/photography/cinematic_blur/7.jpg" />
              </div>
              <div className='relative mt-5'>
                <Image src="/photography/cinematic/8.jpg" thumb="/photography/cinematic_blur/8.jpg" />
              </div>
              <div className='relative mt-5'>
                <Image src="/photography/cinematic/9.jpg" thumb="/photography/cinematic_blur/9.jpg" />
              </div>
            </div>
    )
 }