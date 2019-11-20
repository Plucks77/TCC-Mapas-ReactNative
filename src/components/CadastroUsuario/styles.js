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
`;

export const Titulo = styled.Text`
  color: #df4723;
  font-size: 35;
`;

export const InputsArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#df4723"
})`
  width: 300;
  height: 60;
  font-size: 15;
  color: #df4723;
  margin-bottom: 1;
  border-bottom-width: 1;
`;

export const BotaoArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30;
`;

export const Botao = styled.TouchableOpacity`
  width: 200;
  height: 30;
  justify-content: center;
  align-items: center;
  border-width: 1;
  background: #df4723;
  border-color: #df4723;
`;

export const Seta = styled.TouchableOpacity`
  /* position: absolute; */
  margin-left: -350;
  margin-top: -100;
  margin-bottom: 30;
  left: 10;
  top: 20;
`;

export const ViewLottie = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;
