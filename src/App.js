import "./App.css";
import Index from "./index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrance from "./Entrance";
import Nightlife from "./photography/Nightlife";
import Cinematic from "./photography/Cinematic";
import Portraits from "./photography/Portraits";
import Code from "./Code";
import Sunshi from "./design/Sunshi";
import Metal from "./design/Metal";
import TwoD from "./design/2d";
import Calendar from "./Calendar";
import Aliens from "./design/Aliens";

function App() {
  return (
    <div className="App bg-black w-screen h-screen">
      <Router>
        <Routes>
          <Route path="/web" element={<Index />}>
            <Route path="photography" element={<Nightlife />} />
            <Route path="nightlife" element={<Nightlife />} />
            <Route path="cinematic" element={<Cinematic />} />
            <Route path="portraits" element={<Portraits />} />

            <Route path="code" element={<Code />} />

            <Route path="design" element={<Sunshi />} />
            <Route path="sunshi" element={<Sunshi />} />
            <Route path="metal" element={<Metal />} />
            <Route path="aliens" element={<Aliens />} />
            <Route path="2d" element={<TwoD />} />

            <Route path="playground" />

            <Route path="calendar" element={<Calendar />} />
          </Route>
          <Route path="/" element={<Entrance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
