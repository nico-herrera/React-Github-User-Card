import React from "react";

class Followers extends React.Component {
  render() {
    return (
      <div>
        <p>Followers: {this.props.userData.followers}</p>
      </div>
    );
  }
}

export default Followers;
