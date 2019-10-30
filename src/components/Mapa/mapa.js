import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { mapStyle } from "./style";
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
      <TouchableOpacity
        style={{ position: "absolute", alignSelf: "center", bottom: 30 }}
      >
        <Icon name="plus-circle" size={50} />
      </TouchableOpacity>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212"
      }}
    >
      <Lottie source={loading} autoSize resizeMode="contain" autoPlay loop />
    </View>
  );
}
