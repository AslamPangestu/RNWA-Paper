import React from "react";
import { Platform, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';

const Splash = ({
  username,
  changeUsername,
  password,
  changePassword,
  doLogin
}) => (
  <View>
    {Platform.OS === "web" && (
      <View>
        <TextInput
          label="Username"
          value={username}
          onChangeText={changeUsername}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={changePassword}
        />
        <Button
          icon={() => (
            <Icon name="ios-person" size={30} color="#4F8EF7" />
          )}
          mode="contained"
          onPress={doLogin}
        >
          web
        </Button>
      </View>
    )}
    {Platform.OS !== "web" && (
      <View>
        <TextInput
          label="Username"
          value={username}
          onChangeText={changeUsername}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={changePassword}
        />
        <Button icon="add-a-photo" mode="contained" onPress={doLogin}>
          Press me
        </Button>
      </View>
    )}
  </View>
);

export default Splash;
