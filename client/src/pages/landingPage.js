import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/settings/">Settings Page</Link>
    </div>
  );
}

export default LandingPage;
