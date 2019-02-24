import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort/Sort';

const THeader = props => {
  const { names, applicants, className } = props;

  return (
    <thead>
      <tr>
        {names.map(name => (
          <th key={name} className={className}>
            {name}{' '}
            {(name === 'Position Applied' ||
              name === 'Experience' ||
              name === 'Application Date') && <Sort applicants={applicants} />}
          </th>
        ))}
      </tr>
    </thead>
  );
};

THeader.propTypes = {
  names: PropTypes.array,
  applicants: PropTypes.array,
  className: PropTypes.string
};

export default THeader;
