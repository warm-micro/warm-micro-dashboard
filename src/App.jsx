import React from 'react';
import Home from './features/home/page/Home';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
