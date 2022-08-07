import logo from './logo.svg';
import './App.css';
import Index from './Index.jsx'
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App bg-black w-screen h-screen">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Elia Orsini</title>
            <link rel="canonical" href="http://elia-orsini.com" />
            <meta name="description" content="Elia Orsini personal website 2022" />
          </Helmet>
        <Index />
    </div>
  );
}

export default App;