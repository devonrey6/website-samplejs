import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Pages/Home";
import Spots from "./components/Pages/Spots";
import Culture from "./components/Pages/Culture";
import About from "./components/Pages/About";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spots" element={<Spots />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
