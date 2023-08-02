import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchHome from "./components/SearchPage/SearchHome";
import DisplayTrainResults from "./components/DisplayTrains/DisplayTrainResults";
import CardComponent from "./components/SearchPage/CardComponent";
import AdminDashboard from "./components/AdminPages/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SearchHome />} />
          <Route path="/cardcomponent" element={<CardComponent />} />
          <Route path="/displaytrains" element={<DisplayTrainResults />} />

          <Route path="/admindashboard" element={AdminDashboard} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;