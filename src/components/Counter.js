import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="m-3">
        <button onClick={this.handleDecrement} className="btn btn-primary">
          -
        </button>
        <span className="display-3 mx-3">{this.state.count}</span>
        <button onClick={this.handleIncrement} className="btn btn-primary">
          +
        </button>
      </div>
    );
  }
}

export default Counter;
