import React from "react";
import { View } from "react-native";
import Mapa from "../Mapa/mapa";
import Menu from "../Menu/index";

// import { Container } from './styles';

export default function Main(props) {
  return (
    <View style={{ flex: 1 }}>
      <Mapa />
      <Menu props={props} />
    </View>
  );
}
