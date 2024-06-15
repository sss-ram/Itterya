// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PrisonersPage from './PrisonersPage';
import CaseStudyPage from './CaseStudyPage';
import OthersPage from './OthersPage';
import SuggestNewLawsPage from './SuggestNewLawsPage';
import LawyersPage from './LawyersPage';
import NotFoundPage from './NotFoundPage'; // Import the NotFoundPage component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/prisoners" component={PrisonersPage} />
        <Route path="/case-study" component={CaseStudyPage} />
        <Route path="/others" component={OthersPage} />
        <Route path="/suggest-new-laws" component={SuggestNewLawsPage} />
        <Route path="/lawyers" component={LawyersPage} />
        <Route component={NotFoundPage} /> {/* Catch-all route for 404 Not Found */}
      </Switch>
    </Router>
  );
}

export default App;
