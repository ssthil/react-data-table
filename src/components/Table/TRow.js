import React from 'react';
import PropTypes from 'prop-types';

import { findAge } from '../../utils';

const TRow = ({ data }) => {
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
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{findAge(birth_date)}</td>
      <td>{year_of_experience}</td>
      <td>{position_applied}</td>
      <td>{application_date}</td>
      <td>{status}</td>
    </tr>
  );
};

TRow.propTypes = {
  data: PropTypes.object
};

export default TRow;
