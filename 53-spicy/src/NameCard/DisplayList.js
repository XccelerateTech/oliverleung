import React from 'react';
import UserCard from './UserCard';

const DisplayList = (props) => {
  console.log(props); // check what props are passed through

  const listItems = props.list.map( l=> {
    return ( // return is required for delete to work
    <li key={l.id} onClick={() => props.deleteItem(l.id)}>
      <UserCard name={l.firstname + ' ' + l.familyname} occupation={l.occupation}></UserCard>
    </li>
    )
  })

  return (
    <div>
      <h1> {props.listname}</h1>
      <ul className="list-group">
        {listItems}
      </ul>
    </div>
  )
}

export default DisplayList;