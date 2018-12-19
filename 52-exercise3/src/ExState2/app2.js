import React, {Component} from 'react'; // import class based components
import DisplayList from './DisplayList2';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: "jyoti",
    list: [
      {id: 1, item:"milk"},
      {id: 2, item: "coffee"}
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