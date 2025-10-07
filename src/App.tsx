import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Backend from './components/general/Backend';
import Base from './components/general/Base';
import Equipe from './components/general/Equipe';
import Frontend from './components/general/Frontend';
import Home from './components/general/Home';
import JavaBase from './components/languages/java/JavaBase';
import JsBack from './components/languages/javascript/JsBack';
import JsBase from './components/languages/javascript/JsBase';
import JsFront from './components/languages/javascript/JsFront';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[calc(100vh-8rem)] container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/base" element={<Base />}>
              <Route path="javascript" element={<JsBase />} />
              <Route path="java" element={<JavaBase />} />
            </Route>
            <Route path="/backend" element={<Backend />}>
              <Route path="javascript-backend" element={<JsBack />} />
              <Route
                path="java-backend"
                element={<h1>Backend Java em desenvolvimento...</h1>}
              />
            </Route>
            <Route path="/frontend" element={<Frontend />}>
              <Route path="javascript-frontend" element={<JsFront />} />
              <Route
                path="java-frontend"
                element={<h1>Frontend Java em desenvolvimento...</h1>}
              />
            </Route>
            <Route path="/equipe" element={<Equipe />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
