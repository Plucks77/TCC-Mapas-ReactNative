import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background: #1f1b24;
  /* background: #f0f5f5; */
  justify-content: center;
  align-items: center;
`;

export const TituloArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20;
  background: lightgray;
`;

export const Titulo = styled.Text`
  font-size: 26;
`;

export const InputsArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20;
  background-color: lightblue;
`;

export const Input = styled.TextInput`
  width: 300;
  height: 60;

  /* border-color: black; */

  font-size: 15;
  color: #df4723;
  margin-horizontal: 10;
  border-bottom-width: 1;
`;

export const BotaoArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30;
`;

export const Boatao = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 30;
`;
