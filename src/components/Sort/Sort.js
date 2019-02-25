import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Sort.css';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: false
    };
  }

  handleSorting = () => {
    this.setState(state => ({
      order: !state.order
    }));

    this.props.handleSorting(this.props.headerKey, this.state.order);
  };

  render() {
    const { order } = this.state;
    return (
      <span className="float-right sort-icon" onClick={this.handleSorting}>
        {order ? (
          <i className="fas fa-sort-amount-up" />
        ) : (
          <i className="fas fa-sort-amount-down" />
        )}
      </span>
    );
  }
}

Sort.propTypes = {
  handleSorting: PropTypes.func,
  headerKey: PropTypes.string
};

export default Sort;
