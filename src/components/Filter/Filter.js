import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ status, label, handleChange }) => {
  // const uniqueValue = [...new Set(statusArray)];
  const uniqueValue = [];
  status.map(obj => {
    if(uniqueValue.indexOf(obj.status) === -1) {
      uniqueValue.push(obj.status);
    }
  });

  const filterChange = e => {
    handleChange(e.target.value);
  };

  return (
    <React.Fragment>
      <label>{label}</label>
      {uniqueValue.length && (
        <select
          id="status"
          className="form-control capitalize-text font-size-sm"
          onChange={filterChange}
        >
          <option value="all">All</option>
          {uniqueValue &&
            uniqueValue.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
        </select>
      )}
    </React.Fragment>
  );
};

Filter.propTypes = {
  status: PropTypes.array,
  label: PropTypes.string,
  handleChange: PropTypes.func
};

export default Filter;
