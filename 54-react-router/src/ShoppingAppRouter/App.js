import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ShoppingListApp from './ShoppingListApp';
import DisplayItem from './DisplayItem';
import NoMatch from './NoMatch';

// linking our routes - 'exact' is important, otherwise everything will be rendered
class App extends Component {
  render () {
    return(
      <div>
        <Navbar></Navbar>
        {/* We can also wrap the routes in <Switch> tags */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/ShoppingList" component={ShoppingListApp}></Route>
          <Route path="/DisplayItem/:id" component={DisplayItem}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;