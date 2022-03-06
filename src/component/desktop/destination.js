import React from "react";
import NavBar from "../Navbar";
import './destination.css';
import moon from '../images/destination/image-moon.png'

function DesktopDestination() {
  return (
    <div className="destination">
    <NavBar />
      <div className="destination-flex">
        <div>
          <h3>01 Pick your destination</h3>
          <img src={moon} alt="moon" className="moon" />
        </div>
        <div className="destination-width">
          <h1>Moon</h1>
          <p>  See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <div></div>
          <div>
            <div>
              <p>Avg. distance 384,400 km</p>
            </div>
            <div>
              <p>  Est. travel time 3 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DesktopDestination;