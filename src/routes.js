import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./components/Login/login";
import Main from "./components/Main/main";
import Mapa from "./components/Mapa/mapa";
export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
    Mapa
  })
);
