import React from 'react';
import { Badge, Button, Dropdown, DropdownButton } from 'react-bootstrap';

function DraftPickDiplay(props) {
  return (
    <div>
      <p>
        Picks: <span>{props.count}</span>
      </p>

      <Button variant="danger" onClick={props.resetDraft}>
        Reset Picks
      </Button>
      <Button variant="success">Lock In Picks</Button>
      <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
        {props.drafts.map(item => (
          <Badge pill variant="info" key={item.id}>
            {item.name}
          </Badge>
        ))}
      </div>
      <DropdownButton
        id="dropdown-basic-button"
        className="d-block d-sm-block d-md-none d-lg-none d-lx-none"
        title={`View Picks: ${props.count}`}
      >
        {props.drafts.map(item => (
          <Dropdown.Item href="#/action-1" key={item.id}>
            {item.name}
            <Button
              style={{ float: 'right' }}
              variant="danger"
              onClick={() => props.handleDraftPick(item)}
            >
              X
            </Button>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default DraftPickDiplay;
