import React from 'react';
import App from './components/App';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

let defaultRouter = () => (
  <Router>
    <div className="router">
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={App} />
    </div>
  </Router>
);

export default defaultRouter;
