import React from "react";
import NavBar from "../Navbar";
import '../desktop/css/technology.css'
import rocket from '../images/technology/image-launch-vehicle-portrait.jpg'
import rocketlandscape from '../images/technology/image-launch-vehicle-landscape.jpg'
import { Carousel } from "react-bootstrap";

function TechnologyCarousel() {
  return (
    <Carousel Fade>
      <Carousel.Item>
        
      </Carousel.Item>
    </Carousel>
  )
}

function DesktopTechnology() {
  return (
    <div className="technology">
      <NavBar />
      <div className="space-launch-container">
        <h3 className="space-launch"><span className="numbers">03</span>Space Launch 101</h3>
      </div>
      <div className="technology-flex">
        <technologyCarousel />
      </div>
    </div>
  )
};

export default DesktopTechnology;