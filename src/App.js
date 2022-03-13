import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DesktopHome from './component/desktop';
import DesktopDestination from './component/desktop/destination';
import DesktopCrew from './component/desktop/crewcommander';
import DesktopTechnology from './component/desktop/technologyvehicle';

function App() {
  return(
    <>
      <Routes>
        <Route exact path='/' element={<DesktopHome />} />
        <Route exact path='/destination' element={<DesktopDestination />} />
        <Route exact path='/crew' element={<DesktopCrew />} />
        <Route exact path='/technology' element={<DesktopTechnology />} />
      </Routes>
    </>
  )
}

export default App;
