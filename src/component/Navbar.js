import React from "react";
import { NavLink } from "react-router-dom";
import hamburger from '.'

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
  return(
    <>
      <header>
        <nav>
          <div className="menu"></div>
          {/* <div className="menu menu2"></div>
          <div className="menu menu2"></div> */}
          <ul className="header-ul">
            {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact><span aria-hidden = "true">{link.num}</span>{link.text}</NavLink>
            </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
};
export default NavBar;