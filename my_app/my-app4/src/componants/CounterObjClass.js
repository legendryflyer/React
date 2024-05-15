import React, { Component } from "react";

export default class CounterObjClass extends Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "" };
  }

  handleChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    return (
      <>
        <form>
          <label>firstName: </label>
          <input
            type="text"
            placeholder="enter first name"
            value={this.state.firstName}
            onChange={this.handleChangeFirstName}
          />
          <label>lastname: </label>
          <input
            type="text"
            placeholder="enter last name"
            value={this.state.lastName}
            onChange={this.handleChangeLastName}
          />
          <h1>first name is {this.state.firstName}</h1>
          <h1>lastname is {this.state.lastName}</h1>
          <h2>{JSON.stringify(this.state)}</h2>
        </form>
      </>
    );
  }
}
