import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchBar} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
