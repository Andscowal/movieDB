import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Search for a movie..."
          onChange={this.props.searchChange}
          style={{
            width: "50%",
            fontSize: 18,
            margin: 20,
            paddingTop: 10
          }}
        />
      </div>
    );
  }
}

export default Input;
