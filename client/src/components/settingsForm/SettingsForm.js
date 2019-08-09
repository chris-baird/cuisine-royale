import React from 'react';
import { withRouter } from 'react-router-dom';
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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleConvertRadius = this.handleConvertRadius.bind(this);
  }

  handleFormSubmit(values) {
    console.log('form submitted');
    console.log(this.handleConvertRadius(this.state.radius));
    console.log(this.props);
    axios
      .post('/api/yelp/', {
        location: values.location,
        radius: this.handleConvertRadius(this.state.radius)
      })
      .then(res => {
        this.props.handleAddApiData(res.data);
        this.props.history.push('/draft');
      });
  }

  handleConvertRadius(miles) {
    return Math.floor(miles * 1609.344);
  }

  render() {
    return (
      <Formik
        validationSchema={settingsFormSchema}
        onSubmit={values => this.handleFormSubmit(values)}
        initialValues={{
          location: ''
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
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
            {/* Temp code for displaying location in mobile testing */}
            <p>{values.location}</p>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withRouter(SettingsForm);
