
import React, { Suspense, useState } from 'react'
import HomeContent from './HomeContent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nightlife from './Nightlife'
import Portraits from './Portraits';
import Cinematic from './Cinematic';
import Sunshi from './Sunshi';
import TwoD from './2d';
import Metal from './Metal';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [photographySubPage, setPhotographySubPage] = useState(0)
  const [designSubPage, setDesignSubPage] = useState(0)

  return (
      <div className='flex flex-row h-max min-h-screen min-w-screen bg-black '>
        <div className='flex basis-[calc(1/14*100%)] bg-black'>.</div>
        <Router>
          <div className='basis-[calc(1/14*100%)] bg-black text-white'>
            <Link to="/">
              <button onClick={()=>setCurrentPage(0)}>
                <img className='w-100 mt-14' src="/elig.gif" width={499} height={285} />
              </button>
            </Link>

            <div className='text-left font-inter text-gray-500'>
              {currentPage == 1 ? (
                <>
                  <button className='mt-10 text-white' onClick={()=>setCurrentPage(1)}>photography</button>
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
                <Link to="/code"><button className='' onClick={()=>setCurrentPage(2)}>code</button></Link>
              )}

              <br />

              {currentPage == 3 ? (
                <>
                  <button className='text-white' onClick={()=>setCurrentPage(3)}>design</button>
                  {designSubPage == 0 ? (<span className='ml-7 text-white'>sunshi</span>) : (<Link to="/sunshi"><button className='ml-7' onClick={()=>setDesignSubPage(0)}>sunshi</button></Link>)}
                  <br />
                  {designSubPage == 1 ? (<span className='ml-7 text-white'>metal</span>) : (<Link to="/metal"><button className='ml-7' onClick={()=>setDesignSubPage(1)}>metal</button></Link>)}
                  <br />
                  {designSubPage == 2 ? (<span className='ml-7 text-white'>2d</span>) : (<Link to="/2d"><button className='ml-7' onClick={()=>setDesignSubPage(2)}>2d</button></Link>)}
                </>
              ) : (
                <Link to="/design"><button className='' onClick={()=>setCurrentPage(3)}>design</button></Link>
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

                <Route path="/design" element={<Sunshi />} />
                <Route path="/sunshi" element={<Sunshi />} />
                <Route path="/metal" element={<Metal />} />
                <Route path="/2d" element={<TwoD />} />
              </Routes>
          </div>
        </Router>
        <div className='flex basis-[calc(1/14*100%)] bg-black z-0'>.</div>
      </div>
  )
}

export default Home
