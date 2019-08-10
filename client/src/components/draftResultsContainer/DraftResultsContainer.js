import React from 'react';
import DraftResultsWrapper from '../draftItemWrapper/DraftItemWrapper';
import { Row } from 'react-bootstrap';

function DraftResultsContainer(props) {
  return (
    <Row>
      {props.apiData.map(item => (
        <DraftResultsWrapper item={item} key={item.id} />
      ))}
    </Row>
  );
}

export default DraftResultsContainer;
