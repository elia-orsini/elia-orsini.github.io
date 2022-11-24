import './App.css';
import Index from './index.jsx'
import {Helmet} from "react-helmet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Entrance from './Entrance';
import Nightlife from './photography/Nightlife';
import Cinematic from './photography/Cinematic';
import Portraits from './photography/Portraits';
import Code from './Code';
import Sunshi from './design/Sunshi';
import Metal from './design/Metal';
import TwoD from './design/2d';
import Calendar from './Calendar';

function App() {
  return (
    <div className="App bg-black w-screen h-screen">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Elia Orsini</title>
          <link rel="canonical" href="http://elia-orsini.com" />
          <meta name="description" content="Elia Orsini personal website 2022" />
        </Helmet>
        <Router>
          {/* <Index /> */}
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
              <Route path="2d" element={<TwoD />} />

              <Route path="calendar" element={<Calendar />} />
            </Route>
            <Route path="/" element={<Entrance />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;