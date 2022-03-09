import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import Player from './pages/Player';
import Cave from './pages/Cave';
import Forest from './pages/Forest';

import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Player" component={Player} />
        <Route exact path="/Cave" component={Cave} />
        <Route exact path="/Forest" component={Forest} />

        <Route component={NoMatch} />
      </Switch>
    </Router>
    
  );
}

export default App;
