import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { mapStyle, AdicionarEvento, Container, ViewLottie } from "./styles";
import Menu from "../Menu/index";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Lottie from "lottie-react-native";
import loading from "../../../assets/loading.json";

export default function Mapa(props) {
  const [region, setRegion] = useState(null);

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
        enableHighAccuracy: false
      }
    );
  }, []);

  return region != null ? (
    <Container>
      <MapView
        style={styles.mapa}
        region={region}
        customMapStyle={mapStyle}
        showsUserLocation
        loadingEnabled
        showsCompass={false}
      />
      <Menu props={props} />
      <AdicionarEvento>
        <Icon name="plus-circle" size={50} />
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
