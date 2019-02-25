import React, { Component } from 'react';
/** components */
import Header from './global/Header/Header';
import Spinner from './global/Spinner/Spinner';
import Table from './Table/Table';
import SearchControl from './global/SearchControl/SearchControl';
import Filter from './Filter/Filter';

import { handleErrors } from '../utils';
/** api url */
import API_CONFIG from '../config/api';
// const API_URL = 'https://personio-fe-test.herokuapp.com/api/v1/candidates';
const API_URL = API_CONFIG.URL + API_CONFIG.PARAM;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: [],
      filterApplicants: [],
      filterValue: 'all'
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(API_URL)
      .then(handleErrors)
      .then(response => response.json())
      .then(result =>
        this.setState({
          applicants: result.data,
          filterApplicants: [...result.data]
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
        selectValue === this.state.filterValue ? this.state.applicants : filteredData
    });
  };

  render() {
    const { applicants, filterApplicants } = this.state;
    return (
      <React.Fragment>
        <Header title="React Data Table App" className="title"/>
        <div className="container-fluid">
          {filterApplicants && filterApplicants.length === 0 ? (
            <Spinner />
          ) : (
            <div>
              <div className="card">
                <div className="card-header">
                  <Header title="Applicant Details" className="text-default margin-padding-none" />
                  {/*<h6 className="text-default margin-padding-none">
                    Applicant Details
          </h6>*/}
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
                  <Table data={filterApplicants} />
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
