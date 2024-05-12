import React, { Component } from "react";

export default class CounterHooksC extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  addItem = () => {
    const newItem = {
      id: this.state.items.length,
      value: Math.floor(Math.random() * 100) + 1,
    };
    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.addItem}>add item to list</button>
          <ul>
            {this.state.items.map((el) => (
              <li key={el.id}>{el.value}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
