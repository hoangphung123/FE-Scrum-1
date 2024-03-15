import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login/login';
import Homepage from './component/homepage/home';
import Profile from './component/profilepage/profile'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home-page" element={<Homepage />} />
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
