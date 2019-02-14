import { Alert, Platform } from "react-native";

// import Api from "@app/api";
import Api from "../../services/api";
// import NavigationService from "../../services/navigation";
import { SET_AUTH_PROP, SET_AUTH_ERROR } from "./types";

const setAuth = ({ userId, username, userStatus, accessToken }) => ({
  type: SET_AUTH_PROP,
  payload: { userId, username, userStatus, accessToken }
});

const setLoading = isLoading => ({
  type: SET_AUTH_PROP,
  payload: { isLoading }
});

const setError = error => ({
  type: SET_AUTH_ERROR,
  payload: { error }
});

const login = ({ username, password }) => async dispatch => {
  dispatch(setLoading(true));
  setTimeout(async () => {
    const result = await Api.login({ username, password });
    console.log("hore");

    dispatch(setLoading(false));
    if (result.ok) {
      dispatch(setAuth(result.data));
      if (Platform.OS !== "web") {
        Alert.alert("Success", JSON.stringify(result.data));
      } else {
        alert("Success", JSON.stringify(result.data));
      }
      // NavigationService.navigate("HomeDrawer");
    } else {
      dispatch(setError(result.message));
      if (Platform.OS !== "web") {
        Alert.alert("Error", result.message);
      } else {
        alert("Error", result.message);
      }
    }
  }, 3000);
};

export default {
  setAuth,
  login
};
