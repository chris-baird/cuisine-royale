import React from 'react';
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import Slider from 'react-input-slider';
import axios from 'axios';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 1,
      cuisine: '',
      location: '',
      longitude: '',
      latitude: ''
    };
    this.handleGetLocation = this.handleGetLocation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRandomCuisine = this.handleRandomCuisine.bind(this);
    this.handleConvertRadius = this.handleConvertRadius.bind(this);
  }

  handleGetLocation() {
    navigator.geolocation.getCurrentPosition(position =>
      this.setState({
        location: `${position.coords.longitude},${position.coords.latitude}`,
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      })
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit() {
    console.log('form submitted');
    console.log(this.state.longitude, this.state.latitude, this.state.radius);

    axios
      .post('/api/yelp/', {
        longitude: this.state.longitude,
        latitude: this.state.latitude,
        radius: this.handleConvertRadius(this.state.radius)
      })
      .then(res => console.log(res));
  }

  handleRandomCuisine() {
    this.setState({ cuisine: 'Random' });
  }

  handleConvertRadius(miles) {
    return miles * 1609.344;
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Cuisine</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                name="cuisine"
                onChange={this.handleInputChange}
                value={this.state.cuisine}
                placeholder="...Chinese"
                aria-label="Cuisine"
              />
              <InputGroup.Append>
                <Button
                  onClick={this.handleRandomCuisine}
                  variant="outline-secondary"
                >
                  Choose Random!
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                name="location"
                onChange={this.handleInputChange}
                value={this.state.location}
                placeholder="...Tustin CA"
                aria-label="Location"
              />
              <InputGroup.Append>
                <Button
                  variant="outline-secondary"
                  onClick={this.handleGetLocation}
                >
                  Get Location
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              {'Search Radius?: Miles ' + this.state.radius}
            </Form.Label>
            <Slider
              style={{ display: 'block', width: '100%' }}
              styles={{
                track: {
                  backgroundColor: 'Grey'
                },
                active: {
                  backgroundColor: 'green'
                },
                thumb: {
                  width: 40,
                  height: 40,
                  opacity: 0.8
                }
              }}
              axis="x"
              xstep={0.5}
              xmin={0.5}
              xmax={5}
              x={this.state.radius}
              onChange={({ x }) =>
                this.setState({ radius: parseFloat(x.toFixed(2)) })
              }
            />
          </Form.Group>

          <Button onClick={this.handleFormSubmit} variant="primary">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default SettingsForm;
