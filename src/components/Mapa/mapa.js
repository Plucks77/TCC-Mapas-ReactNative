import React, { Component } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

export default class Map extends Component {
  state = {
    region: null
  };
  async componentDidMount() {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0222
          }
        });
      },
      () => {
        alert("Tempo limite excedido!");
      },
      {
        timeout: 20000,
        maximumAge: 5000,
        enableHighAccuracy: true
      }
    );
  }
  render() {
    const { region } = this.state;
    if (region != null) {
      alert("OK");
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} region={region} showsUserLocation loadingEnabled />
      </View>
    );
  }
}
