import React, { Component } from "react";
import { Platform } from "react-native";

import Splash from "../../containers/Splash";

class App extends Component {
  render() {
    return <Splash />;
  }
}

let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
