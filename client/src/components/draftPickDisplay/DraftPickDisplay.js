import React from 'react';
import { Button } from 'react-bootstrap';

function DraftPickDiplay(props) {
  return (
    <div>
      <p>
        Picks: <span>{props.count}</span>
      </p>
      <Button variant="danger" onClick={props.resetDraft}>
        Reset Picks
      </Button>
      <Button variant="success" onClick={props.resetDraft}>
        Lock In Picks
      </Button>
    </div>
  );
}

export default DraftPickDiplay;
