import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Platform } from "react-native";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";

import store from "./redux/store";

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <React.Fragment>
          {Platform.OS === "web" ? (
            <style type="text/css">{`
            @font-face {
              font-family: 'MaterialIcons';
              src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
            }
          `}</style>
          ) : null}
          <App />
        </React.Fragment>
      </PaperProvider>
    </StoreProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
