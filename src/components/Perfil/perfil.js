import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import avatar from "../../../assets/avatar.png";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Container,
  Imagem,
  Principal,
  Nome,
  Texto,
  Campos,
  BotaoAlterar,
  ViewBotao
} from "./style";

export default function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    handleUser();
  }, []);

  async function handleUser() {
    const token = await AsyncStorage.getItem("user_token");
    const id = await AsyncStorage.getItem("user_id");

    var config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    var bodyParameters = {
      key: "value"
    };

    const response = api
      .post(`/usuario/${id}`, bodyParameters, config)
      .then(r => {
        setUser(r.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  return user ? (
    <Container>
      <Principal>
        <Imagem source={avatar} />
        <Nome>{user.nome}</Nome>
      </Principal>
      <Campos>
        <Texto>{user.email}</Texto>
        <Texto>{user.nick}</Texto>
      </Campos>
      <ViewBotao>
        <BotaoAlterar>
          <Text>Alterar senha</Text>
        </BotaoAlterar>
      </ViewBotao>
    </Container>
  ) : (
    <Text>Carregando...</Text>
  );
}
