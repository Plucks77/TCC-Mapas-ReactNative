import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background: #1f1b24;
  /* background: #f0f5f5; */
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#df4723"
})`
  width: 300px;
  border: 2px;
  margin-bottom: 5px;
  border-radius: 4px;
  border-color: #121212;
  color: #df4723;
  font-size: 16px;
  padding-left: 5;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 5px;
  width: 300px;
  height: 28px;
  border-radius: 4px;
  background: #df4723;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const BotaoCriar = styled.TouchableOpacity`
  align-self: center;
  margin-top: 15;
`;

export const Texto = styled.Text`
  font-weight: bold;
  color: #df4723;
  font-size: 16;
`;

export const ViewLottie = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const Logar = styled.Text`
  font-size: 16;
`;
