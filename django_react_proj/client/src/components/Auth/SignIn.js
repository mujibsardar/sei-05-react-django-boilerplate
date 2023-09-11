import React, { Component } from "react";
import { login } from "../../utilities/users-service";

class SignIn extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: null,
  };

  handleChange = (evt) => {
    const credentials = {
      ...this.state.credentials,
      [evt.target.name]: evt.target.value,
    };
    this.setState({ credentials, error: null });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Call the login function from users-service.js
      const user = await login(this.state.credentials);
      // Handle successful login (e.g., set user in state, redirect, etc.)
      this.props.setUser(user);
    } catch (error) {
      this.setState({ error: "Invalid credentials" });
    }
  };

  render() {
    const { credentials, error } = this.state;

    return (
      <div>
        <h2>Sign In</h2>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
