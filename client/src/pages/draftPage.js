import React from 'react';
import DraftResultsContainer from '../components/draftResultsContainer/DraftResultsContainer';

function DraftPage(props) {
  return (
    <div id="top">
      <DraftResultsContainer apiData={props.apiData} />
    </div>
  );
}

export default DraftPage;
