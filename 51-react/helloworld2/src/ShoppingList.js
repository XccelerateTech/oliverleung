// Creating Class based component

import React, {Component} from 'react';

class ShoppingList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}'s Shopping List</h1>
        <h2>{this.props.date}</h2>
      </div>
    )
  }
}

export default ShoppingList;