import Image from '../utils/Image'

export default function Sunshi() {
  return (
    <>
      <p className='absolute mt-20 ml-2 z-0 text-[2.2rem]'>SUNSHI</p>
      <span className='absolute mt-[8rem] ml-2 z-0 text-[1rem] block lg:hidden'>paradise city</span>
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

      <span className='absolute text-justify mt-[9rem] mr-4 px-10 z-0 text-xs w-[70%] hidden lg:block'>
        the sun always shines in the city of sunshi.
        thanks to the latest developments in solar energy, an artificial sun has been installed to light people's lives.
        it regulates the temperature and provides a warm and delicate light. and when it rains, the sky is full of rainbows
        and kids can play in the streets.
        after a difficult decade, people started to leave their screens and go out for long walks. the city is now vibrant with life. every day is a sunny sunday morning.
        people are happier and they walk to work. and after they are
        done, they have their dinner on the roofs of those buildings. they sunbathe while they eat the fruits of that light.
        every corner of the city is tinted by a delicate palette of warm colours. everything worked out in the end.
      </span>

      <div className='columns-1'>
        <div className='mx-auto columns-1 lg:columns-2 gap-2 w-full h-max mt-10 sm:mt-44 lg:mt-72 xl:mt-64 xl:pr-4 z-10 bg-black'>
          <div className='relative my-0'>
            <Image src="/design/sunshi/1.jpg" />
          </div>
          <div className='relative my-3'>
            <Image src="/design/sunshi/2.jpg" />
          </div>
          <div className='relative my-3'>
            <Image src="/design/sunshi/3.jpg" />
          </div>
          <div className='relative my-3'>
            <Image src="/design/sunshi/5.jpg" />
          </div>
          <div className='relative my-3'>
            <Image src="/design/sunshi/6.jpg" />
          </div>
          <div className='relative my-3'>
            <Image src="/design/sunshi/4.jpg" />
          </div>
        </div>
        <div className='relative mb-0 sm:mb-40 xl:pr-4'>
          <Image src="/design/sunshi/7.jpg" />
        </div>
      </div>
    </>
  )
}