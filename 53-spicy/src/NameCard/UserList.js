// Parent component

import React, {Component} from 'react'; // import class based components
import DisplayList from './DisplayList';
import AddItem from './AddUser';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    list: [
      {id: 1, firstname: "Oily", familyname: "Liver", occupation:"Fruit"},
      {id: 2, firstname: "Greasy", familyname: "Hart", occupation:"Ninja"},
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
        <AddItem addItem={this.addItem}></AddItem>
        <DisplayList listname="User List" list={this.state.list} deleteItem ={this.deleteItem}></DisplayList>
      </div>
    )
  }
}

export default App;