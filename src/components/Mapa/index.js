import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { mapStyle, AdicionarEvento, Container, ViewLottie } from "./styles";
import Menu from "../Menu/index";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Lottie from "lottie-react-native";
import loading from "../../../assets/loading.json";
import { TextInput } from "react-native-gesture-handler";
import { Marker } from "react-native-maps";
import api from "../../services/api";

export default function Mapa(props) {
  const [region, setRegion] = useState(null);
  const [editando, setEditando] = useState(false);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0222
        });
      },
      () => {
        alert("Tempo limite excedido!");
      },
      {
        timeout: 20000,
        maximumAge: 0,
        enableHighAccuracy: true
      }
    );
    const response = api
      .post("/evento/show")
      .then(r => {
        //console.log(r.data.eventos);
        setEventos(r.data.eventos);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);

  function handleRegionChange(r) {
    console.log(r);
    setRegion(r);
  }

  function handleCriarEvento() {
    props.navigation.navigate("CadastroEvento", {
      latitude: region.latitude,
      longitude: region.longitude
    });
  }

  function handleSelecionar() {
    setEditando(true);
  }

  return region != null ? (
    <Container>
      <MapView
        style={styles.mapa}
        region={region}
        customMapStyle={mapStyle}
        showsUserLocation
        loadingEnabled
        showsCompass={false}
        rotateEnabled={false}
        onRegionChangeComplete={r => handleRegionChange(r)}
      >
        {eventos.map(e => (
          <Marker
            coordinate={{
              latitude: parseFloat(e.latitude),
              longitude: parseFloat(e.longitude)
            }}
            title={e.nome}
            description={e.descricao}
          />
        ))}
      </MapView>
      {editando && (
        <Icon
          name={"map-marker"}
          size={50}
          style={{
            position: "absolute",
            alignSelf: "center",
            top: 260
          }}
        />
      )}

      {editando == false ? (
        <Menu props={props} />
      ) : (
        <TextInput
          placeholder="Onde?"
          style={{
            backgroundColor: "red",
            position: "absolute",
            top: 10,
            width: 300,
            alignSelf: "center"
          }}
        />
      )}
      <AdicionarEvento
        onPress={!editando ? handleSelecionar : handleCriarEvento}
      >
        <Icon name={!editando ? "plus-circle" : "check-circle"} size={50} />
      </AdicionarEvento>
    </Container>
  ) : (
    <ViewLottie>
      <Lottie source={loading} autoSize resizeMode="contain" autoPlay loop />
    </ViewLottie>
  );
}

const styles = StyleSheet.create({
  mapa: {
    flex: 1,
    marginTop: -50,
    marginBottom: -30
  }
});
