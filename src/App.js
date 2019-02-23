import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Data Table App"
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.title} </h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jill</td>
              <td>test@test.com</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>test@test.com</td>
              <td>34</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
