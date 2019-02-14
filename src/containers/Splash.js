import React, { PureComponent } from "react";
import { Alert, Platform } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Splash";
import Auth from "../redux/auth";

type Props = {
  login: (username: string, password: string) => void
};

class Splash extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsernameChange = username => this.setState({ username });
    this.handlePasswordChange = password => this.setState({ password });
    this.submitLogin = async () => {
      const { username, password } = this.state;

      if (!username || !password) {
        console.log("kosong");
        if (Platform.OS !== "web") {
          Alert.alert("Login", "Silakan isi email dan password anda");
        } else {
          alert("Login", "Silakan isi email dan password anda");
        }
      } else {
        console.log("do");
        this.props.login(username, password);
      }
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <Screen
        username={username}
        changeUsername={this.handleUsernameChange}
        password={password}
        changePassword={this.handlePasswordChange}
        doLogin={this.submitLogin}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) =>
    dispatch(Auth.actions.login({ username, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);
