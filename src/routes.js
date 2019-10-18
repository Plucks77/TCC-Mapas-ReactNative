import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./components/Login/login";
import Main from "./components/Main/main";
import { createDrawerNavigator } from "react-navigation-drawer";

const MainDrawerNavigator = createDrawerNavigator(
  {
    Mapa: Main
  },
  {
    initialRouteName: "Mapa",
    contentOptions: {
      activeTintColor: "#3273a8"
    }
  }
);

const LoginSwitchNavigator = createSwitchNavigator({
  Login,
  Main: {
    screen: MainDrawerNavigator
  }
});

export default createAppContainer(LoginSwitchNavigator);
