import { NavigationActions, StackActions } from "react-navigation";
import { map } from "ramda";

let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const goBack = () => _navigator.dispatch(NavigationActions.back());

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

const resetStackNavigate = (stack: string[], index = 0) =>
  _navigator.dispatch(
    StackActions.reset({
      index,
      actions: map(s => NavigationActions.navigate({ routeName: s }), stack)
    })
  );

export default {
  goBack,
  navigate,
  resetStackNavigate,
  setTopLevelNavigator
};
