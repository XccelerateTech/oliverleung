import React from 'react';
import faker from 'faker';

class UserCard extends React.Component {

  render () {
  return (
    <div className="card text-white bg-primary mb-3">
      <div className="card-header">
        <img src={faker.image.avatar()} alt='profile'/>
      </div>
      <div className="card-body">
        <p className="card-text">Name: {this.props.name}</p>
        <p className="card-text">Occupation: {this.props.occupation}</p>
      </div>
    </div>
    )
  }
}

export default UserCard;