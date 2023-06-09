import Image from '../utils/Image'

export default function Aliens() {
  return (
    <>
      <p className='absolute mt-20 ml-2 z-0 text-[2.2rem]'>ALIENS</p>
      {/* <span className='absolute mt-[8rem] ml-2 z-0 text-[1rem]'>4D4554414C</span> */}

      <div className='mx-auto columns-1 lg:columns-2 gap-2 w-full h-max mt-10 sm:mt-40 lg:mt-60 xl:mt-60 mb-0 sm:mb-40 xl:pr-4 z-10 bg-black'>
        <div className='relative my-0'>
          <Image src="/design/aliens/alien3.jpg" />
        </div>
        <div className='relative my-3'>
          <Image src="/design/aliens/alien2.jpg" />
        </div>
        <div className='relative my-3'>
          <Image src="/design/aliens/alien1.jpg" />
        </div>
      </div>
    </>
  )
}