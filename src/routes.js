import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./components/Login/login";
import Main from "./components/Main/main";
export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main
  })
);
