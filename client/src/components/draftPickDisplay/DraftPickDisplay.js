import React from 'react';
import {
  Badge,
  Button,
  Dropdown,
  DropdownButton,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';

function DraftPickDiplay(props) {
  return (
    <div className="sticky-top" style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
      <p style={{ color: 'yellow' }}>
        Picks Remaining: <span>{props.count}</span>
      </p>

      <Button variant="danger" onClick={props.resetDraft}>
        Reset Picks
      </Button>
      <Button variant="success">Lock In Picks</Button>
      <a href="#top">
        <Button variant="light">Back To Top</Button>
      </a>
      <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
        {props.drafts.map(item => (
          <OverlayTrigger
            key={item.id}
            placement={'bottom'}
            overlay={
              <Tooltip id={`tooltip-${'bottom'}`}>Click To Remove</Tooltip>
            }
          >
            <Badge
              pill
              variant="info"
              key={item.id}
              onClick={() => props.handleDraftPick(item)}
              style={{ cursor: 'pointer' }}
            >
              {item.name}
            </Badge>
          </OverlayTrigger>
        ))}
      </div>
      <DropdownButton
        id="dropdown-basic-button"
        className="d-block d-sm-block d-md-none d-lg-none d-lx-none"
        title={`View Picks: ${props.drafts.length}`}
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
