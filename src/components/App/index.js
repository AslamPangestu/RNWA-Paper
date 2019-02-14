import React, { Component } from "react";
import { Platform } from "react-native";

import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "../../redux/store";

import Splash from "../../containers/Splash";

class App extends Component {
  render() {
    // return (
    //   <StoreProvider store={store}>
    //     <PaperProvider>
    //       <React.Fragment>
    //         {Platform.OS === "web" ? (
    //           <style type="text/css">{`
    //         @font-face {
    //           font-family: 'MaterialIcons';
    //           src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
    //         }
    //       `}</style>
    //         ) : null}
    //         <Splash />
    //       </React.Fragment>
    //     </PaperProvider>
    //   </StoreProvider>
    // );
    return <Splash />;
  }
}

let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
