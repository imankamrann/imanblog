import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Welcome, Brand } from './components';
import { About, Header, Footer, Photos } from './containers';
import './App.css';
// import PhotosPage from './Photos';


const App = () => {
    return (
      <div className='App'>
          <div className='gradient__bg'>
              <Navbar />
              <Header />
              <Welcome/>
          </div>
          <About />
        
          <Footer />
          </div>
 
  );
    
}

export default App