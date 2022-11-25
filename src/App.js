import React from 'react';
import Menu from './Components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import './app.scss';
import Architecture from './Pages/ArchitecturePage/Architecture';
import Graphics from './Pages/GraphicsPage/Graphics';
import Web from './Pages/Webpage/Web';
import About from './Pages/AboutUs/About';
import Strategies from './Pages/Strategies/Strategies';

function App() {
  return (
    <>
      <Menu />
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="web" element={<Web />} />
          <Route path="graphics" element={<Graphics />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="about" element={<About />} />
          <Route path="strategies" element={<Strategies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
