import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WhatIsTTB from './pages/WhatIsTTB';
import Methodology from './pages/Methodology';
import Applications from './pages/Applications';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-is-ttb" element={<WhatIsTTB />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;