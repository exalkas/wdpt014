import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super();

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  handleIncrease = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log("Render runs");
    return (
      <div>
        <h2>{this.props.title}</h2>
        Counter: {this.state.counter}
        <br />
        <button onClick={this.handleIncrease}>Increase</button>
        <br />
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    );
  }
}
