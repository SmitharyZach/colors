import React from "react";
import LoginMessage from "./LoginMessage";

class Login extends React.Component {
  constructor(props) {
    super(props);
    //add inital state here
    this.state = {
      username: "",
      password: "",
      serverResponse: null,
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this._submitForm}>
          <label>
            username:
            <input
              type="text"
              value={this.state.username}
              onChange={(event) => {
                this._updateField("username", event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            password:
            <input
              type="password"
              password={this.state.password}
              onChange={(event) => {
                this._updateField("password", event.target.value);
              }}
            />
          </label>
          <br />
          <input type="submit" />
        </form>
        <LoginMessage {...this.state.serverResponse} />
      </div>
    );
  }

  _updateField = (fieldName, value) => {
    this.setState(
      {
        [fieldName]: value,
      },
      () => {
        console.log(`${fieldName} is now ${value}`);
      }
    );
  };

  _submitForm = (event) => {
    event.preventDefault();
    const serverResponse = this.props.handleSubmit(
      this.state.username,
      this.state.password
    );
    this.setState(
      {
        serverResponse,
      },
      () => {
        console.log("server response", serverResponse);
      }
    );
  };
}

export default Login;
