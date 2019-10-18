import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Menu({ props }) {
  return (
    <TouchableOpacity
      style={{ position: "absolute", top: 10, left: 10, elevation: 1 }}
      onPress={() => props.navigation.toggleDrawer()}
    >
      <Icon name="bars" size={30} />
    </TouchableOpacity>
  );
}
