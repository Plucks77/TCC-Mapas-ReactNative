import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
  Container,
  Input,
  Botao,
  BotaoCriar,
  Texto,
  ViewLottie,
  Logar
} from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";
import Lottie from "lottie-react-native";
import loading from "../../../assets/loading.json";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("user_id").then(user => {
      if (user) {
        props.navigation.navigate("Mapa");
      } else {
        setReady(true);
      }
    });
  }, []);

  async function handleLogin() {
    try {
      const response = await api.post("/login", {
        email: email,
        senha: senha
      });
      // await AsyncStorage.setItem("user_id", response.data.user_id.toString());
      // await AsyncStorage.setItem("user_token", response.data.token);
      await AsyncStorage.setItem("user_id", response.data.user.id.toString());
      await AsyncStorage.setItem("user_token", response.data.token.token);
      props.navigation.navigate("Mapa");
    } catch (erro) {
      console.log("O seguinte erro ocorreu: " + erro);
    }
  }

  function handleCriar() {
    props.navigation.navigate("Cadastro");
  }
  return ready ? (
    <Container>
      <Input
        placeholder="Digite seu email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      ></Input>

      <Input
        placeholder="Digite sua senha"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setSenha}
        value={senha}
      ></Input>

      <Botao onPress={handleLogin}>
        <Logar>Logar</Logar>
      </Botao>

      <BotaoCriar onPress={handleCriar}>
        <Texto>Criar conta</Texto>
      </BotaoCriar>
    </Container>
  ) : (
    <ViewLottie>
      <Lottie source={loading} autoSize resizeMode="contain" autoPlay loop />
    </ViewLottie>
  );
}
