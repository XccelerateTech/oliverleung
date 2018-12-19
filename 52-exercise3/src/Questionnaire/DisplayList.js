import React from 'react';

const DisplayList2 = (props) => {
  console.log(props)
  const listItems = props.list.map( l=>
    <li className="list-group-item" key={l.id}>{l.item} {l.response}</li>)

  return (
    <div>
      <ul className="list-group">
        {listItems} 
      </ul>
    </div>
  )
}

export default DisplayList2;