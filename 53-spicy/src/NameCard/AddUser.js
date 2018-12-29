import React, {Component} from 'react';

class AddItem extends Component {

  constructor (props) {
    super(props);
    this.state = {
      item: {}, // our new user card is set to an empty object
    }
  }
  
    handleChange = (e) => {
      let newUser = this.state.item;
      switch (e.target.name) {
        case 'firstname' :
        newUser.firstname = e.target.value;
        break;
        case 'familyname' :
        newUser.familyname = e.target.value;
        break;
        case 'occupation' :
        newUser.occupation = e.target.value;
        break;
        default:
        console.log('Something went wrong');
      }
      this.setState(newUser);
    }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
      item: {}
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
          <input type="text" name="firstname" onChange={this.handleChange}/>
        <label>Family Name</label>
          <input type="text" name="familyname" onChange={this.handleChange}/>
        <label>Occupation</label>
          <input type="text" name="occupation" onChange={this.handleChange}/>
          
        <input type="submit" value="submit"/>
      </form>
    )
  }
}

export default AddItem;
