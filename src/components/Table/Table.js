import React from 'react';
import PropTypes from 'prop-types';
import THeader from './THeader';
import TRow from './TRow';
import './Table.css';
import { headerName } from '../../constant';

const Table = props => {
  const { data, handleSorting, className } = props;
  return (
    <table className={className}>
      <THeader
        headerNames={headerName}
        applicants={data}
        className="font-size-md-b"
        handleSorting={handleSorting}
      />
      <tbody>
        {data && data.map(applicant => (
          <TRow key={applicant.id} data={applicant} className="font-size-sm" />
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  handleSorting: PropTypes.func,
  className: PropTypes.string
};

export default Table;
