// Lifecycle hooks

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date().toLocaleTimeString(),
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillMount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState(
      {
        date: new Date().toLocaleTimeString(),
      }
    )
  }

  render() {
    return (
      <div>
        <p>{this.state.date}</p>
      </div>
    );
  }
}

export default Clock;