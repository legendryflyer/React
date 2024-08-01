import { Component } from "react";
import React from "react";

class ClassHandlers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: Number(this.props.count),
      style: {
        color: "green",
      },
    };
  }

  incrementCount = () => {
    // this.state.cnt = this.state.cnt + 1
    this.setState(() => ({
      cnt: this.state.cnt + 1,
    }));
  };

  // incrementFive =()=>{
  //     this.incrementCount()   // only incriment once ...we have to handle this by Prevstate()
  //     this.incrementCount()
  //     this.incrementCount()
  //     this.incrementCount()
  //     this.incrementCount()
  // }

  render() {
    return (
      <div>
        <h1 style={this.state.style}>{this.state.cnt}</h1>
        <button onClick={this.incrementCount}>Click</button>
      </div>
    );
  }
}
export default ClassHandlers;
