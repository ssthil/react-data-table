import React from 'react';
import PropTypes from 'prop-types';
import './SearchControl.css';

const SearchControl = ({ handleSearch }) => {
  return (
    <div className="form-group">
      <input
        className="form-control font-size-sm"
        onChange={handleSearch}
        type="search"
        placeholder="Search for name, position"
      />
    </div>
  );
};

SearchControl.propTypes = {
  handleSearch: PropTypes.func
};

export default SearchControl;
