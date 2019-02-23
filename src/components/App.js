import React, { Component } from "react";

const API_URL = "https://personio-fe-test.herokuapp.com/api/v1/candidates";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Data Table App",
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

  render() {
    const { title, applicants } = this.state;
    return (
      <div className="container-fluid">
        <h2>{title} </h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Birth Date</th>
              <th>Experience</th>
              <th>Position Applied</th>
              <th>Application Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map(data => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.birth_date}</td>
                <td>{data.year_of_experience}</td>
                <td>{data.position_applied}</td>
                <td>{data.application_date}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
