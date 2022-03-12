import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, inMemoryCache, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Login from './pages/Login';
import Player from './pages/Player';
import TestRoom from './pages/TestRoom';

import NoMatch from './pages/NoMatch';
import { QUERY_PLAYER } from '../utils/queries';

const httpLink = createHttpLink({
  uri: '/graphql'
});

// add authLink / token retrieval (NOT NEEDED TO PLAY GAME)
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Player" component={Player} />
          <Route exact path="/TestRoom" component={TestRoom} />

          <Route component={NoMatch} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
