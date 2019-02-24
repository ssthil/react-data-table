import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ status }) => {
  const statusArray = status.map(obj => obj.status);
  const uniqueValue = [...new Set(statusArray)];

  return (
    uniqueValue.length && (
      <select id="status" className="form-control capitalize-text">
        {uniqueValue.map(status => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    )
  );
};

Filter.propTypes = {
  status: PropTypes.array
};

export default Filter;
