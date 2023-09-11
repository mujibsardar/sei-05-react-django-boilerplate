import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';

class SignUp extends Component {
  state = {
    userData: {
      username: '',
      email: '', // Add the email field
      password: '',
    },
    error: null,
  };

  handleChange = (evt) => {
    const userData = {
      ...this.state.userData,
      [evt.target.name]: evt.target.value,
    };
    this.setState({ userData, error: null });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Call the signUp function from users-service.js
      const user = await signUp(this.state.userData);
      // Handle successful sign up (e.g., redirect to login page)
      this.props.setUser(user);
    } catch (error) {
      this.setState({ error: 'Registration failed' });
    }
  };

  render() {
    const { userData, error } = this.state;

    return (
      <div>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email</label> {/* Add the email input field */}
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
