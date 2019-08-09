import React from 'react';
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import Slider from 'react-input-slider';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object({
  location: yup.string().required(),
  geoLocation: yup.string()
});
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
    console.log(values);
    console.log(Math.floor(this.handleConvertRadius(this.state.radius)));
    console.log('form submitted');
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
        validationSchema={schema}
        onSubmit={values => this.handleFormSubmit(values)}
        initialValues={{
          location: ''
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          setFieldValue,
          setValues
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  type="text"
                  name="location"
                  onChange={handleChange}
                  value={values.location}
                  placeholder="...92705"
                  aria-label="Location"
                  isInvalid={!!errors.location}
                />
                <InputGroup.Append>
                  {/* <Button
                    variant="outline-secondary"
                    onClick={() => this.handleGetLocation(setFieldValue)}
                  >
                    Get Location
                  </Button> */}
                </InputGroup.Append>
                <Form.Control.Feedback type="invalid">
                  {errors.location}
                </Form.Control.Feedback>
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

            <Button type="submit" variant="primary">
              Use Zip Code
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() =>
                this.handleGetLocation(setFieldValue, handleSubmit)
              }
            >
              Use My Location
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default SettingsForm;
