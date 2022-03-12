import React from 'react';
import NavBar from '../Navbar';
import '../desktop/css/desktop.css';

function DesktopHome() {
return (
  <div className='background'>
        <NavBar />
    <main className='home-flex'>
      <div className='bg-body'>
        <div>
          <p className='travel'>So, you want to travel to</p>
          <p className='space'>Space </p>
          <p className='home-text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='explore-flex'>
          <h4 className='explore'>Explore</h4>
        </div>
      </div>
    </main>
  </div>
)
}

export default DesktopHome;