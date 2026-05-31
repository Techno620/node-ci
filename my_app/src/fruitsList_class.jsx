import React, { Component } from "react";

class FruitsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
    };
  }

  render() {
    return (
      <div className="p-5 border border-amber-200">
        <h2>Fruits List</h2>
        <ol>
          {this.state.fruits.map((fruit) => (
            <li key={fruit} >{fruit}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default FruitsList;
