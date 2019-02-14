import React, { Component } from "react";
import { Platform, View, Text } from "react-native";

export default class App extends Component {
  render() {
    if (Platform.OS === "web") {
      return null;
    } else {
      return (
        <View>
          <Text>Hai</Text>
        </View>
      );
    }
  }
}
