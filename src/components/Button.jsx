import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button className="Button" onClick={this.props.onClick} style = {this.props.style}>
        <div className="Button__Label">{this.props.label}</div>
      </button>
    );
  }
}
