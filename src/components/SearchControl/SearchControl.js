import React from 'react';
import PropTypes from 'prop-types';
import './SearchControl.css';

const SearchControl = ({ handleSearch, label }) => {
  return (
    <React.Fragment>
      <label>{label}</label>
      <div className="form-group">
        <input
          className="form-control font-size-sm"
          onChange={handleSearch}
          type="search"
          placeholder="Search for name, position"
        />
      </div>
    </React.Fragment>
  );
};

SearchControl.propTypes = {
  handleSearch: PropTypes.func,
  label: PropTypes.string
};

export default SearchControl;
