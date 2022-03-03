import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/Navbar';
import DesktopHome from './component/desktop';
import DesktopDestination from './component/desktop/destination';

function App() {
  return(
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<DesktopHome />} />
        <Route exact path='/destination' element={<DesktopDestination />} />
      </Routes>
    </>
  )
}

export default App;
