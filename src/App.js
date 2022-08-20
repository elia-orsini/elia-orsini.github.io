import './App.css';
import Index from './index.jsx'
import {Helmet} from "react-helmet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
          <Index />
        </Router>
    </div>
  );
}

export default App;