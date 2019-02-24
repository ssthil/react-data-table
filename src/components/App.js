import React, { Component } from 'react';
/** components */
import Spinner from './Spinner/Spinner';
import Table from './Table/Table';
import SearchControl from './SearchControl';
import Filter from './Filter/Filter';
/** api url */
const API_URL = 'https://personio-fe-test.herokuapp.com/api/v1/candidates';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React Data Table App',
      applicants: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => this.setState({ applicants: result.data }));
  }
  /** search */
  handleSearch = e => {
    this.setState({
      searchQuery: e.target.value
    });
    console.log(this.state.searchQuery);
  };

  render() {
    const { title, applicants } = this.state;
    return (
      <div className="container-fluid">
        <h2>{title} </h2>
        {applicants.length === 0 ? (
          <Spinner />
        ) : (
          <div>
            <div className="card">
              <div className="card-header">
                <h6 className="text-primary">Applicant Details</h6>
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
                    <label>Filter</label>
                    <Filter status={applicants} />
                  </div>
                </div>
                <Table data={applicants} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
