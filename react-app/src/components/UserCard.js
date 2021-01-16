import React from "react";
import axios from "axios";
import Followers from "./Followers";
import Username from "./Username";

import "../Styles/UserCard.css";

class UserCard extends React.Component {
  state = {
    userData: [],
    username: "",
    newUsername: "",
  };

  componentDidMount() {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(
          "https://api.github.com/users/nico-herrera"
        );
        console.log(resp.data);
        this.setState({ userData: resp.data });
      } catch (err) {
        console.error(err);
      }
    };
    sendGetRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.usename) {
      const sendGetRequest = async () => {
        try {
          const resp = await axios.get(
            `https://api.github.com/users/${this.state.username}`
          );
          this.setState({ userData: resp.data });
        } catch (err) {
          console.error(err);
        }
      };
      sendGetRequest();
    }
  }

  clickHandler = (e) => {
    this.setState({
      username: this.state.newUsername,
    });
  };

  changeHandler = (e) => {
    this.setState({
      newUsername: e.target.value,
    });
  };

  render() {
    return (
      <section className="main-container">
        <div className="search-button">
          <input value={this.state.newUsername} onChange={this.changeHandler} />
          <button onClick={this.clickHandler}>Search Username</button>
        </div>
        <div className="card-container">
          <Username userData={this.state.userData} />
          <Followers userData={this.state.userData} />
        </div>
      </section>
    );
  }
}

export default UserCard;
