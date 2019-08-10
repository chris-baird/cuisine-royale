import React from 'react';
import DraftResultsContainer from '../components/draftResultsContainer/DraftResultsContainer';
import { Link } from 'react-router-dom';

function DraftPage(props) {
  return (
    <div>
      <h1>Draft Page</h1>
      <Link to="/">Landing Page</Link>
      <DraftResultsContainer apiData={props.apiData} />
    </div>
  );
}

export default DraftPage;
