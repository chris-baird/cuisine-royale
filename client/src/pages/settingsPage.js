import React from 'react';
import { Link } from 'react-router-dom';
import SettingsForm from '../components/settingsForm/SettingsForm';
function SettingsPage() {
  return (
    <div>
      <h1>Settings Page</h1>
      <Link to="/">Landing Page</Link>
      <SettingsForm />
    </div>
  );
}

export default SettingsPage;
