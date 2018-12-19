import React, { Component } from 'react'; // import class based components
import DisplayList from './DisplayList';
import QuestionCard from './QuestionnaireCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      list: [
        {
          id: 1, item: <QuestionCard comment="What's your name?"></QuestionCard>
        },
        {
          id: 2, item: <QuestionCard comment="What's your number?"></QuestionCard>
        },
        {
          id: 3, item: <QuestionCard comment="What's your age?"></QuestionCard>
        }
      ],
    }
  }

  render() {
    return (
      <div> 
        <DisplayList name={this.state.name} list={this.state.list}></DisplayList>
        {/* <button onClick={this.handleClick}>Answer</button> */}
        {/* <p>{this.state.response}</p> */}
      </div>
    )
  }
}

export default App;