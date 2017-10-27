import React, {Component}  from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import logo from '../Images/logo.svg';


import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header.jsx';
import CarouselStyled from './CarouselStyled.jsx';
// import { Parallax } from 'react-scroll-parallax';

import '../Css/styles.css';

import IndexBody1 from './IndexBody1.jsx';
import IndexBody2 from './IndexBody2.jsx';
import IndexBody3 from './IndexBody3.jsx';


import ParallaxImg1 from '../Images/CityPoly.jpg';
import BoltFront from '../Images/BoltFront4.png';
import Watleader from '../Images/WatLeaders.jpg';
import BoltChasis from '../Images/BoltChasis.jpeg';




class Index extends Component {

  render() {

    return (
      <div>
        <ParallaxProvider>
          <Header />
          <CarouselStyled />



        <IndexBody1/>
        <div className = "spacerBig">

        </div>

        <div style = {{height: "500px"}}>
          <Parallax bgImage={BoltChasis} strength={400} >
            <div style = {{height: "50px"}}> </div>
            <div style = {{ width: "100%", textAlign: "center"}}>
              <h1 className = "heading" style = {{color:"#FFF"}}>Electric Self Driving Vehicle
              </h1>
              <h2 style = {{color:"#FFF", textAlign:"center", fontSize: "18px"}}>Join us as we transform the Chevrolet Bolt into North America's finest autonomous vehicle
              </h2>
              <Button bsStyle="primary" >Apply Now</Button>
              <div style = {{height: "300px"}}> </div>
            </div>
          </Parallax>
        </div>
        <IndexBody2 />
        <IndexBody3 />
        </ParallaxProvider>
      </div>

    );

  }

}

export default Index;
