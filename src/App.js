import './App.css';
import React, { Fragment,useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Home from './Component/Home.js';
import Hnav from './Component/Hnav.js';
import Carsoul from './Component/Carsoul.js';
import Cards from './Component/Cards.js';
import Timer from './Component/Timer.js';
import Swip from './Component/Swip';
import Feature from './Component/Feature';
import Footer from './Component/Footer.js';

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
  <div>
    {
    loading ? 
    <ClimbingBoxLoader
    className='load'
        color={'#f77c0b'}
        loading={loading}
        size={30}
      />
     :
    <Fragment>
      
         <Home/>
         <Hnav/>
         <Carsoul/>
         <Cards/>
         <Timer/>
         <Swip/>
         <div className='fetr' style={{color:"black", fontWeight:"bold", fontSize:"50px"}}>Featured <span style={{color:"#fd6535",fontWeight:"bold"}}>products</span></div>
        <Feature/>
         <Footer/>
         
         
      </Fragment>
      }
      </div>
     

  );
}

export default App;
