import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./components/Login/index";
import Mapa from "./components/Mapa/index";
import Perfil from "./components/Perfil/index";
import Cadastro from "./components/CadastroUsuario/index";
import { createDrawerNavigator } from "react-navigation-drawer";

const MainDrawerNavigator = createDrawerNavigator(
  {
    Mapa: Mapa,
    Perfil: {
      screen: Perfil,
      navigationOptions: {
        drawerLockMode: "locked-closed"
      }
    }
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
  Mapa: {
    screen: MainDrawerNavigator
  },
  Cadastro
});

export default createAppContainer(LoginSwitchNavigator);
