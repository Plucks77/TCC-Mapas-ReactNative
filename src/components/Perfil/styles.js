import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background: #1f1b24;
  /* background: #f0f5f5; */
`;

export const Imagem = styled.Image`
  width: 100;
  height: 100;
  border-radius: 40;
`;

export const Principal = styled.View`
  flex-direction: row;
  margin-horizontal: 30;
  margin-top: 80;
  margin-bottom: 5;
  text-align: center;
  display: flex;
`;

export const Nome = styled.Text`
  align-self: center;
  font-size: 25;
  font-weight: bold;
  margin-left: 50;
  color: #df4723;
`;

export const Campos = styled.View`
  margin-top: 35;
`;

export const Texto = styled.TextInput`
  font-size: 15;
  color: #df4723;
  margin-horizontal: 10;
  border-bottom-width: 1;
`;

export const ViewBotao = styled.View`
  margin-top: 250;
  margin-horizontal: 15;
`;

export const BotaoAlterar = styled.TouchableOpacity`
  width: 300;
  height: 30;
  border-radius: 5;
  font-weight: 900;
  background: #df4723;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Seta = styled.TouchableOpacity`
  position: absolute;
  left: 10;
  top: 20;
`;

export const ViewLottie = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;
