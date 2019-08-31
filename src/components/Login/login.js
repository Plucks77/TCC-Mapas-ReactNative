import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Container, Inputs, Input, Botao } from "./style";

// import { Container } from './styles';

export default function Login({ navigation }) {
  const [user, setUser] = useState("");

  async function handleLogin() {
    navigation.navigate("Mapa");
  }
  return (
    <Container>
      <Inputs>
        <Input
          placeholder="Digite seu login"
          autoCapitalize="none"
          autoCorrect={false}
        ></Input>

        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        ></Input>

        <Botao onPress={handleLogin}>
          <Text>Logar</Text>
        </Botao>
      </Inputs>
    </Container>
  );
}
