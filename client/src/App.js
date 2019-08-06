import React from 'react';
import LandingPage from './pages/landingPage';
import SettingsPage from './pages/settingsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/settings/" component={SettingsPage} />
    </Router>
  );
}

export default App;
