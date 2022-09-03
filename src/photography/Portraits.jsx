import Image from '../utils/Image'

export default function Portraits() {
    return (
      <div className='mx-auto my-auto columns-1 lg:columns-2 xl:columns-3 gap-3 w-full h-max mt-2 sm:mt-44 mb-0 sm:mb-40 xl:pr-4 z-10 bg-black'>
        <div className='relative mt-0'>
          <Image src="/photography/portraits/1.jpg" thumb="/photography/portraits_blur/1.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/2.jpg" thumb="/photography/portraits_blur/2.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/3.jpg" thumb="/photography/portraits_blur/3.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/4.jpg" thumb="/photography/portraits_blur/4.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/13.jpg" thumb="/photography/portraits_blur/13.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/6.jpg" thumb="/photography/portraits_blur/6.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/7.jpg" thumb="/photography/portraits_blur/7.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/5.jpg" thumb="/photography/portraits_blur/5.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/9.jpg" thumb="/photography/portraits_blur/9.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/10.jpg" thumb="/photography/portraits_blur/10.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/11.jpg" thumb="/photography/portraits_blur/11.jpg" />
        </div>
        <div className='relative mt-4'>
          <Image src="/photography/portraits/12.jpg" thumb="/photography/portraits_blur/12.jpg" />
        </div>
    </div>
    )
 }