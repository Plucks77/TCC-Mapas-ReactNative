import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { mapStyle } from "./style";
import Menu from "../Menu/index";

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
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1, marginTop: -20 }}
        region={region}
        customMapStyle={mapStyle}
        showsUserLocation
        loadingEnabled
        showsCompass={false}
      />
      <Menu props={props} />
    </View>
  ) : (
    <View>
      <Text>Carregando...</Text>
    </View>
  );
}
