// react
import React, { Component } from 'react';

// third party
import Picker from "react-datepicker";

// third party css
import "react-datepicker/dist/react-datepicker.css";

class DatePicker extends Component {
  state = {
    startDate: '',
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <Picker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DatePicker;
