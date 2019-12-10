import React, {useEffect} from 'react';
import './App.css';
 import ReactGA from 'react-ga';

import Main from './components/main/main';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-47727623-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[]);
  return (
       <div>
         <Main/>
       </div>
 

  );
}

export default App;
