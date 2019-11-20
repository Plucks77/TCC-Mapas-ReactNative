import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import avatar from "../../../assets/avatar.png";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import Lottie from "lottie-react-native";
import loading from "../../../assets/loading.json";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  Imagem,
  Principal,
  Nome,
  Texto,
  Campos,
  BotaoAlterar,
  ViewBotao,
  Seta,
  ViewLottie
} from "./styles";

export default function Perfil(props) {
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

  function handleBack() {
    props.navigation.navigate("Mapa");
  }

  return user ? (
    <Container>
      <Seta onPress={handleBack}>
        <Icon name="arrow-left" size={40} style={{ color: "#df4723" }} />
      </Seta>

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
          <Text>Salvar</Text>
        </BotaoAlterar>
      </ViewBotao>
    </Container>
  ) : (
    <ViewLottie>
      <Lottie source={loading} autoSize resizeMode="contain" autoPlay loop />
    </ViewLottie>
  );
}
