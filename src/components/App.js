import React, { Component } from 'react';
/** components */
import Header from './global/Header/Header';
import Spinner from './global/Spinner/Spinner';
import Table from './Table/Table';
import SearchControl from './global/SearchControl/SearchControl';
import Filter from './Filter/Filter';
import LegendIndicator from './global/LegendIndicator/LegendIndicator';

import { handleErrors } from '../utils';
import { legendLabel } from '../constant';
/** api url */
import API_CONFIG from '../config/api';
const API_URL = API_CONFIG.URL + API_CONFIG.PARAM;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: [],
      filterApplicants: [],
      filterValue: 'all',
      fetching: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  /** fetch all data */
  fetchData() {
    this.setState({
      fetching: true
    });
    fetch(API_URL)
      .then(handleErrors)
      .then(response => response.json())
      .then(result =>
        this.setState({
          applicants: result.data,
          filterApplicants: [...result.data],
          fetching: false
        })
      );
  }
  /** search */
  handleSearch = searchQuery => {
    const searchApplicant = this.state.applicants.filter(applicant => {
      return (
        applicant.name.toLowerCase().search(searchQuery.toLowerCase()) !== -1 ||
        applicant.position_applied
          .toLowerCase()
          .search(searchQuery.toLowerCase()) !== -1
      );
    });

    this.setState({
      filterApplicants: searchApplicant
    });
  };

  /** handle change */
  handleChange = selectValue => {
    const filteredData = this.state.applicants.filter(applicant => {
      return applicant.status === selectValue;
    });

    this.setState({
      filterApplicants:
        selectValue === this.state.filterValue
          ? this.state.applicants
          : filteredData
    });
  };

  /** handle sorting */

  handleSorting = (sortBy, orderBy) => {
    const copiedApplicants = this.state.applicants.sort((obj1, obj2) => {
      var position1 =
        typeof obj1[sortBy] === 'string'
          ? obj1[sortBy].toLowerCase()
          : obj1[sortBy];
      var position2 =
        typeof obj2[sortBy] === 'string'
          ? obj2[sortBy].toLowerCase()
          : obj2[sortBy];

      if (position1 < position2) {
        return orderBy ? -1 : 1;
      } else if (position1 > position2) {
        return orderBy ? 1 : -1;
      }
      return 0;
    });

    // console.log(copiedApplicants.map(obj => obj.position_applied));

    this.setState({
      filterApplicants: copiedApplicants
    });
  };

  render() {
    const { applicants, filterApplicants, fetching } = this.state;

    return (
      <React.Fragment>
        <Header title="React Data Table App" className="title" />
        <div className="container-fluid">
          {fetching ? (
            <Spinner />
          ) : (
            <div>
              <LegendIndicator legendLabel={legendLabel} />
              <div className="card">
                <div className="card-header">
                  <Header
                    title="Applicant Details"
                    className="text-default margin-padding-none"
                  />
                </div>
                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-md-10">
                      <SearchControl
                        label="Search"
                        className="form-control font-size-sm"
                        placeholder="Search for name, position"
                        handleSearch={this.handleSearch}
                        value={this.state.searchQuery}
                      />
                    </div>
                    <div className="form-group col-md-2">
                      <Filter
                        status={applicants}
                        label="Filter"
                        handleChange={this.handleChange}
                      />
                    </div>
                  </div>
                  {filterApplicants && filterApplicants.length !== 0 ? (
                    <Table
                      className="table table-striped"
                      data={filterApplicants}
                      handleSorting={this.handleSorting}
                    />
                  ) : (
                    <div className="alert alert-warning">
                      Searching value is not available in the table!
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
