import React, { Component } from "react";

class ClassOneS extends Component {
  clickAlert = () => {
    alert("hello");
  };

  render() {
    return (
      <div>
        <button onClick={this.clickAlert}>Click me</button>
      </div>
    );
  }
}
export default ClassOneS;
