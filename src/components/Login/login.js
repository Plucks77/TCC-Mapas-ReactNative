import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Container, Inputs, Input, Botao } from "./style";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("email").then(email => {
      if (email) {
        //props.navigation.navigate("Mapa");
      }
    });
  }, []);

  async function handleLogin() {
    // alert("Email: " + email + "\n" + "Senha: " + senha);

    // const response = await api.post("/login", {
    //   email: email,
    //   senha: senha
    // });
    // console.log(response.data);

    axios
      .post("http://192.168.29.69:8000/api/login", {
        firstName: "Fred",
        lastName: "Flintstone"
      })
      .then(function(response) {
        console.log("Resposta: " + response);
      })
      .catch(function(error) {
        console.log("Erro: " + error);
      });

    //await AsyncStorage.setItem("email", email);
    //props.navigation.navigate("Mapa");
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
