import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort/Sort';

const THeader = props => {
  const { headerNames, className, handleSorting } = props;
  // const names = headerNames.reduce((acc, value) => {
  //   acc.push(value.name);
  // }, []);

  return (
    <thead>
      <tr>
        {headerNames.map(header => (
          <th key={header.name} className={className}>
            {header.name}{' '}
            {(header.name === 'Position Applied' ||
              header.name === 'Experience' ||
              header.name === 'Application Date') && <Sort headerKey={header.key} handleSorting={handleSorting} />}
          </th>
        ))}
      </tr>
    </thead>
  );
};

THeader.propTypes = {
  headerNames: PropTypes.array,
  applicants: PropTypes.array,
  className: PropTypes.string,
  handleSorting: PropTypes.func
};

export default THeader;
