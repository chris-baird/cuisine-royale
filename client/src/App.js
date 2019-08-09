import React from 'react';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/landingPage';
import SettingsPage from './pages/settingsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/settings/" component={SettingsPage} />
      </Router>
    </Container>
  );
}

export default App;
