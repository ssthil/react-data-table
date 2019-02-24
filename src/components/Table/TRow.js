import React from 'react';
import PropTypes from 'prop-types';

import { findAge } from '../../utils';

const TRow = ({ data, className }) => {
  const {
    name,
    email,
    birth_date,
    year_of_experience,
    position_applied,
    application_date,
    status
  } = data;
  return (
    <tr className={className}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{findAge(birth_date)}</td>
      <td>{year_of_experience}</td>
      <td>{position_applied}</td>
      <td>{application_date}</td>
      <td>{<span className={`status-bar ${status}`} title={status} />}</td>
    </tr>
  );
};

TRow.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string
};

export default TRow;
