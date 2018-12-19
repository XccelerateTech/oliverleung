import React, {Component} from 'react'; // import class based components
import DisplayList from './DisplayList2';
import CommentCard from './CommentCard';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: "jyoti",
    list: [
      {id: 1, item: <CommentCard author="Orrie" date="18-Dec-2018" comment="Approve Me"></CommentCard>
    },
      {id: 2, item: <CommentCard author="Xander" date="18-Dec-2018" comment="Approve Me"></CommentCard>
    },
      {id: 3, item: <CommentCard author="Brady" date="18-Dec-2018" comment="Approve Me"></CommentCard>
    }
    ]
  }
}

  render() {
    return(
      <div>
        <DisplayList name={this.state.name} list={this.state.list}></DisplayList>
      </div>
    )
  }
}

export default App;