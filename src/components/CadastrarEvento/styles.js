import styled from "styled-components/native";

export const Container = styled.ScrollView`
  height: 100%;
  background: #1f1b24;
`;

export const Inicial = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 45;
`;

export const Seta = styled.TouchableOpacity`
  flex: 1;
  margin-left: 15;
`;

export const Titulo = styled.Text`
  color: #df4723;
  font-size: 35;
  font-weight: bold;
  flex: 2;
`;

export const Campos = styled.View`
  margin-top: 25;
  margin-bottom: 85;
  align-items: center;
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

export const Seletor = styled.Picker`
  width: 300;
  height: 60;
  font-size: 15;
  color: #df4723;
  margin-bottom: 1;
  border-bottom-width: 1;
`;

export const Proximo = styled.TouchableOpacity`
  width: 200;
  height: 30;
  justify-content: center;
  align-items: center;
  border-width: 1;
  background: #df4723;
  border-color: #df4723;
  align-self: center;
`;

export const CampoData = styled.View`
  flex-direction: row;
  align-items: center;
  width: 300;
  height: 60;
  margin-bottom: 1;
  border-bottom-width: 1;
`;

export const Texto = styled.Text`
  font-size: 15;
  color: #df4723;
`;

export const Botao = styled.TouchableOpacity`
  /* background: #df4723; */
  color: white;
  width: 180;
  height: 30;
  align-items: center;
  justify-content: center;
`;
