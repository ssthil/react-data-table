import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ status, label }) => {
  const statusArray = status.map(obj => obj.status);
  const uniqueValue = [...new Set(statusArray)];

  return (
    <React.Fragment>
      <label>{label}</label>
      {uniqueValue.length && (
        <select
          id="status"
          className="form-control capitalize-text font-size-sm"
        >
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
  label: PropTypes.string
};

export default Filter;
