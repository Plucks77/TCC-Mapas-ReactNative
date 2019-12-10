import React, { useState, useEffect } from "react";
import { Text, View, Picker } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Container,
  Inicial,
  Seta,
  Titulo,
  Campos,
  Proximo,
  Input,
  Seletor
} from "./styles";

export default function CadastrarEvento(props) {
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data: "",
    quantidade: "",
    privado: 0,
    valor: ""
  });

  function handleBack() {
    props.navigation.navigate("Mapa");
  }

  function formataData() {
    format = "00/00/0000 00:00";
    if (evento.data.length == 2) {
      d = evento.data + "/";
      setEvento({ ...evento, data: d });
    }
    if (evento.data.length == 5) {
      d = evento.data + "/";
      setEvento({ ...evento, data: d });
    }
    if (evento.data.length == 10) {
      d = evento.data + " ";
      setEvento({ ...evento, data: d });
    }
    if (evento.data.length == 13) {
      d = evento.data + ":";
      setEvento({ ...evento, data: d });
    }
  }

  useEffect(() => {
    formataData();
  }, [evento.data]);

  async function handleProximo() {
    const { nome, descricao, data, quantidade, privado, valor } = evento;
    if (nome != "" && descricao != "" && data != "" && quantidade != "") {
      latitude = props.navigation.getParam("latitude");
      longitude = props.navigation.getParam("longitude");

      var d = evento.data.split("/");
      var h = d[2].split(" ");

      d = h[0] + "/" + d[1] + "/" + d[0] + " " + h[1];

      const token = await AsyncStorage.getItem("user_token");
      const id = await AsyncStorage.getItem("user_id");

      var config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      var bodyParameters = {
        id_criador: id,
        nome,
        descricao,
        data: d,
        valor,
        privado,
        max_participantes: quantidade,
        latitude,
        longitude
      };

      const response = api
        .post("/evento/create", bodyParameters, config)
        .then(r => {
          console.log(r.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    } else {
      alert("Preencha todas as informações primeiro!");
    }
  }
  return (
    <Container>
      <Inicial>
        <Seta onPress={handleBack}>
          <Icon name="arrow-left" size={40} style={{ color: "#df4723" }} />
        </Seta>
        <Titulo>Criar Evento</Titulo>
        <Icon style={{ flex: 1 }} />
      </Inicial>

      <Campos>
        <Input
          placeholder="Nome"
          value={evento.nome}
          onChangeText={e => setEvento({ ...evento, nome: e })}
        />
        <Input
          placeholder="Descrição"
          value={evento.descricao}
          onChangeText={e => setEvento({ ...evento, descricao: e })}
        />
        <Input
          placeholder="00/00/0000 00:00"
          maxLength={16}
          value={evento.data}
          onChangeText={e => setEvento({ ...evento, data: e })}
        />
        <Input
          placeholder="Quantidade de participantes"
          keyboardType="number-pad"
          value={evento.quantidade}
          onChangeText={e => setEvento({ ...evento, quantidade: e })}
        />
        <Seletor
          selectedValue={evento.privado}
          onValueChange={e => setEvento({ ...evento, privado: e })}
        >
          <Picker.Item label="Público" value={0} />
          <Picker.Item label="Privado" value={1} />
        </Seletor>

        <Input
          placeholder="Entrada franca"
          keyboardType="number-pad"
          value={evento.valor}
          onChangeText={e => setEvento({ ...evento, valor: e })}
        />
      </Campos>

      <Proximo onPress={handleProximo}>
        <Text>Próximo</Text>
      </Proximo>
    </Container>
  );
}
