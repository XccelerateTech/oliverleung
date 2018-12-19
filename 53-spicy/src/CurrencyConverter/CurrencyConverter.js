import React from 'react';
import ReactDOM from 'react-dom';

class CurrencyConverter extends React.Component {

  constructor(props) {
    super(props);
    // defining the initial states
    this.state = {
      hkd: null,
      usd: null,
    }
  }

  // method called when state changes
  handleChange = (e) => {
    // on usd change convert hkd - e.target.name and e.target.value
    if (e.target.name === "usd") {
      this.setState(
        {
          usd: e.target.value,
          hkd: e.target.value * 7.78
        }
      )
    } 
    if (e.target.name === "hkd") {
      this.setState(
        {
          hkd: e.target.value,
          usd: e.target.value / 7.78
        }
      )
    }
  }

  render() {
    return (
      <div className="ui card">
        <label>Enter hkd</label>
        <input type="text" name="hkd" value={this.state.hkd} onChange={this.handleChange}></input>
        <label>Enter usd</label>
        <input type="text" name="usd" value={this.state.usd} onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default CurrencyConverter;