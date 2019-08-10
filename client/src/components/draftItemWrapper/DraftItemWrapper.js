import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

function DraftItemWrapper(props) {
  return (
    <Col sm={6} xs={6} md={3} lg={3} xl={3} style={{ marginBottom: '1rem' }}>
      <Card
        onClick={() => props.handleDraftPick(props.item)}
        style={props.selected ? { border: '1px solid green' } : null}
      >
        <Image src={props.item.imageUrl} fluid style={{ height: '200px' }} />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>
            {props.item.name}
          </Card.Title>
          <Card.Text style={{ display: 'inline' }}>
            {props.item.price}
          </Card.Text>
          <Card.Text style={{ display: 'inline', float: 'right' }}>
            {props.item.rating}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DraftItemWrapper;
