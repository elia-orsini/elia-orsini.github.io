
import React, { useState } from 'react'
import HomeContent from './HomeContent';
import {
  BrowserRouter as Router,
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
import { useEffect } from 'react';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [photographySubPage, setPhotographySubPage] = useState(0)
  const [designSubPage, setDesignSubPage] = useState(0)
  const id = useLocation();

  useEffect(()=>{
    const location = id.pathname.replace(new RegExp('\/', 'g'), '');
    if (['photography', 'nightlife', 'cinematic', 'portraits'].includes(location))
      setCurrentPage(1)
    else if (['code'].includes(location))
      setCurrentPage(2)
    else if (['design', 'sunshi', 'metal', '2d'].includes(location))
      setCurrentPage(3)
  })

  return (
      <div className='flex flex-row h-max min-h-screen min-w-screen bg-black '>
        <div className='flex basis-[calc(1/14*100%)] bg-black'>.</div>
          <div className='basis-[calc(1/14*100%)] bg-black text-white'>
            <Link to="/">
              <button onClick={()=>setCurrentPage(0)}>
                <img className='w-100 mt-14' src="/elig.gif" width={499} height={285} />
              </button>
            </Link>

            <div className='text-left font-inter text-gray-500'>
              {currentPage == 1 ? (
                <>
                  <button className='mt-10 text-white'>photography</button>
                  {photographySubPage == 0 ? (<span className='ml-7 text-white'>nightlife</span>) : (<Link to="/nightlife"><button className='ml-7' onClick={()=>setPhotographySubPage(0)}>nightlife</button></Link>)}
                  <br />
                  {photographySubPage == 1 ? (<span className='ml-7 text-white'>cinematic</span>) : (<Link to="/cinematic"><button className='ml-7' onClick={()=>setPhotographySubPage(1)}>cinematic</button></Link>)}
                  <br />
                  {photographySubPage == 2 ? (<span className='ml-7 text-white'>portraits</span>) : (<Link to="/portraits"><button className='ml-7' onClick={()=>setPhotographySubPage(2)}>portraits</button></Link>)}
                </>
              ) : (
                <Link to="/photography"><button className='mt-10' onClick={()=>setCurrentPage(1)}>photography</button></Link>
              )}

              <br />

              {currentPage == 2 ? (
                <Link to="/code"><button className='text-white' onClick={()=>setCurrentPage(2)}>code</button></Link>
              ) : (
                <Link to="/code">code</Link>
              )}

              <br />

              {currentPage == 3 ? (
                <>
                  <button className='text-white'>design</button>
                  {designSubPage == 0 ? (<span className='ml-7 text-white'>sunshi</span>) : (<Link to="/sunshi"><button className='ml-7' onClick={()=>setDesignSubPage(0)}>sunshi</button></Link>)}
                  <br />
                  {designSubPage == 1 ? (<span className='ml-7 text-white'>metal</span>) : (<Link to="/metal"><button className='ml-7' onClick={()=>setDesignSubPage(1)}>metal</button></Link>)}
                  <br />
                  {designSubPage == 2 ? (<span className='ml-7 text-white'>2d</span>) : (<Link to="/2d"><button className='ml-7' onClick={()=>setDesignSubPage(2)}>2d</button></Link>)}
                </>
              ) : (
                <Link to="/design">design</Link>
              )}
            </div>
          </div>

          <div className='flex basis-[calc(2/14*100%)] bg-black'>.</div>

          <div className='flex basis-[calc(10/14*100%)] bg-black text-white justify-center align-middle'>
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
              </Routes>
          </div>
        <div className='flex basis-[calc(1/14*100%)] bg-black z-0'>.</div>
      </div>
  )
}

export default Home
