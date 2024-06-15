import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Route

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
      <Routes> {/* Use Routes component */}
        <Route exact path="/" element={<HomePage />} /> {/* Use element prop */}
        <Route path="/prisoners" element={<PrisonersPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/others" element={<OthersPage />} />
        <Route path="/suggest-new-laws" element={<SuggestNewLawsPage />} />
        <Route path="/lawyers" element={<LawyersPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 Not Found */}
      </Routes>
    </Router>
  );
}

export default App;
