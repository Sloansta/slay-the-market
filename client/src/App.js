import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Cave from './pages/Cave';

function App() {
  return (
    <Router>
      <Nav />

      <Footer />
    </Router>
    
  );
}

export default App;
