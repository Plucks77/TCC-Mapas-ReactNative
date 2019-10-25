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
  margin-top: 15;
  margin-bottom: 5;
  /* background: yellowgreen; */
  text-align: center;
  display: flex;
`;

export const Nome = styled.Text`
  align-self: center;
  font-size: 25;
  font-weight: bold;
  margin-left: 50;
  color: lightsalmon;
`;

export const Campos = styled.View`
  margin-top: 35;
`;

export const Texto = styled.TextInput`
  font-size: 15;
  color: lightsalmon;
  margin-horizontal: 10;
  border-bottom-width: 1;
`;

export const BotaoAlterar = styled.TouchableOpacity`
  width: 100;
  height: 25;
  background: lightsalmon;
  margin-top: 15;
  margin-left: 10;
  justify-content: center;
  align-items: center;
`;
