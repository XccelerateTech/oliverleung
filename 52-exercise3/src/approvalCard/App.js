import React, { Component } from 'react';
import ApprovalCard from './ApprovalCard';
import CommentCard from './CommentCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <ApprovalCard>
          <CommentCard author="Orrie" date="18-Dec-2018" comment="Approve Me"></CommentCard>
        </ApprovalCard>
        <ApprovalCard>
          <CommentCard author="Xander" date="18-Dec-2018" comment="Approve Me"></CommentCard>
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
