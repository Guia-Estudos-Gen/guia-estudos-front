import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fullstack" element={<h1>full</h1>} />
          <Route path="/backend" element={<h1>back</h1>} />
          <Route path="/frontend" element={<h1>front</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
