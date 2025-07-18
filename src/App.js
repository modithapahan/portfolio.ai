import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
