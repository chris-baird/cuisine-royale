import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

function DraftItemWrapper(props) {
  return (
    <Col sm={12} xs={12} md={3} lg={3} xl={3}>
      <Card>
        <Image
          src={props.item.imageUrl}
          fluid
          style={{ 'max-height': '200px' }}
        />
        {/* <Card.Img variant="top" src={props.item.imageUrl} fluid /> */}
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          {/* <Card.Text>Address: {props.item.location.address1}</Card.Text> */}
          {/* <Card.Text>Phone: {props.item.phone}</Card.Text> */}
          <Card.Text>Price: {props.item.price}</Card.Text>
          <Card.Text>Rating: {props.item.rating}</Card.Text>
          {/* <a href={props.item.url} target="_blank">
            Yelp
          </a> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DraftItemWrapper;
