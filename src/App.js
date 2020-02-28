import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';
import Navigation from './components/Navigation'
import ArticlesList from './components/ArticlesList'
import AdminPanel from './components/AdminPanel'

function App() {

  return (
    <Router>
      <Navigation />
      <div className="container">
        <Switch >
          <Route path="/" exact component={ArticlesList} />
          <Route path="/admin" component={AdminPanel} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
