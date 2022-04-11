import React from "react";
import NavBar from "../Navbar";
import '../desktop/css/technology.css'
import rocket from '../images/technology/image-launch-vehicle-portrait.jpg'
import spacecapsule from '../images/technology/image-space-capsule-portrait.jpg'
import spaceport from '../images/technology/image-spaceport-portrait.jpg'
import rocketlandscape from '../images/technology/image-launch-vehicle-landscape.jpg'
import spacecapsulelandscape from '../images/technology/image-space-capsule-landscape.jpg'
import spaceportlandscape from '../images/technology/image-spaceport-landscape.jpg'
import { Carousel } from "react-bootstrap";

function TechnologyCarousel() {
  return (
    <Carousel fade>
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
      <Carousel.Item>
      <div className="d-flex align-items-center justify-content-evenly mobile-flex">
        <div>
          <img src={spaceportlandscape} alt="rocket launch" className="rocket-landscape" />
        </div>
        <div>
          <p className="terminology">The terminology...</p>
          <h2 className="launch-vehicle">Spaceport</h2>
          <p className="text">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
        </div>
        <Carousel.Caption>
        <div>
          {/* <img src={rocketlandscape} alt="rocket launch" className="rocket-landscape" /> */}
          <img src={spaceport} alt="rocket launch" className="rocket" />
        </div>
        </Carousel.Caption>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex align-items-center justify-content-evenly mobile-flex">
        <div>
          <img src={spacecapsulelandscape} alt="rocket launch" className="rocket-landscape" />
        </div>
        <div>
          <p className="terminology">The terminology...</p>
          <h2 className="launch-vehicle">Space capsule</h2>
          <p className="text">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
        </div>
        <Carousel.Caption>
        <div>
          {/* <img src={rocketlandscape} alt="rocket launch" className="rocket-landscape" /> */}
          <img src={spacecapsule} alt="rocket launch" className="rocket" />
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
      <div>
        <TechnologyCarousel />
      </div>
    </div>
  )
};

export default DesktopTechnology;