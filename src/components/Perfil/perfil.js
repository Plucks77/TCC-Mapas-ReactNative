import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import avatar from "../../../assets/avatar.png";

import { Container, Imagem, Principal, Nome, Texto, Campos, BotaoAlterar } from "./style";

export default function Perfil() {
  return (
    <Container>
      <Principal>
        <Imagem source={avatar} />
        <Nome>Pedro Lucas</Nome>
      </Principal>
      <Campos>
        <Texto>pedro_leoti@hotmail.com</Texto>
        <Texto>Plucks77</Texto>
      </Campos>
      <BotaoAlterar>
        <Text>Alterar senha</Text>
      </BotaoAlterar>
    </Container>
  );
}
