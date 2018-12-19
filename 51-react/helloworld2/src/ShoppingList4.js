import React from 'react';

interface IMyProps {
  name: string;
  date: string;
}

const ShoppingList4 : React.SFC<IMyProps> = (props) => {
  return (
    <div>
      <h1> {props.name}'s Shopping List</h1>
    </div>
  )
}

export default ShoppingList4;