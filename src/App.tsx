import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './components/general/Base';
import Home from './components/general/Home';
import JavaBase from './components/languages/java/JavaBase';
import JsBase from './components/languages/javascript/JsBase';
import JsFront from './components/languages/javascript/JsFront';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import Frontend from './components/general/Frontend';

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
            <Route path="/frontend" element={<Frontend />}>
              <Route path='javascript-front' element={<JsFront />} />
              <Route path='java-front' element={<JsFront />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
