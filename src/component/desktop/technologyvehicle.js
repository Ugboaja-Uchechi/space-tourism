import React from "react";
import NavBar from "../Navbar";
import '../desktop/css/technology.css'
import rocket from '../images/technology/image-launch-vehicle-portrait.jpg'

function DesktopTechnology() {
  return (
    <div className="technology">
      <NavBar />
      <h3>03 Pick your Technology</h3>
      <div className="technology-flex">
        <div>
          <p className="terminology">The terminology...</p>
          <h2 className="launch-vehicle">Launch vehicle</h2>
          <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
        </div>
        <div>
        <img src={rocket} alt="rocket launch" className="rocket" />
        </div>
      </div>
    </div>
  )
};

export default DesktopTechnology;