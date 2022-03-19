import React from "react";
import NavBar from "../Navbar";
import '../desktop/css/destination.css'
import moon from '../images/destination/image-moon.png'

function DesktopDestination() {
  return (
    <div className="destination">
    <NavBar />
      <div className="first-text">
        <h3>01 Pick your destination</h3>
      </div>
      <div className="destination-flex">
        <div className="moon-container">
          <img src={moon} alt="moon" className="moon" />
        </div>
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
      </div>
    </div>
  )
};

export default DesktopDestination;