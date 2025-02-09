import "./index.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Contact } from "./components/pages/Contact";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
