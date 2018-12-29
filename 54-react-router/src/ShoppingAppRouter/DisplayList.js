import React from 'react';
import {
  Link,
  Route
} from 'react-router-dom';
import DisplayItem from './DisplayItem';

const DisplayList = (props) => {
  const listItems = props.list.map( l=>
    <div className="list-group-item" key={l.id}>
      <span><Link to={'/DisplayItem/' + l.id}> {l.item} </Link></span>
    </div>
  )

  return (
    <div>
      <h1> {props.name}'s Shopping List </h1>
      <ul className="list-group">
        {listItems}
      </ul>
    </div>
  )
}

export default DisplayList;