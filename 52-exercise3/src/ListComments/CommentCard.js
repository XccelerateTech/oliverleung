import React from 'react';
import faker from 'faker';

const CommentCard2 : React.SFC<IMyProps> = (props) => {
  let style = {
    maxWidth: '18rem'
  }
  return (
    <div className="card text-white bg-primary mb-3" style={style}>
      <div className="card-header">
        <img src={faker.image.avatar()} alt=""/>
      </div>
      <h3 className="card-title">{props.author}</h3>
      <div className="card-body">
        <p className="card-text">Today at {props.date}</p>
        <button className="btn-success">{props.comment}</button>
      </div>
    </div>
  )
}

export default CommentCard2;