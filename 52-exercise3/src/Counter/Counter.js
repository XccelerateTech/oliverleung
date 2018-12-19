import React from 'react'; // import class based components
// import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    )
  }
}

export default Counter;