import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Sort.css';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: false,
      applicants: this.props.applicants
    };
  }

  handleSorting = () => {
    var copiedApplicants = [...this.state.applicants];
    copiedApplicants.sort(function(obj1, obj2) {
      var position1 = obj1.position_applied.toLowerCase();
      var position2 = obj2.position_applied.toLowerCase();

      if (position1 < position2) {
        return -1;
      } else if (position1 > position2) {
        return 1;
      }
      return 0;
    });
    console.log(copiedApplicants.map(obj => obj.position_applied));
    this.setState(state => ({
      sort: !state.sort
      // applicants: copiedApplicants
    }));
  };

  render() {
    const { sort } = this.state;
    return (
      <span className="float-right sort-icon" onClick={this.handleSorting}>
        {sort ? (
          <i className="fas fa-sort-amount-up" />
        ) : (
          <i className="fas fa-sort-amount-down" />
        )}
      </span>
    );
  }
}

Sort.propTypes = {
  sort: PropTypes.bool,
  handleSorting: PropTypes.func,
  applicants: PropTypes.array
};

export default Sort;