import React from 'react';
import PropTypes from 'prop-types';
import './LegendIndicator.css';

const LegendIndicator = ({ legendLabel }) => {
  return (
    <div className="legend-container">
      <label>Legends :</label>
      <div className="legend-container-bars">
        {legendLabel.map(name => (
          <div key={name} className="legend-status-bars">
            <span className={`status-bar legend ${name}`} title={name} />
            <span className="legend-label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

LegendIndicator.propTypes = {
  legendLabel: PropTypes.array
};

export default LegendIndicator;
