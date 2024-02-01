import React, { Component } from "react";

class IncomeTaxCalculator extends Component {
  state = {
    title: "Federal Income Tax 2015 Calculator",
    input: 0,
    tax: 0,
  };
  boxStyle = {
    border: "solid blue 4px",
    borderRadius: 12,
    maxWidth: "fit-content",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: 8,
  };
  fullRowStyle = {
    gridColumnStart: 1,
    gridColumnEnd: 4,
  };

  handleCalculate = () => {
    var localinput = this.state.input;
    console.log("Calculate button clicked. Input: " + localinput);
    var localTax = 0;
    if (localinput > 0) {
      if (localinput < 9225) {
        localTax = localinput * 0.1;
      } else if (localinput < 37450) {
        localTax = 922.5 + (localinput - 9225) * 0.15;
      } else if (localinput < 90750) {
        localTax = 5156.25 + (localinput - 37450) * 0.25;
      } else if (localinput < 189300) {
        localTax = 18481.25 + (localinput - 90750) * 0.28;
      } else if (localinput < 411500) {
        localTax = 46075.25 + (localinput - 189300) * 0.33;
      } else if (localinput < 413200) {
        localTax = 119401.25 + (localinput - 411500) * 0.35;
      } else {
        localTax = 119996.25 + (localinput - 413200) * 0.396;
      }
    }
    this.setState({ tax: localTax });
  };
  handleInput = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div style={this.boxStyle}>
        <h1 style={this.fullRowStyle}>{this.state.title}</h1>
        <label className="m-2">Enter the Taxable Income: </label>
        <input
          className="m-2"
          type="number"
          id="income"
          onChange={(event) => this.handleInput(event)}
        />
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleCalculate}
        >
          Calculate
        </button>
        <p className="m-2">Income Tax owed:</p>
        <p className="m-2"> ${this.state.tax}</p>
      </div>
    );
  }
}

export default IncomeTaxCalculator;
