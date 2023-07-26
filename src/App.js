import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from "./Pages/Settings";

function App() {
  return (
    <Router>
      <Settings/>
    </Router>
  );
}

export default App;
