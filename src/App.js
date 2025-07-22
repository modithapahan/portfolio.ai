import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import ProfileCard from "./components/ProfileCard";
import ResponsePage from "./components/ResponsePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/response" element={<ResponsePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
