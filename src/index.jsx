
import React, { useState } from 'react'
import HomeContent from './HomeContent';
import {
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Nightlife from './photography/Nightlife'
import Portraits from './photography/Portraits';
import Cinematic from './photography/Cinematic';
import Sunshi from './design/Sunshi';
import TwoD from './design/2d';
import Metal from './design/Metal';
import Code from './Code';
import Calendar from './Calendar';
import { useEffect } from 'react';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [photographySubPage, setPhotographySubPage] = useState(0)
  const [designSubPage, setDesignSubPage] = useState(0)
  const id = useLocation();

  useEffect(()=>{
    const location = id.pathname.replace(new RegExp('\/', 'g'), '').slice(3,);
    if (['photography', 'nightlife', 'cinematic', 'portraits'].includes(location))
      setCurrentPage(1)
    else if (['code'].includes(location))
      setCurrentPage(2)
    else if (['design', 'sunshi', 'metal', '2d'].includes(location))
      setCurrentPage(3)

    if (['nightlife'].includes(location)) setPhotographySubPage(0)
    if (['cinematic'].includes(location)) setPhotographySubPage(1)
    if (['portraits'].includes(location)) setPhotographySubPage(2)

    if (['sunshi'].includes(location)) setDesignSubPage(0)
    if (['metal'].includes(location)) setDesignSubPage(1)
    if (['2d'].includes(location)) setDesignSubPage(2)
  }, [id])

  return (
      <div className='flex font-ia flex-col sm:flex-row h-max min-h-screen min-w-screen bg-black '>
        <div className='flex basis-[calc(1/14*100%)] bg-black'>.</div>
          <div className='basis-[calc(2/14*100%)] text-white text-center sm:text-left'>

            <div className='font-ia text-gray-500 px-10 sm:px-0 text-base sm:fixed'>

            <Link to="/web">
              <button onClick={()=>setCurrentPage(0)}>
                <img alt="elig_logo" className='w-20 mt-0 mb-4 sm:mb-0 sm:mt-14' src="/elig.jpeg" width={499} height={285} />
              </button>
            </Link>

            <Link to="/web/photography"><button className={`w-full text-left  mt-3 sm:mt-10 ${currentPage === 1 ? 'font-black text-white' : ''}`} onClick={()=>setPhotographySubPage(0)}>photography</button></Link>
              {currentPage === 1 ? (
                <>
                  <Link to="/web/nightlife"><button className={`w-full text-left  block ml-7 ${photographySubPage === 0 ? 'text-gray-200' : ''}`} onClick={()=>setPhotographySubPage(0)}>nightlife</button></Link>
                  <Link to="/web/cinematic"><button className={`w-full text-left  block ml-7 ${photographySubPage === 1 ? 'text-gray-200' : ''}`} onClick={()=>setPhotographySubPage(1)}>cinematic</button></Link>
                  <Link to="/web/portraits"><button className={`sm:mb-0 mb-2 w-full text-left  block ml-7 ${photographySubPage === 2 ? 'text-gray-200' : ''}`} onClick={()=>setPhotographySubPage(2)}>portraits</button></Link>
                </>
              ) : null}

              <Link to="/web/code"><button className={`w-full text-left  block ${currentPage === 2 ? 'font-black text-white' : ''}`} onClick={()=>setCurrentPage(2)}>code</button></Link>

              <Link to="/web/design"><button className={`w-full text-left  ${currentPage === 3 ? 'font-black text-white' : ''}`} onClick={()=>setDesignSubPage(0)}>design</button></Link>
              {currentPage === 3 ? (
                <>
                  <Link to="/web/sunshi"><button className={`w-full text-left  block ml-7 ${designSubPage === 0 ? 'text-gray-200' : ''}`} onClick={()=>setDesignSubPage(0)}>sunshi</button></Link>
                  <Link to="/web/metal"><button className={`w-full text-left  block ml-7 ${designSubPage === 1 ? 'text-gray-200' : ''}`} onClick={()=>setDesignSubPage(1)}>metal</button></Link>
                  <Link to="/web/2d"><button className={`w-full text-left  block ml-7 ${designSubPage === 2 ? 'text-gray-200' : ''}`} onClick={()=>setDesignSubPage(2)}>2d</button></Link>
                </>
              ) : null}

              <p className='hidden sm:block fixed bottom-10 ml-0 hover:text-white'>
                <a href="https://github.com/elia-orsini" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </p>
              <p className='hidden sm:block fixed bottom-10 ml-10 hover:text-white'>
                <a href="https://twitter.com/elig____" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </p>
              <p className='hidden sm:block fixed bottom-10 ml-20 hover:text-white'>
                <a href="mailto:elia.orsini@hotmail.com" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                </a>
              </p>
            </div>
          </div>

          <div className='flex basis-[calc(2/14*100%)] bg-black'>.</div>

          <div className='flex basis-[calc(10/14*100%)] bg-black text-white justify-center align-middle px-10 sm:px-0'>
              <Routes>
                <Route path="/" element={<HomeContent />} />

                <Route path="/photography" element={<Nightlife />} />
                <Route path="/nightlife" element={<Nightlife />} />
                <Route path="/cinematic" element={<Cinematic />} />
                <Route path="/portraits" element={<Portraits />} />

                <Route path="/code" element={<Code />} />

                <Route path="/design" element={<Sunshi />} />
                <Route path="/sunshi" element={<Sunshi />} />
                <Route path="/metal" element={<Metal />} />
                <Route path="/2d" element={<TwoD />} />

                <Route path="/calendar" element={<Calendar />} />
              </Routes>
          </div>
        <div className='flex mx-auto basis-[calc(1/14*100%)] text-gray-500 pt-14 pb-10 z-0'>
          <p className='block mx-6 sm:hidden hover:text-white'>
            <a href="https://github.com/elia-orsini" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </p>
          <p className='block mx-6 sm:hidden hover:text-white'>
            <a href="https://twitter.com/elig____" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
          </p>
          <p className='block mx-6 sm:hidden hover:text-white'>
            <a href="mailto:elia.orsini@hotmail.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            </a>
          </p>
        </div>

      </div>
  )
}

export default Home
