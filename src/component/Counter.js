import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      timer: 0,
      interval: null,
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <fieldset>
          <button onClick={this.increment}>
            + Follow {this.state.counter}
          </button>
          <hr />
          <span>You have been here since: {this.state.timer} s </span>
        </fieldset>
      </div>
    );
  }
}