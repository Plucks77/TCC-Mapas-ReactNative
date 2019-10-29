import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./components/Login/login";
import Mapa from "./components/Mapa/mapa";
import Perfil from "./components/Perfil/perfil";
import { createDrawerNavigator } from "react-navigation-drawer";

const MainDrawerNavigator = createDrawerNavigator(
  {
    Mapa: Mapa,
    Perfil: Perfil
  },
  {
    initialRouteName: "Perfil",
    contentOptions: {
      activeTintColor: "#3273a8"
    }
  }
);

const LoginSwitchNavigator = createSwitchNavigator({
  Login,
  Mapa: {
    screen: MainDrawerNavigator
  }
});

export default createAppContainer(LoginSwitchNavigator);
