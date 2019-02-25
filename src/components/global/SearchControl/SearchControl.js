import React from 'react';
import PropTypes from 'prop-types';
import './SearchControl.css';

const SearchControl = ({ label, handleSearch, className, placeholder }) => {

  const searchApplicant = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <label>{label}</label>
      <div className="form-group">
        <input
          className={className}
          onChange={searchApplicant}
          type="search"
          placeholder={placeholder}
        />
      </div>
    </React.Fragment>
  );
};

SearchControl.propTypes = {
  handleSearch: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default SearchControl;
