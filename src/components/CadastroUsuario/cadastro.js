import React, { useState } from "react";
import api from "../../services/api";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInputMask } from "react-native-masked-text";
import Lottie from "lottie-react-native";
import loading from "../../../assets/loading.json";
import {
  Container,
  TituloArea,
  Titulo,
  InputsArea,
  Input,
  BotaoArea,
  Botao
} from "./style";

export default function CadastroUsuario(props) {
  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    data_nascimento: "",
    cpf: "",
    nick: ""
  });
  const [ready, setReady] = useState(true);

  async function handleCadastro() {
    if (
      user.nome != "" &&
      user.email != "" &&
      user.senha != "" &&
      user.data_nascimento != "" &&
      user.cpf != "" &&
      user.nick != ""
    ) {
      try {
        setReady(false);
        const response = await api.post("/usuario/cadastrar", {
          nome: user.nome,
          email: user.email,
          senha: user.senha,
          data_nascimento: user.data_nascimento,
          cpf: user.cpf,
          nick: user.nick
        });
        // console.log(response.data);
        await AsyncStorage.setItem("user_id", response.data.user_id.toString());
        await AsyncStorage.setItem("user_token", response.data.token);
        props.navigation.navigate("Mapa");
      } catch (erro) {
        setReady(true);
        console.log("O seguinte erro ocorreu: " + erro);
      }
    } else {
      alert("Preencha todos os campos!");
    }
  }

  function handleBack() {
    props.navigation.navigate("Login");
  }

  return ready ? (
    <Container>
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 10,
          top: 20
        }}
        onPress={handleBack}
      >
        <Icon name="arrow-left" size={40} />
      </TouchableOpacity>
      <TituloArea>
        <Titulo> Cadastrar </Titulo>
      </TituloArea>
      <InputsArea>
        <Input
          onChangeText={e => setUser({ ...user, nome: e })}
          value={user.nome}
          placeholder="Nome"
        />

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={e => setUser({ ...user, email: e })}
          value={user.email}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={e => setUser({ ...user, senha: e })}
          value={user.senha}
        />
        <TextInputMask
          style={{
            width: 300,
            height: 60,
            fontSize: 15,
            color: "#df4723",
            marginBottom: 1,
            marginHorizontal: 10,
            borderBottomWidth: 1
          }}
          placeholder="Data de nascimento"
          placeholderTextColor="#df4723"
          type={"datetime"}
          options={{
            format: "DD/MM/YYYY"
          }}
          value={user.data_nascimento}
          onChangeText={e => setUser({ ...user, data_nascimento: e })}
        />

        <TextInputMask
          style={{
            width: 300,
            height: 60,
            fontSize: 15,
            color: "#df4723",
            marginBottom: 1,
            marginHorizontal: 10,
            borderBottomWidth: 1
          }}
          placeholder="Cpf"
          placeholderTextColor="#df4723"
          type={"cpf"}
          value={user.cpf}
          onChangeText={e => setUser({ ...user, cpf: e })}
        />

        <Input
          placeholder="Nick"
          onChangeText={e => setUser({ ...user, nick: e })}
          value={user.nick}
        />
      </InputsArea>

      <BotaoArea>
        <Botao onPress={handleCadastro}>
          <Text>Cadastrar</Text>
        </Botao>
      </BotaoArea>
    </Container>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212"
      }}
    >
      <Lottie source={loading} autoSize resizeMode="contain" autoPlay loop />
    </View>
  );
}
