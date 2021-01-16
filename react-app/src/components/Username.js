import React from "react";

class Username extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.userData.login}</h2>
      </div>
    );
  }
}

export default Username;
