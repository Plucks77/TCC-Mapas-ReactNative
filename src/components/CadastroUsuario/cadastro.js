import React, { useState } from "react";
import api from "../../services/api";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";

import {
  Container,
  TituloArea,
  Titulo,
  InputsArea,
  Input,
  BotaoArea,
  Botao
} from "./style";

export default function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [nick, setNick] = useState("");

  async function handleCadastro() {
    try {
      const response = await api.post("/usuario/cadastrar", {
        nome,
        email,
        senha,
        data_nascimento,
        cpf,
        nick
      });
      console.log(response.data);
    } catch (erro) {
      console.log("O seguinte erro ocorreu: " + erro);
    }
  }

  return (
    <Container>
      <TituloArea>
        <Titulo> Cadastrar </Titulo>
      </TituloArea>
      <InputsArea>
        <Input onChangeText={setNome} value={nome} placeholder="Nome" />
        <Input placeholder="Email" onChangeText={setEmail} value={email} />
        <Input placeholder="Senha" onChangeText={setSenha} value={senha} />
        <Input
          placeholder="Data de nascimento"
          onChangeText={setData_nascimento}
          value={data_nascimento}
        />
        <Input placeholder="CPF" onChangeText={setCpf} value={cpf} />
        <Input placeholder="Nick" onChangeText={setNick} value={nick} />
      </InputsArea>

      <BotaoArea>
        <Botao onPress={handleCadastro}>
          <Text>Cadastrar</Text>
        </Botao>
      </BotaoArea>
    </Container>
  );
}
