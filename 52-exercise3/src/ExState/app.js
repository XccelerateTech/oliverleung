import React, {Component} from 'react'; // import class based components
import DisplayList from './DisplayList';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: "jyoti"
  }
}

  render() {
    return(
      <div>
        <DisplayList name={this.state.name}></DisplayList>
      </div>
    )
  }
}

export default App;