import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShoppingList from './ShoppingList';
import ShoppingList2 from './ShoppingList2';
import ShoppingList4 from './ShoppingList4';
import CommentCard2 from './CommentCard2';
import * as serviceWorker from './serviceWorker';

const name = "Buttstuff";
function formatname(user){
  return user.first + ' ' + user.last;
}

const user = {
  first: "Ollie",
  last: "Leung"
}

const element = 
<div className="container"> 
  <h1 style={{color:'blue'}}>Hello {formatname(user)}</h1>
  <h2>This is JSX</h2>
</div>;

// curly bracket denotes embedding javascript expression
ReactDOM.render(<CommentCard2 author={"Oliver"} date={new Date().toLocaleTimeString()} comment={"Poo poo in my bum bum"}></CommentCard2>, document.getElementById('root')); // added to the root element of the DOM

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
