import React from "react";
import { Platform, View } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";

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
        <Avatar.Image style={{alignSelf:'center'}} size={150} source={require("../../assets/images/indomie.jpg")} />
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
          WEb
        </Button>
      </View>
    )}
    {Platform.OS !== "web" && (
      <View>
        <Avatar.Image size={24} source={require("../../assets/images/indomie.jpg")} />
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
