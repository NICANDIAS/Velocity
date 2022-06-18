import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import About from "./components/pages/About";
import Portal from "./components/pages/Portal";
import Index from "./components/pages/Index";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <provider>
      <BrowserRouter>
        <div className="App">
          <Header branding="Velocity Promotions LLC" />
        </div>
        <div className="container">
          <Routes>
            <Route exact path="/Index" element={<Index />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Portal" element={<Portal />} />
          </Routes>
        </div>
      </BrowserRouter>
    </provider>
  );
}

export default App;
