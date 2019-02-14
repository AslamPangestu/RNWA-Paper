import { AppRegistry } from "react-native";
import App from "./src/components/App";
import { name as appName } from "./app.json";
import * as React from "react";

import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";

import store from "./src/redux/store";

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
