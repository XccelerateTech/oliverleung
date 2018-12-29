// Parent component

import React, {Component} from 'react'; // import class based components
import DisplayList from './DisplayList';
import AddItem from './AddItem';

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

deleteItem = (id) => {
  const list = this.state.list.filter(item => {
    return item.id !== id;
  });
  this.setState(
    {list}
  )
}

addItem = (item) => {
  item.id = Math.random();
  const list = [...this.state.list, item] // ... spread operator - appends to our current list
  this.setState(
    {
      list // same as 'list: list' when key and the value are the same name
    }
  )

}

  render() {
    return(
      <div className="app">
        <DisplayList name={this.state.name} list={this.state.list} deleteItem ={this.deleteItem}>
        </DisplayList>
        <AddItem addItem={this.addItem}></AddItem>
      </div>
    )
  }
}

export default App;