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
      <div className="d-flex align-items-center justify-content-evenly mobile-flex">
        <div>
          <img src={rocketlandscape} alt="rocket launch" className="rocket-landscape" />
        </div>
        <div>
          <p className="terminology">The terminology...</p>
          <h2 className="launch-vehicle">Launch vehicle</h2>
          <p className="text">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
        </div>
        <Carousel.Caption>
        <div>
          {/* <img src={rocketlandscape} alt="rocket launch" className="rocket-landscape" /> */}
          <img src={rocket} alt="rocket launch" className="rocket" />
        </div>
        </Carousel.Caption>
      </div>
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
        <TechnologyCarousel />
      </div>
    </div>
  )
};

export default DesktopTechnology;