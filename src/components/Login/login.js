import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Container, Inputs, Input, Botao } from "./style";
import AsyncStorage from "@react-native-community/async-storage";

// import { Container } from './styles';

export default function Login(props) {
  const [user, setUser] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("email").then(email => {
      if (email) {
        //navigation.navigate("Main");
      }
    });
  }, []);

  async function handleLogin() {
    await AsyncStorage.setItem("email", user);
    props.navigation.navigate("Main");
  }
  return (
    <Container>
      <Inputs>
        <Input
          placeholder="Digite seu email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setUser}
          value={user}
          keyboardType="email-address"
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
