import React, { useState, useEffect } from "react";
import { Text, Picker } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  Container,
  Inicial,
  Seta,
  Titulo,
  Campos,
  Proximo,
  Input,
  Seletor,
  CampoData,
  Texto,
  Botao
} from "./styles";

export default function CadastrarEvento(props) {
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    quantidade: "",
    privado: 0,
    valor: ""
  });

  const [mostradores, setMostradores] = useState({ data: false, hora: false });
  const [data_hora, setData_hora] = useState({ data: null, hora: null });
  const [latitude, setLatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);

  function handleTrocaData(r) {
    const data_formatada =
      r.getDate() + "-" + (r.getMonth() + 1) + "-" + r.getFullYear();
    setMostradores({ ...mostradores, data: false });
    setData_hora({ ...data_hora, data: data_formatada });
  }

  function handleTrocaHora(r) {
    const temp = r.getHours() + ":" + r.getMinutes();
    var h = temp.split(":");
    if (h[0] == "0") {
      h[0] = "00";
    }
    if (h[1] == "0") {
      h[1] = "00";
    }
    const formatado = h.join(":");

    setMostradores({ ...mostradores, hora: false });
    setData_hora({ ...data_hora, hora: formatado });
  }

  function handleBack() {
    props.navigation.navigate("Mapa");
  }

  function formataData() {
    const data_certo = data_hora.data + " " + data_hora.hora;
    return data_certo;
  }

  useEffect(() => {
    x = props.navigation.getParam("latitude");
    y = props.navigation.getParam("longitude");

    setLatitude(x);
    setlongitude(y);
  }, []);

  async function handleProximo() {
    const { nome, descricao, quantidade, privado, valor } = evento;

    if (
      nome != "" &&
      descricao != "" &&
      quantidade != "" &&
      data_hora.data != null &&
      data_hora.hora != null &&
      latitude != null &&
      longitude != null
    ) {
      const temp = formataData();
      d = temp.split("-");
      h = d[2].split(" ");
      d[2] = h[0];
      const data = d[2] + "-" + d[1] + "-" + d[0] + " " + h[1];

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
        data,
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
        <CampoData>
          <Texto>Data</Texto>
          <Botao onPress={() => setMostradores({ ...mostradores, data: true })}>
            <Texto>
              {!data_hora.data ? "Selecione a data" : data_hora.data}
            </Texto>
          </Botao>
          {mostradores.data && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="spinner"
              onChange={(e, d) => handleTrocaData(d)}
            />
          )}
        </CampoData>
        <CampoData>
          <Texto>Hora</Texto>
          <Botao onPress={() => setMostradores({ ...mostradores, hora: true })}>
            <Texto>
              {!data_hora.hora ? "Selecione a hora" : data_hora.hora}
            </Texto>
          </Botao>
          {mostradores.hora && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              display="spinner"
              onChange={(e, d) => handleTrocaHora(d)}
            />
          )}
        </CampoData>

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
