import React, { Component } from 'react'; // import class based components

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    }
  }

  handleClick = () => {
    let input = prompt('Enter your answer', 'You sack of shit');
    this.setState({
      response: input
    })
    console.log('input', input)
    console.log('response', this.state.response)
  }

  render() {
    return (
      <div className="card text-white bg-primary mb-3" >
        <h3 className="card-title">{this.props.id}</h3>
        <div className="card-body">
          <p className="card-text">Question: {this.props.comment}</p>
          <p>{this.state.response}</p>
          <button onClick={this.handleClick}>Answer</button>
        </div>
      </div>
    )
  }
}

export default QuestionCard;