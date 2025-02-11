import "./index.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Lures } from "./components/pages/Lures";
import { Design } from "./components/pages/Design";
import { Culture } from "./components/pages/Culture";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Lures" element={<Lures />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/Culture" element={<Culture />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
