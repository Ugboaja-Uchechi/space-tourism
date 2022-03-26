import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from './images/shared/icon-hamburger.svg'
import close from './images/shared/icon-close.svg'
const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'HOME',
      num: '00'
    },
    {
      id: 2,
      path: '/destination',
      text: 'DESTINATION',
      num: '01'
    },
    {
      id: 3,
      path: '/crew',
      text: 'CREW',
      num: '02'
    },
    {
      id: 4,
      path: '/technology',
      text: 'TECHNOLOGY',
      num: '03'
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false)
  const showNavBar = () => setNavbarOpen(!navbarOpen);
  return(
    <>
      <header>
        <nav>
          <div className="menu">
            <img src={menu} alt="hamburger menu" onClick={showNavBar} />
          </div>

          {/* <div className="menu menu2"></div>
          <div className="menu menu2"></div> */}
          <ul className={navbarOpen ? "header-ul active" : "header-ul"} onClick={showNavBar}>
          <div className="menu close">
            <img src={close} alt="close button" onClick={showNavBar} />
          </div>
            {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact><span aria-hidden = "true" className="navlink-span">{link.num}</span>{link.text}</NavLink>
            </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
};
export default NavBar;