import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: '00 HOME'
    },
    {
      id: 2,
      path: '/destination',
      text: '01 DESTINATION'
    },
    {
      id: 3,
      path: '/crew',
      text: '02 CREW'
    },
    {
      id: 4,
      path: '/technology',
      text: '03 TECHNOLOGY'
    },
  ];
  return(
    <>
      <header>
        <nav>
          <ul>
            {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact>{link.text}</NavLink>
            </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
};
export default NavBar;