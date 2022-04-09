import React from "react";
import NavBar from "../Navbar";
import '../desktop/css/crew.css'
import douglas from  '../images/crew/image-douglas-hurley.png'
import mark from  '../images/crew/image-mark-shuttleworth.png'
import victor from  '../images/crew/image-victor-glover.png'
import ansari from  '../images/crew/image-anousheh-ansari.png'
import { Carousel } from 'react-bootstrap'

function CrewCarousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-evenly mobile-flex">
            <div className="mobile-photo">
              <img src={douglas} alt="Douglas Hurley" className="mobile" />
              <div className="crew-line"></div>
            </div>
            <div className="mobile-bottom">
              <h3 className="commander">Commander</h3>
              <h2 className="commander-name">Douglas Hurley</h2>
              <p className="about-commander">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <Carousel.Caption>
              <div>
                <img src={douglas} alt="Douglas Hurley" className="douglas" />
              </div>
            </Carousel.Caption>
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-evenly mobile-flex">
            <div className="mobile-photo">
              <img src={mark} alt="Mark Shuttleworth" className="mobile" />
              <div className="crew-line"></div>
            </div>
            <div className="mobile-bottom">
              <h3 className="commander">Mission Specialist</h3>
              <h2 className="commander-name">Mark Shuttleworth</h2>
              <p className="about-commander">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
            </div>
            <Carousel.Caption>
              <div>
                <img src={mark} alt="Mark Shuttleworth" className="douglas" />
              </div>
            </Carousel.Caption>
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-evenly mobile-flex">
            <div className="mobile-photo">
              <img src={victor} alt="Victor Glover" className="mobile" />
              <div className="crew-line"></div>
            </div>
            <div className="mobile-bottom">
              <h3 className="commander">Pilot</h3>
              <h2 className="commander-name">Victor Glover</h2>
              <p className="about-commander">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
            </div>
            <Carousel.Caption>
              <div>
                <img src={victor} alt="Victor Glover" className="douglas" />
              </div>
            </Carousel.Caption>
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-evenly mobile-flex">
            <div className="mobile-photo">
              <img src={ansari} alt="Anousheh Ansari" className="mobile" />
              <div className="crew-line"></div>
            </div>
            <div className="mobile-bottom">
              <h3 className="commander">Flight Engineer</h3>
              <h2 className="commander-name">Anousheh Ansari</h2>
              <p className="about-commander">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
            </div>
            <Carousel.Caption>
              <div>
                <img src={ansari} alt="Anousheh Ansari" className="douglas" />
              </div>
            </Carousel.Caption>
        </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

function DesktopCrew() {
  return (
    <div className="crew">
      <NavBar />
      <div className="pick-crew-container">
        <h3 className="pick-crew"><span className="numbers">02</span> Meet your Crew</h3>
      </div>
      <div>
        <CrewCarousel />
      </div>
    </div>
  )
};

export default DesktopCrew;
