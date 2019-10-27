import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Container, Inputs, Input, Botao } from "./style";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user_id").then(user => {
      if (user) {
        props.navigation.navigate("Mapa");
      }
    });
  }, []);

  async function handleLogin() {
    try {
      const response = await api.post("/login", {
        email: email,
        senha: senha
      });
      //console.log(response.data.user_id);
      await AsyncStorage.setItem("user_id", response.data.user_id.toString());
      props.navigation.navigate("Mapa");
    } catch (erro) {
      console.log("O seguinte erro ocorreu: " + erro);
    }
  }
  return (
    <Container>
      <Inputs>
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
          <Text>Logar</Text>
        </Botao>
      </Inputs>
    </Container>
  );
}
