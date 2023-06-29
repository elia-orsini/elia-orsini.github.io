import React, { useState } from "react";
import HomeContent from "./HomeContent";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Nightlife from "./photography/Nightlife";
import Portraits from "./photography/Portraits";
import Cinematic from "./photography/Cinematic";
import Sunshi from "./design/Sunshi";
import TwoD from "./design/2d";
import Metal from "./design/Metal";
import Aliens from "./design/Aliens";
import Code from "./Code";
import Calendar from "./Calendar";
import { useEffect } from "react";
import Playground from "./Playground";
import { Navigation } from "./components/Navigation";
import { FooterMobile } from "./components/FooterMobile";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [photographySubPage, setPhotographySubPage] = useState(0);
  const [designSubPage, setDesignSubPage] = useState(0);
  const id = useLocation();

  useEffect(() => {
    const location = id.pathname.replace(new RegExp("/", "g"), "").slice(3);
    if (
      ["photography", "nightlife", "cinematic", "portraits"].includes(location)
    )
      setCurrentPage(1);
    else if (["code"].includes(location)) setCurrentPage(2);
    else if (["design", "sunshi", "metal", "2d"].includes(location))
      setCurrentPage(3);
    else if (["playground"].includes(location)) setCurrentPage(4);

    if (["nightlife"].includes(location)) setPhotographySubPage(0);
    if (["cinematic"].includes(location)) setPhotographySubPage(1);
    if (["portraits"].includes(location)) setPhotographySubPage(2);

    if (["sunshi"].includes(location)) setDesignSubPage(0);
    if (["metal"].includes(location)) setDesignSubPage(1);
    if (["2d"].includes(location)) setDesignSubPage(2);
  }, [id]);

  return (
    <div className="flex font-ia flex-col sm:flex-row h-max min-h-screen min-w-screen bg-black ">
      <div className="flex basis-[calc(1/14*100%)] bg-black">.</div>

      <Navigation
        currentPage={currentPage}
        designSubPage={designSubPage}
        photographySubPage={photographySubPage}
        setCurrentPage={setCurrentPage}
        setDesignSubPage={setDesignSubPage}
        setPhotographySubPage={setPhotographySubPage}
      />

      <div className="flex basis-[calc(2/14*100%)] bg-black">.</div>

      <div className="flex basis-[calc(10/14*100%)] bg-black text-white justify-center align-middle px-10 sm:px-0">
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
          <Route path="/aliens" element={<Aliens />} />
          <Route path="/2d" element={<TwoD />} />

          <Route path="/playground" element={<Playground />} />

          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>

      {!(currentPage === 4) && <FooterMobile />}
    </div>
  );
};

export default Home;
