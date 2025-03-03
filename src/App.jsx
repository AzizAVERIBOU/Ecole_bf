import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Formation from "./pages/Formation";
import Admission from "./pages/Admission";
import Actualite from "./pages/Actualite";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import _404 from "./pages/_404";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<_404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
