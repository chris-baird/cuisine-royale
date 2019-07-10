import React from 'react';
import './App.css';
import TestHome from './components/TestHome';
import SettingsPage from './components/SettingsPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Landing Page</Link>
          </li>
          <li>
            <Link to="/settings/">Settings</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={TestHome} />
      <Route path="/settings" component={SettingsPage} />
    </Router>
  );
}

export default App;
