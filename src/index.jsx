// import Head from 'next/head'
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, MeshReflectorMaterial, Environment } from '@react-three/drei'
import Photography from './Photography';
import Code from './Code';
import Design from './Design';
import HomeContent from './HomeContent';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [photographySubPage, setPhotographySubPage] = useState(0)
  const [designSubPage, setDesignSubPage] = useState(0)

  function renderPage() {
    switch(currentPage) {
      case 0:
        return <HomeContent />
      case 1:
        return <Photography photosIndex={photographySubPage} />
      case 2:
        return <Code />
      case 3:
        return <Design designIndex={designSubPage} />
    }
  }

  return (
      <div className='flex flex-row h-screen min-h-screen min-w-screen bg-black '>

        <div className='flex basis-[calc(1/14*100%)] bg-black'>.</div>

        <div className='basis-[calc(1/14*100%)] bg-black text-white'>
          <button onClick={()=>setCurrentPage(0)}>
            <img className='w-100 mt-14' src="/elig.gif" width={499} height={285} />
          </button>

          <div className='text-left font-inter text-gray-500'>
            {currentPage == 1 ? (
              <>
                <button className='mt-10 text-white' onClick={()=>setCurrentPage(1)}>photography</button>
                {photographySubPage == 0 ? (<span className='ml-7 text-white'>nightlife</span>) : (<button className='ml-7' onClick={()=>setPhotographySubPage(0)}>nightlife</button>)}
                <br />
                {photographySubPage == 1 ? (<span className='ml-7 text-white'>cinematic</span>) : (<button className='ml-7' onClick={()=>setPhotographySubPage(1)}>cinematic</button>)}
                <br />
                {photographySubPage == 2 ? (<span className='ml-7 text-white'>portraits</span>) : (<button className='ml-7' onClick={()=>setPhotographySubPage(2)}>portraits</button>)}
              </>
            ) : (
              <button className='mt-10' onClick={()=>setCurrentPage(1)}>photography</button>
            )}

            <br />

            {currentPage == 2 ? (
              <button className='text-white' onClick={()=>setCurrentPage(2)}>code</button>
            ) : (
              <button className='' onClick={()=>setCurrentPage(2)}>code</button>
            )}

            <br />

            {currentPage == 3 ? (
              <>
                <button className='text-white' onClick={()=>setCurrentPage(3)}>design</button>
                {designSubPage == 0 ? (<span className='ml-7 text-white'>sunshi</span>) : (<button className='ml-7' onClick={()=>setDesignSubPage(0)}>sunshi</button>)}
                <br />
                {designSubPage == 1 ? (<span className='ml-7 text-white'>metal</span>) : (<button className='ml-7' onClick={()=>setDesignSubPage(1)}>metal</button>)}
                <br />
                {designSubPage == 2 ? (<span className='ml-7 text-white'>2d</span>) : (<button className='ml-7' onClick={()=>setDesignSubPage(2)}>2d</button>)}
              </>
            ) : (
              <button className='' onClick={()=>setCurrentPage(3)}>design</button>
            )}
          </div>
        </div>

        <div className='flex basis-[calc(2/14*100%)] bg-black'>.</div>

        <div className='flex basis-[calc(10/14*100%)] bg-black text-white justify-center align-middle'>
          {renderPage()}
        </div>
    
        <div className='flex basis-[calc(1/14*100%)] bg-black z-0'>.</div>
      </div>
  )
}

export default Home
