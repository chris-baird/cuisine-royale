import React from 'react';
import { Link } from 'react-router-dom';
import SettingsForm from '../components/settingsForm/SettingsForm';

function SettingsPage(props) {
  return (
    <div>
      <h1>Settings Page</h1>
      <Link to="/">Landing Page</Link>
      <SettingsForm handleAddApiData={props.handleAddApiData} />
    </div>
  );
}

export default SettingsPage;
