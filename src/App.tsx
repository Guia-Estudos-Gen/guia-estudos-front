import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/general/Home';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import Base from './components/general/Base';
import JsBase from './components/languages/javascript/JsBase';
import JavaBase from './components/languages/java/JavaBase';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[calc(100vh-8rem)] container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/base' element={<Base />}>
              <Route path='javascript' element={<JsBase />} />
              <Route path='java' element={<JavaBase />} />
            </Route>
            <Route path="/fullstack" element={<h1>full</h1>} />
            <Route path="/backend" element={<h1>back</h1>} />
            <Route path="/frontend" element={<h1>front</h1>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
