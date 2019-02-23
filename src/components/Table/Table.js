import React from 'react';
import PropTypes from 'prop-types';
import THeader from './THeader';
import TRow from './TRow';
import './Table.css';

const headerName=['Name', 'Email', 'Birth Date', 'Experience', 'Position Applied', 'Application Date', 'Status'];

const Table = props => {
  const { data } = props;
  return (
    <table className="table">
      <THeader
        names={headerName}
        applicants={data}
      />
      <tbody>
        {data.map(applicant => (
          <TRow key={applicant.id} data={applicant} />
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  sort: PropTypes.bool,
  handleSorting: PropTypes.func
};

export default Table;