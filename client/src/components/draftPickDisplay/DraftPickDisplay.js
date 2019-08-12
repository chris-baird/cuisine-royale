import React from 'react';
import {
  Badge,
  Button,
  Col,
  Dropdown,
  DropdownButton,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';

import styles from './draftPickDisplay.module.css';

function DraftPickDiplay(props) {
  return (
    <div
      className="sticky-top row"
      style={{ backgroundColor: 'rgba(0,0,0,.5)', borderRadius: '25px' }}
    >
      <Col sm={12}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Picks Remaining</h2>
        <h3 style={{ color: 'white', textAlign: 'center' }}>{props.count}</h3>
      </Col>
      <Col>
        <DropdownButton
          style={{ margin: '.5em auto' }}
          id={styles.dropdown}
          className="test-class d-block d-sm-block d-md-block d-lg-block d-lx-block"
          title={'View Picks'}
        >
          {props.drafts.map(item => (
            <Dropdown.Item href="#/action-1" key={item.id}>
              {item.name}
              <span>X</span>
              {/* <Button
                style={{ float: 'right' }}
                variant="danger"
                onClick={() => props.handleDraftPick(item)}
              >
                X
              </Button> */}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Col>
      <Col>
        <Button
          variant="danger"
          onClick={props.resetDraft}
          style={{ margin: '.5em auto', display: 'block' }}
        >
          Reset
        </Button>
      </Col>
      <Col>
        <Button
          variant="success"
          style={{ margin: '.5em auto', display: 'block' }}
        >
          Lock In
        </Button>
      </Col>
    </div>
  );
}

export default DraftPickDiplay;
