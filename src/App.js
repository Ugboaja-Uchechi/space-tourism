import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/Navbar';
import DesktopHome from './component/desktop';
import DesktopDestination from './component/desktop/destination';
import DesktopCrew from './component/desktop/crewcommander';

function App() {
  return(
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<DesktopHome />} />
        <Route exact path='/destination' element={<DesktopDestination />} />
        <Route exact path='/crew' element={<DesktopCrew />} />
      </Routes>
    </>
  )
}

export default App;
