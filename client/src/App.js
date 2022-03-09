import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Footer />
    </Router>
    
  );
}

export default App;
