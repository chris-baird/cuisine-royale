import React from 'react';
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import Slider from 'react-input-slider';
import { Formik } from 'formik';
import settingsFormSchema from './settingsForm.schema';
import axios from 'axios';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 1
    };
    this.handleGetLocation = this.handleGetLocation.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleConvertRadius = this.handleConvertRadius.bind(this);
  }

  handleGetLocation(setFieldValue, handleSubmit) {
    navigator.geolocation.getCurrentPosition(position => {
      setFieldValue(
        'geoLocation',
        `${position.coords.longitude},${position.coords.latitude}`,
        false
      );
      setFieldValue(
        'location',
        `${position.coords.longitude},${position.coords.latitude}`
      );
      handleSubmit();
    });
  }

  handleFormSubmit(values) {
    console.log('form submitted');
    console.log(Math.floor(this.handleConvertRadius(this.state.radius)));
    console.log(values.geoLocation ? values.geoLocation : values.location);

    axios
      .post('/api/yelp/', {
        location: values.geoLocation ? values.geoLocation : values.location,
        radius: this.handleConvertRadius(this.state.radius)
      })
      .then(res => console.log(res));
  }

  handleConvertRadius(miles) {
    return miles * 1609.344;
  }

  render() {
    return (
      <Formik
        validationSchema={settingsFormSchema}
        onSubmit={values => this.handleFormSubmit(values)}
        initialValues={{
          location: '',
          geoLocation: ''
        }}
      >
        {({ handleSubmit, handleChange, values, errors, setFieldValue }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Search Location</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="location"
                  type="text"
                  value={values.location}
                  placeholder="address, city, state or zip"
                  aria-label="Location"
                  onChange={handleChange}
                  isInvalid={!!errors.location}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.location}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                {`Search Disatance?: ${this.state.radius} Miles`}
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

            <Button type="submit" variant="primary">
              Use Search Location
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() =>
                this.handleGetLocation(setFieldValue, handleSubmit)
              }
            >
              Use GPS Location
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default SettingsForm;
