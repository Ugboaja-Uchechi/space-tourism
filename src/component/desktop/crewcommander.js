import React from "react";
import NavBar from "../Navbar";
import '../desktop/css/crew.css'
import douglas from  '../images/crew/image-douglas-hurley.png'

function DesktopCrew() {
  return (
    <div className="crew">
      <NavBar />
      <div>
        <h3>02 Pick your Crew</h3>
      </div>
      <div className="crew-flex">
        <div>
          <h3 className="commander">Commander</h3>
          <h2 className="commander-name">Douglas Hurley</h2>
          <p className="about-commander">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>
        <div>
          <img src={douglas} alt="moon" className="douglas" />
        </div>
      </div>
    </div>
  )
};

export default DesktopCrew;