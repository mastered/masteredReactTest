import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
      loggedIn: false
    };

  }

  render() {
    if (this.props.hideMe) {
      return null;
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your email"
              floatingLabelText="email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br/>
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br/>
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

  handleClick(event) {
    var apiBaseUrl = "https://www.mastered.com/api/v2/";
    var self = this;
    var payload = {
      "email": self.state.email,
      "password": self.state.password
    };
    axios.post(apiBaseUrl + 'sign_in', payload)
      .then(function (response) {
        if (response.status == 200) {
          self.setState({token: response.data.data.token});
          self.setState({loggedIn: true});
          self.props.onLoggedIn(true);
        }
        else if (response.status == 401) {
          console.log("email and password do not match");
          alert("email and password do not match");
        }
        else {
          console.log("email does not exist");
          alert("email does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

const style = {
  margin: 15
};
export default Login;