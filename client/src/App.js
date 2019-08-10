import React from 'react';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/landingPage';
import SettingsPage from './pages/settingsPage';
import DraftPage from './pages/draftPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
    this.handleAddApiData = this.handleAddApiData.bind(this);
  }

  handleAddApiData(apiData) {
    this.setState({ apiData: apiData });
  }

  render() {
    return (
      <Container>
        <Router>
          <Route path="/" exact component={LandingPage} />
          <Route
            path="/settings/"
            render={props => (
              <SettingsPage
                {...props}
                handleAddApiData={this.handleAddApiData}
              />
            )}
          />
          <Route
            path="/draft"
            render={props => (
              <DraftPage {...props} apiData={this.state.apiData} />
            )}
          />
        </Router>
      </Container>
    );
  }
}

export default App;
