import React from "react";

export default class CheckboxWithLabel extends React.Component {
  state = {
    isChecked: false
  };

  onChange = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}));
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}