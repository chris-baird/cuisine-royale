import React from 'react';
import DraftResultsWrapper from '../draftItemWrapper/DraftItemWrapper';
import { Row } from 'react-bootstrap';
import DraftPickDisplay from '../draftPickDisplay/DraftPickDisplay';
const _ = require('lodash');

class DraftResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drafted: []
    };
    this.handleDraftPick = this.handleDraftPick.bind(this);
    this.handleResetDraft = this.handleResetDraft.bind(this);
  }

  handleResetDraft() {
    const newDraft = [];
    this.setState({ drafted: newDraft });
  }

  handleDraftPick(pick) {
    const draftCopy = [...this.state.drafted];

    const pickIndex = _.findIndex(draftCopy, item => item.id === pick.id);

    if (pickIndex !== -1) {
      const newDraft = _.filter(draftCopy, item => item.id !== pick.id);

      this.setState({ drafted: newDraft });
    } else {
      if (draftCopy.length < 6) {
        draftCopy.push(pick);

        this.setState({ drafted: draftCopy });
      }
    }
  }

  componentDidUpdate() {
    console.log(this.state.drafted);
  }
  render() {
    return (
      <div>
        <DraftPickDisplay
          count={this.state.drafted.length}
          resetDraft={this.handleResetDraft}
        />
        <Row>
          {this.props.apiData.map(item => (
            <DraftResultsWrapper
              item={item}
              key={item.id}
              handleDraftPick={this.handleDraftPick}
              selected={_.includes(this.state.drafted, item)}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default DraftResultsContainer;
