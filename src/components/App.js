import React, { Component } from 'react';
/** components */
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';
import Table from './Table/Table';
import SearchControl from './SearchControl/SearchControl';
import Filter from './Filter/Filter';

import { handleErrors } from '../utils';
/** api url */
const API_URL = 'https://personio-fe-test.herokuapp.com/api/v1/candidates';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React Data Table App',
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
      .then(result => this.setState({ applicants: result.data , filterApplicants: [...result.data]}));
  }
  /** search */
  handleSearch = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  /** handle change */
  handleChange = (selectValue) => {

    const filteredData = this.state.applicants.filter((applicant) => {
      return applicant.status === selectValue;
    });

    this.setState({
      filterApplicants: filteredData
    });
    console.log(this.state.filterApplicants);

  }

  render() {
    const { title, applicants, filterApplicants } = this.state;
    console.log(filterApplicants);
    return (
      <React.Fragment>
        <Header title={title} />
        <div className="container-fluid">
          {applicants && applicants.length === 0 ? (
            <Spinner />
          ) : (
            <div>
              <div className="card">
                <div className="card-header">
                  <h6 className="text-primary margin-padding-none">
                    Applicant Details
                  </h6>
                </div>

                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-md-10">
                      <label>Search</label>
                      <SearchControl
                        handleSearch={this.handleSearch}
                        value={this.state.searchQuery}
                      />
                    </div>
                    <div className="form-group col-md-2">
                      <Filter status={applicants} label="Filter" handleChange={this.handleChange}/>
                    </div>
                  </div>
                  <Table data={applicants} />
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
