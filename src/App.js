import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login/login";
import Homepage from "./component/homepage/home";
import ManagerPage from "./component/managerpage/managerpage";
import Treasurer from "./component/managerpage copy/managerpage";
import Profile from './component/profilepage/profile'
import ProfileAdmin from './component/profilepageAdmin/profile'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home-page" element={<Homepage />} />
          <Route path="/" element={<Login />} />
          <Route path="/manager-page" element={<ManagerPage />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profileAdmin" element={<ProfileAdmin/>} />
          <Route path="/Treasurer" element={<Treasurer/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
