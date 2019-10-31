import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./components/Login/login";
import Mapa from "./components/Mapa/mapa";
import Perfil from "./components/Perfil/perfil";
import Cadastro from "./components/CadastroUsuario/cadastro";
import { createDrawerNavigator } from "react-navigation-drawer";

const MainDrawerNavigator = createDrawerNavigator(
  {
    Mapa: Mapa,
    Perfil: Perfil
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
