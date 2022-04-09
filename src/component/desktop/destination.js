import React from "react";
import NavBar from "../Navbar";
import '../desktop/css/destination.css'
import moon from '../images/destination/image-moon.png';
import mars from '../images/destination/image-mars.png';
import europa from '../images/destination/image-europa.png';
import titan from '../images/destination/image-titan.png';
import { Carousel } from "react-bootstrap";

function DestinationCarousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-evenly mobile-flex">
            <div className="moon-container">
              <img src={moon} alt="moon" className="moon" />
            </div>
            <Carousel.Caption>
              <div className="destination-width">
                <h1>Moon</h1>
                <p className="text">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className="line"></div>
                <div className="distance">
                  <div>
                    <p className="avg">Avg. distance </p>
                    <p className="km">384,400 km</p>
                  </div>
                  <div className="bottom">
                    <p className="avg time">Est. travel time</p>
                    <p className="km">3 days</p>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-evenly mobile-flex">
            <div className="moon-container">
              <img src={mars} alt="moon" className="moon" />
            </div>
            <Carousel.Caption>
            <div className="destination-width">
              <h1>Mars</h1>
              <p className="text">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
              the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
              <div className="line"></div>
              <div className="distance">
                <div>
                  <p className="avg">Avg. distance </p>
                  <p className="km">225 mil. km</p>
                </div>
                <div className="bottom">
                  <p className="avg time">Est. travel time</p>
                  <p className="km">9 months</p>
                </div>
              </div>
            </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-evenly mobile-flex">
            <div className="moon-container">
              <img src={europa} alt="moon" className="moon" />
            </div>
            <Carousel.Caption>
            <div className="destination-width">
              <h1>Europa</h1>
              <p className="text">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
              <div className="line"></div>
              <div className="distance">
                <div>
                  <p className="avg">Avg. distance </p>
                  <p className="km">628 mil. km</p>
                </div>
                <div className="bottom">
                  <p className="avg time">Est. travel time</p>
                  <p className="km">3 years</p>
                </div>
              </div>
            </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-evenly mobile-flex">
            <div className="moon-container">
              <img src={titan} alt="moon" className="moon" />
            </div>
            <Carousel.Caption>
            <div className="destination-width">
              <h1>Titan</h1>
              <p className="text">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
              <div className="line"></div>
              <div className="distance">
                <div>
                  <p className="avg">Avg. distance </p>
                  <p className="km">1.6 bil. km</p>
                </div>
                <div className="bottom">
                  <p className="avg time">Est. travel time</p>
                  <p className="km">7 years</p>
                </div>
              </div>
            </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
};

function DesktopDestination() {
  return (
    <div className="destination">
    <NavBar />
      <div className="first-text">
        <h3 className="first-text-h3"><span className="numbers">01</span> Pick your destination</h3>
      </div>
      <div>
        <DestinationCarousel />
      </div>
    </div>
  )
};

export default DesktopDestination;